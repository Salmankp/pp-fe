import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import like from "../../../../assets/images/likeIcon.svg";
import dislike from "../../../../assets/images/dislikeIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import { createFeedBack } from "../../../../actions/offer-actions";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Summary = ({ transactionData }) => {
  const dispatch = useDispatch();
  const [offerData, setOfferData] = useState();
  const { userInfo } = useSelector((state) => state.loggedInUser);
  const { token } = userInfo;
  // const transactionData = useSelector((state) => state.transactionData);
  const trading_id = transactionData?.data?.transaction?.transactionId;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const offerId = 
  transactionData?.data?.transaction?.offerId?._id;
  const buyerId = transactionData?.data?.transaction?.buyerId;
  const sellerId = transactionData?.data?.transaction?.sellerId;
  const paymentMethod = transactionData?.data?.transaction?.paymentMethod;
  const transId = transactionData?.data?.transaction?.transactionId;
  const [comment, setComment] = useState();
  const fetchOffer = async () => {
    if(offerId){
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/offer/${offerId}`,
      config
    );
    setLike(data?.data?.doc?.likeCount);
    setDisLike(data?.data?.doc?.disLikeCount);
    }
  };
  const [Like, setLike] = useState();
  const [disLike, setDisLike] = useState();

  const LikeBtn = async (id) => {
    await axios
      .put(
        `${process.env.REACT_APP_API_URL}/api/v1/offer/remove-disLike`,
        { _id: id },
        config
      )
      .then((response) => {
        setDisLike(response.data?.data?.doc?.disLikeCount);
      })
      .catch((error) => {});

    await axios
      .put(
        `${process.env.REACT_APP_API_URL}/api/v1/offer/add-like`,
        { _id: id },
        config
      )
      .then((response) => {
        setLike(response.data?.data?.doc?.likeCount);
      })
      .catch((error) => {});
  };

  const DisLikeBtn = async (id) => {
    await axios
      .put(
        `${process.env.REACT_APP_API_URL}/api/v1/offer/remove-Like`,
        { _id: id },
        config
      )
      .then((response) => {
        setLike(response.data?.data?.doc?.LikeCount);
      })
      .catch((error) => {});
    await axios
      .put(
        `${process.env.REACT_APP_API_URL}/api/v1/offer/add-disLike`,
        { _id: id },
        config
      )
      .then((response) => {
        setDisLike(response.data?.data?.doc?.disLikeCount);
      })
      .catch((error) => {});
  };

  const UserDataSave = () => {
    let data = {
      comment: comment,
      offerId,
      buyerId,
      sellerId,
      paymentMethod,
      Like,
      disLike,
      transId
    };
    dispatch(createFeedBack(data));
    setComment("");
  };
 
  useEffect(() => {
    fetchOffer();
  },[transactionData]);

  return (
    <div className={styles.wrap}>
      <div className={styles.topRow}>
        <div className={styles.box}>
          <div className={styles.nameContainer}>
            <p className={styles.name}>Bloomx</p>
            <div className={styles.tab}>Sold</div>
          </div>
          <p className={styles.amount}>
            <b>3,000 Rs</b> <span>0.00110177 BTC</span>
          </p>
          <button type="button" className={styles.removeBtn}>
            Remove from Contact
          </button>
        </div>
        <div className={styles.box}>
          <div className={styles.nameContainer}>
            <p className={styles.name}>apryl</p>
            <div className={`${styles.tab} ${styles.buyBtn}`}>Buy</div>
          </div>
          <p>
            <b>3,000 Rs</b> <span>0.00110177 BTC</span>
          </p>
        </div>
      </div>

      <div className={styles.btnContainer}>
        <button
          onClick={() => {
            LikeBtn(offerId);
          }}
          className={styles.likeBtn}
          type="button"
        >
          <img src={like} />
          <span>{Like}</span>
        </button>

        <button
          onClick={() => {
            DisLikeBtn(offerId);
          }}
          className={styles.dislikeBtn}
          type="button"
        >
          <img src={dislike} />
          <span> {disLike} </span>
        </button>
      </div>

      <textarea
        className={styles.txtArea}
        placeholder="Comment"
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
      ></textarea>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <button
        className={styles.feedBackBtn}
        type="button"
        onClick={UserDataSave}
      >
        Leave Feedback
      </button>
    </div>
  );
};
export default Summary;
