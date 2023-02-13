import React, { useState, useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import eyeIcon from "../../../../assets/images/eye.svg";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import { useFormik, Formik } from "formik";
import { login } from "../../../../actions/user-actions";
import { listSells } from "../../../../actions/sell-actions";
import {
  updateUser,
  send2FACode,
  verify2FACode,
  updateUserSession,
  updateUserActivity
} from "../../../../actions/user-actions";
import { useDispatch } from "react-redux";
import { Form, FormControl, Button } from "react-bootstrap";
import platform from "platform";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import PhoneInput, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  isValidPhoneNumber,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Alert } from "react-bootstrap";
import { BsInfoCircle } from "react-icons/bs";
import ReactCodeInput from "react-code-input";
import { Bars } from 'react-loader-spinner';

const LoginForm = ({ setLogin, setReset, setSignup }) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPass, setShowPass] = useState(false);
  const [withPhone, setWithPhone] = useState(true);
  const [loader, setLoader] = useState(false)
  const [enable2FA, setEnable2FA] = useState({
    isTrue: false,
    type: "",
    msg: "",
  });
  const [verify2FA, setVerify2FA] = useState(true);
  const [ip, setIP] = useState("");
  const [country, setCountry] = useState();
  const [city, setCity] = useState();
  const [error, setError] = useState("");
  const [value, setValue] = useState({
    email: "",
    password: "",
    phoneNumber: "",
    type: "PHONE",
  });

  const [inputError, setInputError] = useState({
    error: false,
    errorMsg: "",
  });

  const bName = platform.name;
  // fetch registered user detail from redux
  const userLog = useSelector((state) => state.loggedInUser);
  const id = userLog?.userInfo?.data?.user?._id;
  const getIp = async () => {
    const res = await axios.get("https://ifconfig.co/ip");
    setIP(res.data);
  };
  const getCC = async () => {
    const res = await axios.get("http://ip-api.com/json");
    setCity(res.data.city);
    setCountry(res.data.country);
  };

  useEffect(() => {
    getIp(), getCC();
  }, []);

  //call when user register and redirect ot user login
  let option = {
    loginIp: ip,
    loginCountry: country,
    loginCity: city,
    loginBrowser: bName,
  };

  // useEffect(() => {
  //   if (userLog?.userInfo?.status === 'success') {
  //     dispatch(updateUser(option, id));
  //     navigate('/buy')
  //   }
  // }, [userLog?.userInfo])

  const userSession = async () => {
    const location = await axios.get('http://ip-api.com/json');
    const activeSession = {
        browser: bName,
        country: location.data.country,
        city: location.data.city
    }
    await dispatch(updateUserSession(activeSession));
  }

  const handleSubmit = async () => {
    const isValid = validateForm();
    if (isValid) {
      setLoader(true);
      const res = await dispatch(login({ ...value }));
      if (res) {
        await userSession();
        if (res?.data?.user?.sms2FA?.onLogin) {
          await dispatch(send2FACode({phoneNumber: res?.data?.user?.phoneNumber}));
          setEnable2FA({
            ...enable2FA,
            isTrue: true,
            type: "sms",
            msg: "Please verify 2FA that is sent to your Phone Number",
          });
          setLoader(false);
        } else if (res?.data?.user?.email2FA?.onLogin) {
          await dispatch(send2FACode({email: res?.data?.user?.email}));
          setEnable2FA({
            ...enable2FA,
            isTrue: true,
            type: "email",
            msg: "Please verify 2FA that is sent to your email",
          });
          setLoader(false);
        } else {
          await dispatch(updateUserActivity('User login'));
          navigate("/buy");
        }
      }
    }
    setLoader(false);
  };

  const validateForm = () => {
    let checkError = false;
    if (withPhone) {
      if (value.phoneNumber === "" || value.password === "") {
        setInputError({
          ...inputError,
          error: true,
          errorMsg: "Fields are required",
        });
        checkError = true;
      }
    } else {
      const pattern = new RegExp(
        /^(("[\w-\s]+")|([+\w-]+(?:\.[+\w-]+)*)|("[\w-\s]+")([+\w-]+(?:\.[+\w-]+)*))(@((?:[+\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (value.email === "" || value.password === "") {
        setInputError({
          ...inputError,
          error: true,
          errorMsg: "Fields are required",
        });
        checkError = true;
      } else if (!pattern.test(value.email)) {
        setInputError({
          ...inputError,
          error: true,
          errorMsg: "Invalid email",
        });
        checkError = true;
      }
    }
    if (!checkError) {
      setInputError({ ...inputError, error: false, errorMsg: "" });
    }

    if (checkError) {
      return false;
    }
    return true;
  };

  const handleChangeCode = async (value) => {
    if (value.toString().length === 6) {
      setLoader(true);
      let verifyCode;
      if (enable2FA.type === "sms") {
        verifyCode = await dispatch(
          verify2FACode({
            phoneNumber: userLog?.userInfo?.data?.user?.phoneNumber,
            code: value,
          })
        );
      } else {
        verifyCode = await dispatch(
          verify2FACode({
            email: userLog?.userInfo?.data?.user?.email,
            code: value,
          })
        );
      }
      if (
        verifyCode?.data?.status === "approved" ||
        verifyCode?.data?.status === "success"
      ) {
        setVerify2FA(true);
        await dispatch(updateUserActivity('User login'));
        navigate("/buy");
      } else {
        setLoader(false);
        setVerify2FA(false);
      }
    }
  };

  return (
    <div className={styles.wrap}>
      <ToastContainer />
      <div className={styles.title}>Login</div>
      <div className={styles.phone_email}>
        <div
          className={withPhone && styles.active}
          onClick={() => {
            setValue({ ...value, type: "PHONE", email: "" });
            setWithPhone(true);
          }}
        >
          With Phone No
        </div>
        <div
          className={!withPhone && styles.active}
          onClick={() => {
            setValue({ ...value, type: "EMAIL", phoneNumber: "" });
            setWithPhone(false);
          }}
        >
          {" "}
          With Email
        </div>
      </div>
      <div className={styles.formWrap}>
        {inputError.error && (
          <Alert
            className="text-start d-flex align-items-center gap-3 mb-4"
            variant="danger"
          >
            <BsInfoCircle className="text-danger" />{" "}
            <p className="text-danger mb-0">{inputError.errorMsg}</p>
          </Alert>
        )}
        {withPhone ? (
          <div className={styles.fieldWrap}>
            <label>Phone Number</label>
            <PhoneInput
              international
              defaultCountry="AO"
              placeholder="Enter phone number"
              value={value.phoneNumber}
              name="phoneNumber"
              onChange={(event) => {
                setValue({
                  ...value,
                  phoneNumber: formatPhoneNumberIntl(event),
                });
              }}
            />
          </div>
        ) : (
          <div className={styles.fieldWrap}>
            <label>Email</label>
            <FormControl
              type="email"
              placeholder="Email Here"
              name="email"
              value={value.email}
              onChange={(e) => setValue({ ...value, email: e.target.value })}
            />
          </div>
        )}
        <div className={styles.fieldWrap}>
          <label>Password</label>
          <div className={styles.passWrap}>
            <FormControl
              type={showPass ? "text" : "password"}
              placeholder="Password here"
              name="password"
              value={value.password}
              onChange={(e) => setValue({ ...value, password: e.target.value })}
            />
            <p className="text-danger">
              {/* {errors.password ? errors.password : null} */}
            </p>
            <img
              src={eyeIcon}
              onClick={() => setShowPass(!showPass)}
              alt="show"
            />
          </div>
        </div>
          {
            loader && 
              <div style={{marginLeft: "45%"}}>
              <Bars color='#1FC28F' height={40} width={40} />
            </div>
          }
        {enable2FA?.isTrue && (
          <>
            <Alert
              className="text-start d-flex align-items-center gap-3 mb-4"
              variant="danger"
            >
              <BsInfoCircle className="text-danger" />{" "}
              <p className="text-danger mb-0">{enable2FA?.msg}</p>
            </Alert>

            <div className={styles.fieldWrap}>
              <div className="my-2 d-flex flex-column justify-content-start align-items-start">
                <label>Enter Code</label>
                <ReactCodeInput
                  fields={6}
                  isValid={verify2FA}
                  onChange={(val) => handleChangeCode(val)}
                />
              </div>
            </div>
          </>
        )}

        <div className={`${styles.btnWrap} ${styles.mgTop}`}>
          <Button className={styles.btn} onClick={handleSubmit} disabled={loader}>
            Login
          </Button>
        </div>
        <div className={styles.btnWrap}>
          <div className={styles.subtext}>
            Forgot Password?{" "}
            <span
              onClick={() => {
                setLogin(false);
                setReset(true);
                setSignup(false);
              }}
            >
              Click here!
            </span>
          </div>
        </div>
        <div className={styles.btnWrap}>
          <div className={styles.subtext}>
            Don have an account?{" "}
            <span
              onClick={() => {
                setLogin(false);
                setReset(false);
                setSignup(true);
              }}
            >
              Sign up
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
