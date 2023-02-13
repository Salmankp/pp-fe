import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFormik, Formik } from "formik";
import { updateForgetPassword, updateUserActivity } from "../../../../actions/user-actions";
import { useDispatch } from "react-redux";
import { Form, FormControl, Button } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import platform from "platform";
import "react-toastify/dist/ReactToastify.css";
import eyeIcon from "../../../../assets/images/eye.svg";
import * as Yup from "yup";
import axios from "axios";

const ResetForm = () => {
  const dispatch = useDispatch();
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const { token } = useParams();
  const [ip, setIP] = useState("");
  const [country, setCountry] = useState();
  const [city, setCity] = useState();
  const bName = platform.name;
  const [value, setValue] = useState({
    password: "",
    token
  });
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
    reqIp: ip,
    reqCountry: country,
    reqCity: city,
    reqBrowser: bName,
    reqTime: Date.now()
  };
  const getSchema = values => {
    return Yup.object().shape({
      password: Yup.string()
        .required("Password is Required")
        .min(8, "Must be 8 characters or more")
        .matches(/[a-z]+/, "One lowercase character")
        .matches(/[A-Z]+/, "One uppercase character")
        .matches(/\d+/, "One number")
    });
  };

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: value,
    enableReinitialize: true,
    validationSchema: () => Yup.lazy(values => getSchema(values)),

    async onSubmit(values) {
      const data = await dispatch(updateForgetPassword({ ...values, ...option }));
      if (data?.status === "success") {
        await dispatch(updateUserActivity('Reset Password', data?.data?._id));
        navigate("/login");
      }
    }
  });

  return (
    <div className={styles.wrap}>
      <ToastContainer />
      <div className={styles.title}>Reset Password</div>
      <Form onSubmit={handleSubmit}>
        <br />

        <br />
        <div className={styles.formWrap}>
          <div className={styles.fieldWrap}>
            <label>Password</label>
            <div className={styles.passWrap}>
              <FormControl
                type={showPass ? "text" : "password"}
                placeholder="Password here"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              <p className="text-danger">
                {errors.password ? errors.password : null}
              </p>
              <img
                src={eyeIcon}
                onClick={() => setShowPass(!showPass)}
                alt="show"
              />
            </div>
          </div>
          {/* )} */}

          <div className={`${styles.btnWrap} ${styles.mgTop}`}>
            <Button className={styles.btn} type="submit">
              Reset Password
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};
export default ResetForm;
