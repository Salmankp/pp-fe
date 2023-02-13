import React, { useState } from "react";
import styles from "./styles.module.scss";
import AddnewModal from "./AddnewModal";
import AccountInfo from "./AccountInfo";
import { ReactComponent as PersonalIcon } from "../../../../assets/images/personal.svg";
import { ReactComponent as BusinessIcon } from "../../../../assets/images/business.svg";
import noRecord from "../../../../assets/images/noRecord.png";
import ReactSelect from "../../../Components/Common/ReactSelect";
import { useForm } from "react-hook-form";
import { countryCurrency, countryNames } from "../../SellForm/AddAccount/countriesData";
import { useDispatch, useSelector } from "react-redux";
import { addBank, getBank } from "../../../../actions/bankAccount-actions";

const PaymentMethod = () => {
  const [tab, setTab] = useState("personal");
  const [show, setShow] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [personalAcc, setPersonalAcc] = useState();
  const [country, setCountry] = useState(countryNames[0].value);
  const [currency, setCurrency] = useState(countryCurrency[0].value);
  const loggedInUser = useSelector((state) => state.loggedInUser);

  return (
    <div className={styles.wrap}>
      <AddnewModal showModal={showModal} setShowModal={setShowModal} />
      <h1 className={styles.heading}>Payment Method</h1>
      <p className={styles.description}>
        Add your bank account details below. You can share these details with
        your trade partner via trade chat, for bank transfer trades.
      </p>
      <h3 className={styles.subtitle}>Add your First Account</h3>
      <div className={styles.main}>
        {show == 1 && (
          <div>
            <span className={styles.txt}>Account Type</span>
            <div className={styles.accWrap}>
              <div
                className={`${tab === "personal" && styles.active} ${
                  styles.outer
                }`}
                onClick={() => setTab("personal")}
              >
                <PersonalIcon className={styles.icon} />
                <h5 className={styles.txt}> Personal</h5>
              </div>
              <div
                className={`${tab === "business" && styles.active} ${
                  styles.outer
                }`}
                onClick={() => setTab("business")}
              >
                <BusinessIcon className={styles.icon} />
                <h5 className={styles.txt}> Business</h5>
              </div>
            </div>
            <div className={styles.fieldWrap}>
              <div className={styles.label}>Bank Account Country</div>
              <ReactSelect
                      options={countryNames}
                      value={countryNames[0]}
                      parentCallback={(e) => setCountry(e.value)}
              />
            </div>
            <div className={styles.fieldWrap}>
              <div className={styles.label}>Currency</div>
              <ReactSelect
                      name="countryCurrency"
                      options={countryCurrency}
                      value={countryCurrency[0]}
                      parentCallback={(e) => setCurrency(e.value)}
              />
            </div>
            <button
              type="button"
              onClick={() => setShow(2)}
              className={styles.btn}
            >
              Next
            </button>
          </div>
        )}
        {show == 2 && <AccountInfo 
        currency={currency}
        country={country}
        tab={tab}
        show={setShow}
        user={loggedInUser?.userInfo?.data?.user?._id}
        />}
        <div className={styles.wallet}>
          <h3 className={styles.title}>Online Wallet Available</h3>
          <div className={styles.walletContainer}>
            <p className={styles.subheading}>Add online Wallet below</p>
            <button
              onClick={() => setShowModal(true)}
              className={styles.newbtn}
            >
              Add New
            </button>
            <div className={styles.noRecord}>
              <img src={noRecord} alt="no record" />
              <span className={styles.txt}>No wallet Available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PaymentMethod;
