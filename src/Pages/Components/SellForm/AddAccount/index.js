import React, { useState } from "react";
import styles from "./styles.module.scss";
import Modal from "react-bootstrap/Modal";
import crossIcon from "../../../../assets/images/crossIcon.svg";
import profile from "../../../../assets/images/noun-profile.svg";
import greyInfoIcon from "../../../../assets/images/greyInfoIcon.svg";
import pakistan from "../../../../assets/images/flag.svg";
import ReactSelect from "../../../Components/Common/ReactSelect";
import { useForm } from "react-hook-form";
import { countryNames, countryCurrency } from "./countriesData";
import { useDispatch, useSelector } from "react-redux";
import { addBank, getBank } from "../../../../actions/bankAccount-actions";
const AddAccount = ({ showModal, setShowModal, setBankData }) => {
  const [personalAcc, setPersonalAcc] = useState();
  const { register, handleSubmit, errors, control } = useForm();
  const [country, setCountry] = useState(countryNames[0].value);
  const [currency, setCurrency] = useState(countryCurrency[0].value);
  const [accountType, setAccountType] = useState("personal");
  const loggedInUser = useSelector((state) => state.loggedInUser);
  const dispatch = useDispatch();
  const findOfferFunc = async (e) => {
    e = {
      ...e,
      country,
      currency,
      accountType,
      user: loggedInUser?.userInfo?.data?.user?._id,
    };
    let data = await dispatch(addBank(e));
    if (data.length > 0) {
      setBankData(data);
      setShowModal(false);
    }
  };

  const radioChange = (e) => {
    setAccountType(e.target.value);
  };
  return (
    <Modal
      className={styles.modal}
      show={showModal}
      onHide={() => setShowModal(false)}
      centered
    >
      <Modal.Body>
        <div className={styles.wrap}>
          <img
            className={styles.cross}
            src={crossIcon}
            onClick={() => setShowModal(false)}
            alt="crossIcon"
          />
          <div
            className={`${
              personalAcc === true ? styles.leftHead : styles.heading
            }`}
          >
            Add Bank Account
          </div>
          {personalAcc === true ? (
            <div>
              <div className="bold-text">
                <strong>Account type</strong>
              </div>
              <div className="p-profile">
                <div className="textWrap">
                  {accountType[0].toUpperCase() + accountType.slice(1)}
                </div>
                <div className="profile-icon">
                  <img src={profile} alt="profile" />
                </div>
              </div>
              <div className="pak-flag">
                <div className="flag">
                  {/* <img src={pakistan} alt="pakistan" /> */}
                  {`Details: `}
                </div>
                <div className="pak-text">
                  <span> {country}</span> paying in <span>{currency}</span>
                </div>
              </div>
              <label className="label-text">Bank name</label>
              <div>
                <input
                  name="Bank name"
                  type="text"
                  className="input-fieldbank"
                  {...register("bankName", { required: true })}
                />
              </div>
              <label className="label-text">Account holder's name</label>
              <div>
                <input
                  name="Account holder name"
                  type="text"
                  className="input-fieldbank"
                  {...register("accountHolderName", { required: true })}
                />
              </div>
              <label className="label-text">Custom bank details</label>
              <div>
                <textarea
                  className="textarea-wrapper"
                  {...register("details", { required: false })}
                ></textarea>
              </div>
              <div className={styles.info}>
                <img src={greyInfoIcon} alt="info" />
                <span className="info-wrapper">
                  Add to this field other bank account details, if needed.
                </span>
              </div>
              <label className="label-text">Account Number</label>
              <div>
                <input
                  name="Account number"
                  type="text"
                  className="input-fieldbank"
                  {...register("accountNumber", { required: false })}
                />
              </div>
              <div className="btnWrap">
                <button
                  className="backbtn"
                  onClick={() => setPersonalAcc(false)}
                >
                  Back
                </button>
                <button
                  className="nextBtn"
                  onClick={handleSubmit(findOfferFunc)}
                >
                  Add account
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className={styles.content}>
                <div className={styles.formWrap}>
                  <div className={styles.inputs}>
                    <div className={styles.radio}>
                      <input
                        type="radio"
                        name="toggler1"
                        id="PersonalAccount"
                        value="personal"
                        checked={accountType === "personal"}
                        onChange={radioChange}
                      />
                      <label for="PersonalAccount">
                        <div className={styles.circle}></div>Personal Account
                      </label>
                    </div>
                    <div className={styles.radio}>
                      <input
                        type="radio"
                        name="toggler1"
                        value="business"
                        id="Business"
                        checked={accountType === "business"}
                        onChange={radioChange}
                      />
                      <label for="Business">
                        <div className={styles.circle}></div>Business
                      </label>
                    </div>
                  </div>
                  <div className={styles.selectWrap}>
                    <div className={styles.label}>Bank account country</div>
                    <ReactSelect
                      options={countryNames}
                      value={countryNames[0]}
                      parentCallback={(e) => setCountry(e.value)}
                    />
                  </div>
                  <div className={styles.selectWrap}>
                    <div className={styles.label}>Currency</div>
                    <ReactSelect
                      name="countryCurrency"
                      options={countryCurrency}
                      value={countryCurrency[0]}
                      parentCallback={(e) => setCurrency(e.value)}
                    />
                  </div>
                </div>

                <div className={styles.btnWrap}>
                  <button onClick={() => setShowModal(false)}>Close</button>
                  <button
                    className={styles.active}
                    onClick={() => setPersonalAcc(true)}
                  >
                    Next
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddAccount;
