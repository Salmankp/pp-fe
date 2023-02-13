import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import ReactSelect from "../../Common/ReactSelect";
import bitcoin from "../../../../assets/images/bitcoin.svg";
import tether from "../../../../assets/images/tether.svg";
import ethereum from "../../../../assets/images/ethereum.svg";
import convertIcon from "../../../../assets/images/convertIcon.svg";
import { getCoinMarketPrices } from "../../../../utils/helper";
const options = [
  {
    value: "BTC",
    label: (
      <div>
        <img className={styles.icon} src={bitcoin} alt="bitcoin" />
        <span className={styles.selectTxt}>BTC </span>
      </div>
    ),
    type: "btc",
  },
  {
    value: "USD",
    label: (
      <div>
        <img className={styles.icon} src={tether} alt="tether" />
        <span className={styles.selectTxt}>UTC </span>{" "}
      </div>
    ),
    type: "usdt",
  },
  {
    value: "ETH",
    label: (
      <div>
        <img className={styles.icon} src={ethereum} alt="ethereum" />
        <span className={styles.selectTxt}>ETH </span>{" "}
      </div>
    ),
    type: "eth",
  },
];

const Convert = ({ data }) => {
  const [leftType, setLeftType] = useState("BTC");
  const [rightType, setRightType] = useState("ETH");
  const [leftBtcVal, setLeftBtcVal] = useState("");
  const [leftEthVal, setLeftEthVal] = useState("");
  const [leftUsdtVal, setLeftUsdtVal] = useState("");
  const [rightBtcVal, setRightBtcVal] = useState("");
  const [rightEthVal, setRightEthVal] = useState("");
  const [rightUsdtVal, setRightUsdtVal] = useState("");
  const [pkrBtc, setPkrBtc] = useState("");
  const [pkrEth, setPkrEth] = useState("");
  const [pkrUsdt, setPkrUsdt] = useState("");
  const [btcMinRate, setBtcMinRate] = useState(0.00004222);
  const [ethMinRate, setEthMinRate] = useState(0.002676459);
  const [usdtMinRate, setUsdtMinRate] = useState(5);
  const [targetValue, setTargetValue] = useState(5);
  const [converted, setConverted] = useState("");
  const [convertedPkr, setConvertedPkr] = useState("");
  const [leftPrice, setLeftPrice] = useState([]);
  const [rightPrice, setRightPrice] = useState([]);

  useEffect(() => {
    (async () => {
      setLeftPrice(await getCoinMarketPrices(leftType));
    })();
  }, [leftType]);

  useEffect(() => {
    (async () => {
      setRightPrice(await getCoinMarketPrices(rightType));
    })();
  }, [rightType]);

  useEffect(() => {
    if (leftPrice) {
      leftPrice.map((item) => {
        if (item.id === "tether") {
          setLeftUsdtVal(item.current_price);
        }
        if (item.id === "bitcoin") {
          setLeftBtcVal(item.current_price);
        }
        if (item.id === "ethereum") {
          setLeftEthVal(item.current_price);
        }
      });
    }

    if (rightPrice) {
      rightPrice.map((item) => {
        if (item.id === "tether") {
          setRightUsdtVal(item.current_price);
        }
        if (item.id === "bitcoin") {
          setRightBtcVal(item.current_price);
        }
        if (item.id === "ethereum") {
          setRightEthVal(item.current_price);
        }
      });
    }

    if (data) {
      data.map((item) => {
        if (item.id === "tether") {
          setPkrUsdt(item.current_price);
        }
        if (item.id === "bitcoin") {
          setPkrBtc(item.current_price);
        }
        if (item.id === "ethereum") {
          setPkrEth(item.current_price);
        }
      });
    }
  }, [
    leftBtcVal,
    leftEthVal,
    leftUsdtVal,
    rightBtcVal,
    rightEthVal,
    rightUsdtVal,
    converted,
    rightPrice,
    leftPrice,
    pkrBtc,
    pkrEth,
    pkrUsdt,
    convertedPkr,
  ]);

  const conversion = (e, l, r) => {
    setTargetValue(e.target.value);
    if (l === "BTC" && r === "ETH") {
      setConverted(e.target.value * rightBtcVal);
      setConvertedPkr(pkrBtc * e.target.value);
    }
    if (l === "ETH" && r === "BTC") {
      setConverted(e.target.value * rightEthVal);
      setConvertedPkr(pkrEth * e.target.value);
    }
    if (l === "ETH" && r === "ETH") {
      setConverted(e.target.value * rightEthVal);
      setConvertedPkr(pkrEth * e.target.value);
    }
    if (l === "BTC" && r === "BTC") {
      setConverted(e.target.value * rightBtcVal);
      setConvertedPkr(pkrBtc * e.target.value);
    }
    if (l === "BTC" && r === "USD") {
      setConverted(e.target.value * rightBtcVal);
      setConvertedPkr(pkrBtc * e.target.value);
    }
    if (l === "USD" && r === "ETH") {
      setConverted(e.target.value * rightUsdtVal);
      setConvertedPkr(pkrUsdt * e.target.value);
    }
    if (l === "ETH" && r === "USD") {
      setConverted(e.target.value * rightEthVal);
      setConvertedPkr(pkrEth * e.target.value);
    }
    if (l === "USD" && r === "BTC") {
      setConverted(e.target.value * rightUsdtVal);
      setConvertedPkr(pkrUsdt * e.target.value);
    }
    if (l === "USD" && r === "USD") {
      setConverted(e.target.value * rightUsdtVal);
      setConvertedPkr(pkrUsdt * e.target.value);
    }
  };

  const leftHandCallback = (childData) => {
    setLeftType(childData.value);
  };

  const rightHandCallback = (childData) => {
    setRightType(childData.value);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.outer}>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={styles.alignment}>
              <div>
                <h4 className={styles.cardTitle}>Amount Converting</h4>
                <p className={styles.subHeading}>
                  Available: <span className={styles.counter}>0</span>
                </p>
              </div>
              <div className={styles.outer}>
                <ReactSelect
                  backgroundColor="white"
                  options={options}
                  value={options}
                  parentCallback={leftHandCallback}
                  placeholder="Select Type"
                />
              </div>
            </div>
            <div className={styles.inputContainer}>
              <input
                type="number"
                placeholder="Enter Amount"
                onChange={(e) => {
                  conversion(e, leftType, rightType);
                }}
              />
            </div>
            <div>
              {leftType === "BTC" && (
                <span className={styles.value}>Min: {btcMinRate}</span>
              )}
              {leftType === "ETH" && (
                <span className={styles.value}>Min: {ethMinRate}</span>
              )}
              {leftType === "USD" && (
                <span className={styles.value}>Min: {usdtMinRate}</span>
              )}
            </div>
          </div>
        </div>
        <div className={styles.convertIcon}>
          <img src={convertIcon} alt="convertIcon" />
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={styles.alignment}>
              <div>
                <h4 className={styles.cardTitle}>Is worth</h4>
                <p className={styles.subHeading}>
                  Available: <span className={styles.counter}>0</span>
                </p>
              </div>
              <div className={styles.outer}>
                <ReactSelect
                  backgroundColor="white"
                  options={options}
                  value={options}
                  parentCallback={rightHandCallback}
                  placeholder="Select Type"
                />
              </div>
            </div>
            <div className={styles.inputContainer}>
              <input
                type="number"
                placeholder="Enter Amount"
                value={converted}
              />
            </div>
          </div>
        </div>
      </div>
      <span className={styles.rateTitle}>
        Exchange Rate PKR:{" "}
        <span className={styles.rate}>{parseInt(convertedPkr) || ""}</span>
      </span>
      {leftType === "BTC" && btcMinRate <= targetValue && (
        <div className={styles.error}>
          {" "}
          You entered an amount below the required minimum of ${btcMinRate} BTC
        </div>
      )}
      {leftType === "ETH" && ethMinRate <= targetValue && (
        <div className={styles.error}>
          {" "}
          You entered an amount below the required minimum of ${ethMinRate} ETH
        </div>
      )}
      {leftType === "USD" && usdtMinRate <= targetValue && (
        <div className={styles.error}>
          {" "}
          You entered an amount below the required minimum of ${
            usdtMinRate
          }{" "}
          USDT
        </div>
      )}
    </div>
  );
};
export default Convert;
