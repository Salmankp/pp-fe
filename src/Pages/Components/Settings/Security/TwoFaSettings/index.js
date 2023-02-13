import React from "react";
import { Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../../../actions/user-actions";

const TwoFaSettings = ({ type }) => {
  const dispatch = useDispatch();
  const user = useSelector(
    (state) => state?.loggedInUser?.userInfo?.data?.user
  );

  const handleChange = async (e) => {
    let data;
    if (type === "email") {
      data = {
        email2FA: {
          ...user?.email2FA,
          [e.target.name]: e.target.checked,
        },
        sms2FA: {
          ...user?.sms2FA,
          [e.target.name]: false,
        },
      };
    }
    if (type === "sms") {
      data = {
        sms2FA: {
          ...user?.sms2FA,
          [e.target.name]: e.target.checked,
        },
        email2FA: {
          ...user?.email2FA,
          [e.target.name]: false,
        },
      };
    }
    dispatch(updateUser(data, user?._id));
  };
  return (
    <Card className="mb-3">
      <Card.Header>2FA event Settings</Card.Header>
      {type === "email" ? (
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center border-1 border-bottom pb-3">
            <span className="text-scondary fw-bold">Event Name</span>
            <span className="text-scondary fw-bold">Enable 2FA</span>
          </div>
          <div className="py-3 d-flex justify-content-between align-items-center border-1 border-bottom">
            <span>Login</span>
            <span>
              <Form.Check
                type="switch"
                id="loginSwitch"
                checked={user?.email2FA?.onLogin}
                name="onLogin"
                onChange={handleChange}
              />
            </span>
          </div>
          <div className="py-3 d-flex justify-content-between align-items-center border-1 border-bottom">
            <span>Sending CryptoCurrency</span>
            <span>
              <Form.Check
                type="switch"
                id="loginSwitch"
                checked={user?.email2FA?.onSendCurrency}
                name="onSendCurrency"
                onChange={handleChange}
              />
            </span>
          </div>
          <div className="py-3 d-flex justify-content-between align-items-center">
            <span>Releasing CryptoCurrency</span>
            <span>
              <Form.Check
                type="switch"
                id="loginSwitch"
                checked={user?.email2FA?.onGetCurrency}
                name="onGetCurrency"
                onChange={handleChange}
              />
            </span>
          </div>
        </Card.Body>
      ) : (
        type === "sms" && (
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center border-1 border-bottom pb-3">
              <span className="text-scondary fw-bold">Event Name</span>
              <span className="text-scondary fw-bold">Enable 2FA</span>
            </div>
            <div className="py-3 d-flex justify-content-between align-items-center border-1 border-bottom">
              <span>Login</span>
              <span>
                <Form.Check
                  type="switch"
                  id="loginSwitch"
                  checked={user?.sms2FA?.onLogin}
                  name="onLogin"
                  onChange={handleChange}
                />
              </span>
            </div>
            <div className="py-3 d-flex justify-content-between align-items-center border-1 border-bottom">
              <span>Sending CryptoCurrency</span>
              <span>
                <Form.Check
                  type="switch"
                  id="loginSwitch"
                  checked={user?.sms2FA?.onSendCurrency}
                  name="onSendCurrency"
                  onChange={handleChange}
                />
              </span>
            </div>
            <div className="py-3 d-flex justify-content-between align-items-center">
              <span>Releasing CryptoCurrency</span>
              <span>
                <Form.Check
                  type="switch"
                  id="loginSwitch"
                  checked={user?.sms2FA?.onGetCurrency}
                  name="onGetCurrency"
                  onChange={handleChange}
                />
              </span>
            </div>
          </Card.Body>
        )
      )}
    </Card>
  );
};

export default TwoFaSettings;
