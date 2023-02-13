import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import arrowsicon from "../../../../assets/images/arrowsIcon.svg";
import info from "../../../../assets/images/infoIcon.svg";
import filterIcon from "../../../../assets/images/filterIcon.svg";
import { useSelector } from "react-redux";
import SortDropDown from "../../SortDropDown";
import OutsideAlerter from "../../OutsideClickListener/OutsideClickListener";

const TopFilters = ({ setFilters, type, cryptoType }) => {
  const [values, setValues] = useState({
    activeFilter: false,
    popularFilter: "",
    userType: "",
    offerTags: [],
    priceFilter: 0,
    speedFilter: 0
  });
  const { tags } = useSelector(state => state.offerTags);
  const [showSortDropDown, setShowSortDropDown] = useState(false);
  useEffect(() => {
    setFilters(callback => ({ ...callback, ...values }));
  }, [values]);
  return (
    <>
      <div className={styles.headerWrap}>
        <div className={styles.text1Wrap}>
          <h1 className={styles.heading}>
            {type}{" "}
            {cryptoType === "ETH"
              ? `Ethereum`
              : cryptoType === "BTC"
              ? `Bitcoin`
              : `Tether`}{" "}
            ({cryptoType})
          </h1>
          <div className={styles.text}>
            With bank transfers, online wallets, gift cards, and over 350 other
            payment methods.
          </div>
        </div>
        <div className={styles.text2Wrap}>
          <button
            className={styles.howToBtn}
            onClick={() => setShowModal(true)}
          >
            How to
          </button>
          <div className={styles.btnWrap}>
            <div className={styles.checkboxWrap}>
              <input
                type="checkbox"
                checked={values.activeFilter}
                onClick={() =>
                  setValues(value => ({
                    ...value,
                    activeFilter: !value.activeFilter
                  }))
                }
              />
              <label>Vendors active in last 10 min</label>
            </div>
            <div style={{ position: "relative" }}>
              <OutsideAlerter setFunction={() => setShowSortDropDown(false)}>
                <button
                  onClick={() => setShowSortDropDown(!showSortDropDown)}
                  className={`${styles.IconsBtn} ${styles.disabled}`}
                >
                  <img src={arrowsicon} alt="arrows" />
                </button>
                {showSortDropDown && <SortDropDown setValues={setValues} />}
              </OutsideAlerter>
            </div>

            <button className={styles.IconsBtn}>
              <img src={info} alt="info" />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.filterWrap}>
        <div className={styles.title}>
          <img src={filterIcon} alt="filter" />
          Filters :
        </div>
        <select>
          <option>Popular in Pakistan</option>
        </select>
        <select
          onChange={e =>
            setValues(values => ({ ...values, userType: e.target.value }))
          }
        >
          <option value="">User Type</option>
          <option value="buyer">Buyer</option>
          <option value="seller">Seller</option>
          <option value="vendor">Vendor</option>
        </select>
        <select
          onChange={e =>
            setValues(values => ({ ...values, offerTags: [e.target.value] }))
          }
        >
          <option value="">Offer Tags</option>
          {tags[0]?.map((data, index) => (
            <option key={index} value={data?.slug}>
              {data?.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default TopFilters;
