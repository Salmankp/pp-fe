import React, { useState, useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import SecurityModal from "./SecurityModal";
import lock from "../../../../assets/images/lock.svg";
import msgIcon from "../../../../assets/images/sms.svg";
import eyeIcon from "../../../../assets/images/eyeIcon.svg";
import infoIcon from "../../../../assets/images/infoIcon.svg";
import errorIcon from "../../../../assets/images/error_outline.svg";
import browseImg from "../../../../assets/images/browse.svg";
import tick from "../../../../assets/images/tick.svg";
import cross from "../../../../assets/images/cross.svg";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import moment from "moment";
import { useFormik, Formik } from "formik";
import axios from "axios";
import store from "../../../../store";
import { Form, FormControl, Button } from "react-bootstrap";
import { USER_LOGIN_LOGOUT } from "../../../../constants/user-constants";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import platform from "platform";
import { success, error } from "../../../../utils/toastr";
import {
  disable2FA,
  generateQR,
  updateUser,
  logoutApi,
  getUser,
  deleteUserSession
} from "../../../../actions/user-actions";
import TwoFa from "./TwoFa";
import TwoFaModal from "./TwoFaModal";
import TwoFaSettings from "./TwoFaSettings";

const Security = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showFaModal, setShowFaModal] = useState(false);
  const [EnableFaSettings, setEnableFaSettings] = useState(false);
  const [EnableEmailFaSettings, setEnableEmailFaSettings] = useState(false);
  const [showActivate2FA, setShowActivate2FA] = useState(false);
  const [ip, setIp] = useState("");
  const [country, setCountry] = useState();
  const [city, setCity] = useState();
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [value, setValue] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const userData = useSelector((state) => state.loggedInUser);
  const token = userData?.userInfo?.token;
  const id = userData?.userInfo?.data?.user?._id;
  const email = userData?.userInfo?.data?.user?.email;
  const isEmailVerified = userData?.userInfo?.data?.user?.isEmailVerified;
  const isPhoneVerified = userData?.userInfo?.data?.user?.isPhoneVerified;
  const userLogin = userData?.userInfo?.data?.user?.loginTime;
  const loginTime = moment(userLogin).fromNow();
  const bName = platform.name;
  const enable2FA = userData?.userInfo?.data?.user?.enable2FA;
  const loginIp = userData?.userInfo?.data?.user?.loginIp;
  const loginCountry = userData?.userInfo?.data?.user?.loginCountry;
  const loginCity = userData?.userInfo?.data?.user?.loginCity;
  const loginBrowser = userData?.userInfo?.data?.user?.loginBrowser;
  const updateIp = userData?.userInfo?.data?.user?.updateIp;
  const updateCountry = userData?.userInfo?.data?.user?.updateCountry;
  const updateCity = userData?.userInfo?.data?.user?.updateCity;
  const updateBrowser = userData?.userInfo?.data?.user?.updateBrowser;
  const updateTime = userData?.userInfo?.data?.user?.updateUserTime;
  const updateUserTime = moment(updateTime).fromNow();
  const kycIp = userData?.userInfo?.data?.user?.kycIp;
  const kycCountry = userData?.userInfo?.data?.user?.kycCountry;
  const kycCity = userData?.userInfo?.data?.user?.kycCity;
  const kycBrowser = userData?.userInfo?.data?.user?.kycBrowser;
  const kycUpdateTime = userData?.userInfo?.data?.user?.kycUserTime;
  const kycUserTime = moment(kycUpdateTime).fromNow();
  const reqIp = userData?.userInfo?.data?.user?.reqIp;
  const reqCountry = userData?.userInfo?.data?.user?.reqCountry;
  const reqCity = userData?.userInfo?.data?.user?.reqCity;
  const reqBrowser = userData?.userInfo?.data?.user?.reqBrowser;
  const reqT = userData?.userInfo?.data?.user?.reqTime;
  const sms2FA = userData?.userInfo?.data?.user?.sms2FA;
  const email2FA = userData?.userInfo?.data?.user?.email2FA;
  const activeSessions = userData?.userInfo?.data?.user?.activeSessions;
  const userActivities = userData?.userInfo?.data?.user?.userActivities;
  const reqTime = moment(reqT).fromNow();
  const [sessionDetail, setSessionDetail] = useState({
    signedIn: "",
    browser: "",
    ipAddress: "",
    location: "",
  });

  const getSchema = () => {
    return Yup.object().shape({
      currentPassword: Yup.string().required("Current Password is Required"),
      newPassword: Yup.string()
        .required("New Password is Required")
        .notOneOf(
          [Yup.ref("currentPassword")],
          "New Password must be different"
        )
        .min(8, "Must be 8 characters or more")
        .matches(/[a-z]+/, "One lowercase character")
        .matches(/[A-Z]+/, "One uppercase character")
        .matches(/\d+/, "One number"),
      confirmPassword: Yup.string()
        .required("Confirm Password is Required")
        .min(8, "Must be 8 characters or more")
        .matches(/[a-z]+/, "One lowercase character")
        .matches(/[A-Z]+/, "One uppercase character")
        .matches(/\d+/, "One number")
        .oneOf([Yup.ref("newPassword")], "Confirm Password did not match"),
    });
  };

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: value,
    validationSchema: () => Yup.lazy((values) => getSchema(values)),
    enableReinitialize: true,
    onSubmit() {

      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };

      let data = {
        email: email,
        newPassword: values.newPassword,
        currentPassword: values.currentPassword,
      };
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/api/v1/users/resetPassword/${id}`,
          data,
          config
        )
        .then(() => {
          dispatch({
            type: USER_LOGIN_LOGOUT,
          });
          navigate("/login");
        })
        .catch((error) => {
          toast.error("Current Password is not Correct!");
        });
    },
  });
  
  const getUpdatedUser = async () => {
    await dispatch(getUser(id));
  }

  useEffect(() => {
    getUpdatedUser();
    setIp(localStorage.getItem("ipAddress"));
  }, []);
  let option = {
    updateIp: ip,
    updateCountry: country,
    updateCity: city,
    updateBrowser: bName,
    updateUserTime: Date.now(),
  };
  const updationAddress = () => {
    dispatch(updateUser(option, id));
  };
  const logout = async (sessionId) => {
    const getSession = activeSessions.filter(item => item._id === sessionId);
    const res = await dispatch(deleteUserSession(sessionId));
    if(res?.status === "success"){
      if(getSession[0].ipAddress === ip && getSession[0].browser === bName){
        dispatch({
          type: USER_LOGIN_LOGOUT,
        });
        success('Session deleted successfully');
        dispatch(logoutApi(id));
        navigate("/login");
      } else {
        success('Session deleted successfully');
        getUpdatedUser();
      }
    }
  };

  const handleGenerateQR = async () => {
    if (!showActivate2FA) {
      const res = await dispatch(generateQR());
      return res?.status === "success" && setShowActivate2FA(res?.data);
    }
    setShowActivate2FA(false);
  };

  const handleDisable2FA = async () => {
    await dispatch(disable2FA());
  };

  const handleSms2Fa = async () => {
    if (!isEmailVerified || !isPhoneVerified) {
      setShowFaModal(true);
    } else {
      dispatch(
        updateUser(
          {
            sms2FA: {
              ...sms2FA,
              enable: true,
            },
          },
          id
        )
      );
    }
  };

  const handleEmail2Fa = async () => {
    if (!isEmailVerified || !isPhoneVerified) {
      setShowFaModal(true);
    } else {
      dispatch(
        updateUser(
          {
            email2FA: {
              ...email2FA,
              enable: true,
            },
          },
          id
        )
      );
    }
  };

  return (
    <div className={styles.wrap}>
      <SecurityModal showModal={showModal} setShowModal={setShowModal} />
      <TwoFaModal
        showModal={showFaModal}
        setShowModal={setShowFaModal}
        isEmailVerified={isEmailVerified}
      />
      <div className={styles.topRow}>
        <h1 className={styles.heading}>
          Two-factor authentication (2FA) settings
        </h1>
        <span className={styles.description}>
          Set answers to your security questions before setting up 2FA
        </span>
        <button type="button" className={styles.link}>
          Setup Now
        </button>
        <div className={styles.authContainer}>
          <h4 className={styles.title}>
            Set up your 2FA and make your account more secure.
          </h4>
          <div className={`${styles.alignment} justify-content-between`}>
            <div className="d-flex align-items-center">
              <div>
                <img className={styles.icon} src={lock} alt="icon" />
              </div>
              <div>
                <div className="d-flex gap-3">
                  <h3 className={`${styles.heading} mb-1`}>
                    Google Authenticator or Authy
                  </h3>
                  <span>
                    <button className={`${styles.btn} p-1`} type="button">
                      Recommended
                    </button>
                  </span>
                </div>
                <span className={styles.description}>
                  Random time-bound passcode generated by the app.
                </span>
              </div>
            </div>
            <div>
              {enable2FA ? (
                <button
                  className="btn btn-outline-success"
                  onClick={handleDisable2FA}
                >
                  Disable 2FA
                </button>
              ) : (
                <button
                  className="btn btn-outline-success"
                  onClick={handleGenerateQR}
                >
                  Activate Now
                </button>
              )}
            </div>
          </div>
        </div>
        {showActivate2FA && (
          <TwoFa
            data={showActivate2FA}
            setShowActivate2FA={() => setShowActivate2FA(false)}
          />
        )}

        <div className={styles.authContainer}>
          <div className={`${styles.alignment} justify-content-between`}>
            <div className="d-flex align-items-center">
              <div>
                <img className={styles.icon} src={msgIcon} alt="icon" />
              </div>
              <div>
                <div className="d-flex gap-3">
                  <h3 className={`${styles.heading} mb-1`}>SMS</h3>
                  <span>
                    {sms2FA.enable && (
                      <button
                        className={`${styles.btn} p-1`}
                        type="button"
                        onClick={() => setEnableFaSettings(!EnableFaSettings)}
                      >
                        Enable
                      </button>
                    )}
                  </span>
                </div>
                <span className={styles.description}>
                  A unique time-bound code sent via SMS.
                </span>
              </div>
            </div>
            <div>
              {sms2FA.enable ? (
                <button className="btn btn-outline-success" disabled={true}>
                  Activated
                </button>
              ) : (
                <button
                  className="btn btn-outline-success"
                  onClick={handleSms2Fa}
                >
                  Activate Now
                </button>
              )}
            </div>
          </div>
        </div>

        {EnableFaSettings && <TwoFaSettings type={"sms"} />}

        <div className={styles.authContainer}>
          <div className={`${styles.alignment} justify-content-between`}>
            <div className="d-flex align-items-center">
              <div>
                <img className={styles.icon} src={msgIcon} alt="icon" />
              </div>
              <div>
                <div className="d-flex gap-3">
                  <h3 className={`${styles.heading} mb-1`}>Email</h3>
                  <span>
                    {email2FA.enable && (
                      <button
                        className={`${styles.btn} p-1`}
                        type="button"
                        onClick={() =>
                          setEnableEmailFaSettings(!EnableEmailFaSettings)
                        }
                      >
                        Enable
                      </button>
                    )}
                  </span>
                </div>
                <span className={styles.description}>
                  A unique time-bound code sent via Email.
                </span>
              </div>
            </div>
            <div>
              {email2FA.enable ? (
                <button className="btn btn-outline-success" disabled={true}>
                  Activated
                </button>
              ) : (
                <button
                  className="btn btn-outline-success"
                  onClick={handleEmail2Fa}
                >
                  Activate Now
                </button>
              )}
            </div>
          </div>
        </div>

        {EnableEmailFaSettings && <TwoFaSettings type={"email"} />}
      </div>

      <div className={styles.border}></div>
      <Form onSubmit={handleSubmit}>
        <div className={styles.passwordContainer}>
          <h1 className={styles.title}>Change Password</h1>
          <div className={styles.field}>
            <span className={styles.label}>Current Password</span>
            <div className={styles.inputWrap}>
              <FormControl
                type={showCurrentPassword ? "text" : "password"}
                placeholder="Current Password"
                name="currentPassword"
                value={values.currentPassword}
                onChange={handleChange}
              />
              <p className="text-danger">
                {errors.currentPassword ? errors.currentPassword : null}
              </p>
              <img
                src={eyeIcon}
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                alt="show"
              />
            </div>
          </div>
          <div className={styles.field}>
            <span className={styles.label}>New password</span>
            <div className={styles.inputWrap}>
              <FormControl
                type={showNewPassword ? "text" : "password"}
                placeholder="New Password"
                name="newPassword"
                value={values.newPassword}
                onChange={handleChange}
              />
              <p className="text-danger">
                {errors.newPassword ? errors.newPassword : null}
              </p>
              <img
                src={eyeIcon}
                onClick={() => setShowNewPassword(!showNewPassword)}
                alt="show"
              />
            </div>
          </div>
          <div className={styles.field}>
            <span className={styles.label}>Confirm password</span>
            <div className={styles.inputWrap}>
              <FormControl
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
              />
              <p className="text-danger">
                {errors.confirmPassword ? errors.confirmPassword : null}
              </p>
              <img
                src={eyeIcon}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                alt="show"
              />
            </div>
          </div>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <div className={styles.outer}>
            <button
              className={styles.btn}
              type="submit"
              onClick={updationAddress}
            >
              Change Password
            </button>
            <div className={styles.alignment}>
              <img src={infoIcon} />
              {/* <span>
                Changing Password will log you out of all your active sessions
              </span> */}
            </div>
          </div>
        </div>
      </Form>
      <div className={styles.activeSession}>
        <h1 className={styles.title}>Active Sessions</h1>
        <div className={styles.tableOuter}>
          <table>
            <tbody>
              <tr>
                <th>Signed in </th>
                <th>Browser</th>
                <th>IP Address</th>
                <th>Location</th>
                <th>Current</th>
              </tr>
              {activeSessions?.sort((item1, item2) => item1.signedIn < item2.signedIn ? 1 : -1).map((item, index) => (
                <tr key={index}>
                  <td className={styles.content}>{moment(item?.signedIn).fromNow()}</td>
                  <td>
                    <div>
                      {item?.browser ? (
                        <img
                          className={styles.browseImg}
                          src={browseImg}
                          alt="icon"
                        />
                      ) : (
                        ""
                      )}
                      <span>{item?.browser}</span>
                    </div>
                  </td>
                  <td>{item?.ipAddress}</td>
                  {}
                  {item?.country && item?.city ? (
                    <td>{item?.country}, {item?.city}</td>
                  ) : (
                    <td></td>
                  )}
                  <td>
                    <div className={styles.alignItems}>
                      {item.ipAddress === ip && item.browser === bName ? (
                        <img src={tick} alt="icon" style={{background: "green"}}/>
                      ) : (
                        <img src={tick} alt="icon" />
                      )}
                    </div>
                  </td>
                  <td>
                    <button onClick={() => logout(item._id)}>
                      <img src={cross} alt="icon" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <button className={styles.blueBtn} type="button">
            End all current sessions except one
          </button> */}
        </div>
      </div>
      <div className={styles.activeSession}>
        <h1 className={styles.title}>Account Activity</h1>
        <div className={styles.tableOuter}>
          <table>
            <tbody>
              <tr>
                <th>Action</th>
                <th>Browser</th>
                <th>IP Address</th>
                <th>Location</th>
                <th>Signed in </th>
              </tr>
              {userActivities?.sort((item1, item2) => item1.signedIn < item2.signedIn ? 1 : -1).map((item, index) => (
                index <= 9 &&
                <tr key={index}>
                  <td className={styles.content}>{item?.action}</td>
                  <td>
                    <div>
                      {item?.browser ? (
                        <img
                          className={styles.browseImg}
                          src={browseImg}
                          alt="icon"
                        />
                      ) : (
                        ""
                      )}
                      <span>{item?.browser}</span>
                    </div>
                  </td>
                  <td>{item?.ipAddress}</td>
                  {}
                  {item?.country && item?.city ? (
                    <td>{item?.country}, {item?.city}</td>
                  ) : (
                    <td></td>
                  )}
                   <td className={styles.content}>{moment(item?.signedIn).fromNow()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.closingAccount}>
        <h1 className={styles.title}>Closing Account</h1>
        <div className={styles.metaInfo}>
          <img src={errorIcon} alt="errorIcon" />
          <div>
            <span>
              Closing your user account will delete all your information on
              Paxful such as your past trades, transactions etc. Once you submit
              the request to close your account, you’ll receive a confirmation
              link via email and a moderator will process your request.{" "}
            </span>
            <button type="button" className={styles.dangerBtn}>
              Close Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Security;
