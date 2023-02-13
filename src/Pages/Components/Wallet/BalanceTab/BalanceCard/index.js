import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import BitcoinSend from "./BitcoinSendModal";
import TetherSend from "./TetherSendModal";
import EthSend from "./EthSendModal";
import ReceivedModal from "../../ReceivedModal";
import { Dropdown } from "react-bootstrap";
import more from "../../../../../assets/images/more.svg";
import tildaIcon from "../../../../../assets/images/tilda.svg";
import mark from "../../../../../assets/images/questionMark.svg";
import convert from "../../../../../assets/images/convert.svg";
import icon from "../../../../../assets/images/basketIcon.svg";
import axios from "axios";
const BalanceCard = (data, props) => {
  const getWalletTransactions = async () => {
    console.log("in get wallet");
    const tokenIs = localStorage.getItem("userInfo");
    const parseToken = JSON.parse(tokenIs || "{}");
    let token = parseToken?.token;

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/transection/all`,
      config
    );
    console.log(response, "response");
  };

  useEffect(() => {
    getWalletTransactions();
  }, []);

  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showTether, setShowTether] = useState(false);
  const [showEth, setShowEth] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className={styles.balaceCard}>
      <BitcoinSend showModal={showModal} setShowModal={setShowModal} />
      <TetherSend showTether={showTether} setShowTether={setShowTether} />
      <EthSend showEth={showEth} setShowEth={setShowEth} />
      <ReceivedModal openModal={openModal} setOpenModal={setOpenModal} />
      <div className={styles.mgRight}>
        <div className={styles.topRow}>
          <div className={styles.directionColumn}>
            <img className={styles.icon} src={data.logo} alt="icon" />
            <span className={styles.txt}>{data.title}</span>
          </div>
          <div
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
          >
            <Dropdown show={show}>
              <Dropdown.Toggle id="dropdown-button-example1" variant="light">
                <img src={more} alt="moreIcon" />
              </Dropdown.Toggle>
              <Dropdown.Menu className={styles.menu} variant="light">
                <Dropdown.Item>
                  <div className={styles.dropdown}>
                    <img src={convert} alt="icon" />
                    <span>Convert</span>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item>
                  <div className={styles.dropdown}>
                    <img src={icon} alt="icon" />
                    <span>Buy</span>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item>
                  <div className={styles.dropdown}>
                    <img src={icon} alt="icon" />
                    <span>Sell</span>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className={styles.bottmRow}>
          {data?.data.map((item) => {
            return (
              <div className={styles.alignment}>
                {data.type === "bitcoin" && item.id === "bitcoin" && (
                  <div>
                    <span className={styles.balanceTxt}>Current Balance</span>
                    <h4 className={styles.amount}>
                      0 {item.symbol.toUpperCase()}
                    </h4>
                    <div className={styles.priceContainer}>
                      <img className={styles.tildaIcon} src={tildaIcon} />
                      <span className={styles.balanceTxt}>0 PKR</span>
                      <button>
                        <img src={mark} />
                      </button>
                    </div>
                  </div>
                )}
                {data.type === "tether" && item.id === "tether" && (
                  <div>
                    <span className={styles.balanceTxt}>Current Balance</span>
                    <h4 className={styles.amount}>
                      0 {item.symbol.toUpperCase()}{" "}
                    </h4>
                    <div className={styles.priceContainer}>
                      <img className={styles.tildaIcon} src={tildaIcon} />
                      <span className={styles.balanceTxt}>0 PKR</span>
                      <button>
                        <img src={mark} />
                      </button>
                    </div>
                  </div>
                )}

                {data.type === "ethereum" && item.id === "ethereum" && (
                  <div>
                    <span className={styles.balanceTxt}>Current Balance</span>
                    <h4 className={styles.amount}>
                      0 {item.symbol.toUpperCase()}
                    </h4>
                    <div className={styles.priceContainer}>
                      <img className={styles.tildaIcon} src={tildaIcon} />
                      <span className={styles.balanceTxt}>0 PKR</span>
                      <button>
                        <img src={mark} />
                      </button>
                    </div>
                  </div>
                )}
                <div>
                  {data.type === "bitcoin" && item.id === "bitcoin" && (
                    <>
                      <span className={styles.balanceTxt}>Market Price</span>
                      <p className={styles.marketPrice}>{item.current_price}</p>
                    </>
                  )}
                </div>
                <div>
                  {data.type === "tether" && item.id === "tether" && (
                    <>
                      <span className={styles.balanceTxt}>Market Price</span>
                      <p className={styles.marketPrice}>{item.current_price}</p>
                    </>
                  )}
                </div>
                <div>
                  {data.type === "ethereum" && item.id === "ethereum" && (
                    <>
                      <span className={styles.balanceTxt}>Market Price</span>
                      <p className={styles.marketPrice}>{item.current_price}</p>
                    </>
                  )}
                </div>
              </div>
            );
          })}

          <div className={styles.btnContainer}>
            {data.type === "bitcoin" && (
              <button
                onClick={() => setShowModal(true)}
                className={styles.btnOutline}
              >
                Send
              </button>
            )}
            {data.type === "tether" && (
              <button
                onClick={() => setShowTether(true)}
                className={styles.btnOutline}
              >
                Send
              </button>
            )}
            {data.type === "ethereum" && (
              <button
                onClick={() => setShowEth(true)}
                className={styles.btnOutline}
              >
                Send
              </button>
            )}
            <button
              onClick={() => setOpenModal(true)}
              className={styles.btnOutline}
            >
              Receive
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BalanceCard;
