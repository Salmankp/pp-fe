import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Switch from "react-switch";
import styles from "./styles.module.scss";
import Accordion from "react-bootstrap/Accordion";
import scaleIcon from "../../../../assets/images/scaleIcon.svg";
import hamIcon from "../../../../assets/images/hamIcon.svg";
import arrowDown from "../../../../assets/images/arrowDownIcon.svg";
import PayVia from "../PayVia";
import GiftCard from "../PayVia/GiftCardModal";
import { countryList } from "../../../../constants/offer-constants";
import {
  formatNumber,
  getCurrentCurrencyPrice
} from "../../../../utils/helper";
import GraphModal from "./GraphModal";
import { cryptoTypes } from "../../../../constants/cryptoTypes";
import { useDispatch, useSelector } from "react-redux";
import { listPaymentMethods } from "../../../../actions/giftCard-actions";

const LeftBar = ({ comp, setFilters, cryptoType }) => {
  const [swtich, setSwitch] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [opneModal, setOpenModal] = useState(false);
  const [currentRate, setCurrentRate] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("");
  const { tags } = useSelector(state => state.offerTags);
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      setCurrentRate(
        formatNumber(await getCurrentCurrencyPrice("PKR", cryptoType))
      );
      dispatch(listPaymentMethods());
    })();
  }, [cryptoType]);
  const findOfferFunc = e => {
    e = { ...e, isVerified: swtich, paymentMethod };
    setFilters(e);
  };
  return (
    <div className={styles.wrap}>
      {/* <PayVia showModal={showModal} setShowModal={setShowModal} /> */}
      {/* <GraphModal opneModal={opneModal} setOpenModal={setOpenModal} /> */}
      <GiftCard
        openModal={showModal}
        setOpenModal={setShowModal}
        setPaymentMethod={setPaymentMethod}
      />
      {/* <PayVia showModal={showModal} setShowModal={setShowModal} /> */}
      <div className={styles.fieldWrap}>
        <div className={styles.label}>
          {comp && comp?.charAt(0).toUpperCase() + comp && comp?.slice(1)}
        </div>
        <div className={styles.field}>
          <select {...register("cryptoCurrencyType", { required: false })}>
            {cryptoTypes.map((data, index) => (
              <option value={data.key} key={index}>
                {data.name}
              </option>
            ))}
          </select>
          <button className={styles.subtext} onClick={() => setOpenModal(true)}>
            1 {cryptoType}={" "}
            <span className={styles.green}>{currentRate} PKR</span>
            <img src={scaleIcon} alt="scaleIcon" />
          </button>
        </div>
      </div>

      <div className={styles.fieldWrap}>
        <div className={styles.label}>Pay via</div>
        <div className={styles.field}>
          <input
            type="text"
            placeholder={
              paymentMethod === "" ? "All Payment methods" : paymentMethod
            }
            disabled
          />
          <button className={styles.hamBtn} onClick={() => setShowModal(true)}>
            <img src={hamIcon} alt="ham" />
          </button>
        </div>
      </div>

      <div className={styles.fieldWrap}>
        <div className={styles.label}>I want to spend</div>
        <div className={styles.field}>
          <input
            type="number"
            {...register("amount", { required: false })}
            placeholder="Any Amount"
          />
          <button
            className={styles.currencyBtn}
            onClick={e => e.preventDefault}
          >
            <span className={styles.currency}>$</span>
            <img src={arrowDown} alt="arrow" />
          </button>
        </div>
      </div>

      <div className={styles.fieldWrap}>
        <div className={styles.label}>Offer Location</div>
        <div className={styles.field}>
          <select {...register("offerLocation", { required: false })}>
            <option value="">All Countries</option>
            {countryList.map((data, index) => (
              <option key={index} value={data?.toLowerCase()}>
                {data}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.offerWrap}>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Offer Tags</Accordion.Header>
              <Accordion.Body>
                <div className={styles.outer}>
                  {tags[0]?.map((data, index) => (
                    <div key={index} className={styles.checkboxContainer}>
                      <input
                        className={styles.checkbox}
                        type="checkbox"
                        value={data.slug}
                        {...register("offerTags", { required: false })}
                      />
                      <span className={styles.checkboxTxt}>{data?.name}</span>
                    </div>
                  ))}
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className={styles.offers}>
          <div className={styles.text}>Verified Offers Only</div>
          <div className={styles.switchBtn}>
            <Switch
              onColor="#1FC28F"
              offColor="#A8A8A8"
              uncheckedIcon={false}
              checkedIcon={false}
              width={28}
              height={17}
              handleDiameter={16}
              onChange={() => setSwitch(!swtich)}
              checked={swtich}
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className={styles.offerBtn}
        onClick={() =>
          setFilters({
            cryptoCurrencyType: "bitcoin",
            isVerified: false
          })
        }
      >
        Reset Filters
      </button>
      <button
        type="submit"
        className={styles.offerBtn}
        onClick={handleSubmit(findOfferFunc)}
      >
        Find Offers
      </button>
    </div>
  );
};

export default LeftBar;
