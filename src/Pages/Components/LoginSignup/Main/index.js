import React, { useState } from "react";
import styles from "./styles.module.scss";
import loginImg from "../../../../assets/images/login.png";
import LoginForm from "../LoginForm";
import SignUpForm from "../SignUpForm";
import ForgetForm from "../ForgetForm";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ResetForm from "../ResetForm";

const Main = ({ resetComp = false }) => {
  const [login, setLogin] = useState(true);
  const [reset, setReset] = useState(false);
  const [signup, setSignup] = useState(false);
  return (
    <div>
      <div className={styles.wrap}>
        <Row>
          <Col lg={6} md={12} sm={12}>
            <div className={styles.text_img_wrap}>
              <div className={styles.text1}>Buy, Sell, Invest, Convert.</div>
              <div className={styles.text2}>Welcome Back</div>
              <div className={styles.text3}>
                A Few clicks away from creating your account.
              </div>
              <div className={styles.img}>
                <img src={loginImg} alt="coin" />
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <div className={styles.form}>
              {resetComp ? (
                <ResetForm />
              ) : login ? (
                <LoginForm
                  setLogin={setLogin}
                  setSignup={setSignup}
                  setReset={setReset}
                />
              ) : signup ? (
                <SignUpForm
                  setLogin={setLogin}
                  setSignup={setSignup}
                  setReset={setReset}
                />
              ) : (
                reset && (
                  <ForgetForm
                    setLogin={setLogin}
                    setSignup={setSignup}
                    setReset={setReset}
                  />
                )
              )}
            </div>
          </Col>
        </Row>
      </div>
      {/* <div className={styles.wrap}> */}
      {/* <div className={styles.text_img_wrap}>
          <div className={styles.text1}>Buy, Sell, Invest, Convert.</div>
          <div className={styles.text2}>Welcome Back</div>
          <div className={styles.text3}>
            A Few clicks away from creating your account.
          </div>
          <div className={styles.img}>
            <img src={loginImg} alt="coin" />
          </div>
        </div> */}
      {/* <div className={styles.form}>
          {login ? (
            <LoginForm setLogin={setLogin} />
          ) : (
            <SignUpForm setLogin={setLogin} />
          )}
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default Main;
