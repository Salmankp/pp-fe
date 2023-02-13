import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import userImg from "../../../../assets/images/userImg.svg";
import icon1 from "../../../../assets/images/bitcoinIcon.jpg";
import icon2 from "../../../../assets/images/svgIcon2.svg";
import icon3 from "../../../../assets/images/svgIcon3.svg";
import icon4 from "../../../../assets/images/svgIcon4.jpg";
import image from "../../../../assets/images/displayPic.svg";
import axios from "axios";
import store from "../../../../store";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { allTransactions } from "../../../../actions/transaction-actions.js";

const UserInfo = () => {
  const [transfeedbacks, setTransFeedbacks] = useState();
  const userData = useSelector(
    (state) => state?.loggedInUser?.userInfo?.data?.user
  );
  const feedback = useSelector((state) => state?.feedback?.feedbackData);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allTransactions());
  }, []);

  const transactions = useSelector(
    (state) => state?.transactionData?.allTransactions
  );

  console.log(transactions, "trans");
  const transactionData = useSelector((state) => state.transactionData);
  const transId =
    transactionData?.data?.transaction?.transactionId ||
    transactionData?.releaseData?.transactionId;
  const fetchTransFeedback = async () => {
    const token = store?.getState()?.loggedInUser?.userInfo?.token;

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    let { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/feedback/transfeedbacks/${transId}`,
      config
    );
    setTransFeedbacks(data?.data?.doc);
  };

  useEffect(() => {
    fetchTransFeedback();
  }, []);
  return (
    <div className={styles.wrap}>
      <div className={styles.userWrap}>
        <div className={styles.img}>
          {userData?.profilePic ? 
          ( <img src={`data:image/jpeg;base64,${userData?.profilePic}`}/>) 
          : ( <img src={userImg} alt="user" />)}
         
        </div>
        <div className={styles.userInfo}>
          <h3 className={styles.userName}>{userData?.name}</h3>
          <span className={styles.amount}>0 BTC</span>
          <p>
            <span className={styles.countGreen}>+0</span>/
            <span className={styles.countRed}>-0</span>
          </p>
        </div>
      </div>
      <div className={styles.verifyWrap}>
        <ul>
          <li>
            <button onClick={() => navigate("/buy")}>
              <img className={styles.icons} src={icon1} alt="icon" />
              <span>Buy Bitcoin</span>
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/settings")}>
              <img className={styles.icons} src={icon2} alt="icon" />
              <span>2FA Security</span>
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/wallet")}>
              <img className={styles.icons} src={icon3} alt="icon" />
              <span>Send & Recieve</span>
            </button>
          </li>
          <li>
            <button>
              <img className={styles.icons} src={icon4} alt="icon" />
              <span>Help</span>
            </button>
          </li>
        </ul>
      </div>
      <div className={styles.infoWrap}>
        <div className={styles.alignment}>
          <div className={styles.heading}>Past Trades</div>
          <div className={styles.countContainer}>
            <span className={styles.counter}>{transactions?.data.length}</span>
          </div>
        </div>
      </div>
      {transactions?.data &&
        transactions?.data.map((item) => {
          return (
            <div className={styles.trades}>
              {item?.sellerId?.profilePic ? (
                <img className={styles.img} src={`data:image/jpeg;base64,${item?.sellerId?.profilePic}`} alt="img" />
              ) : (
                <img className={styles.img} src={image} alt="img" />
              )}
              <div className={styles.container}>
                <h3 className={styles.title}>
                  {item?.offerId?.tradingMethod?.toUpperCase()} -{" "}
                  {item?.paymentMethod?.name}
                </h3>
                <p className={styles.description}>
                  {item.fiatAmount}/ {item.cryptoAmount.toFixed(8)}
                </p>
              </div>
            </div>
          );
        })}

      <div className={styles.btnWrap}>
        <button>View all</button>
      </div>
      <div className={`${styles.alignment} ${styles.mgBottom}`}>
        <div className={styles.heading}>Feedbacks</div>
        <div className={styles.countContainer}>
          <span className={styles.counter}>{transfeedbacks?.length}</span>
        </div>
      </div>
      {transfeedbacks &&
        transfeedbacks.map((index) => {
          return (
            <tr key={index}>
              <td>
                <span className={styles.description}> {index?.comment}</span>
              </td>
            </tr>
          );
        })}
    </div>
  );
};

export default UserInfo;
