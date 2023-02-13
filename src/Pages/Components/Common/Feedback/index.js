import React from "react";
import styles from "./styles.module.scss";
import userImg1 from "../../../../assets/images/userImg1.svg";
import likeIcon2 from "../../../../assets/images/likeIcon2.svg";
import dislike from "../../../../assets/images/dislikeIcon.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import store from "../../../../store";

const Feedback = ({ heading, offer }) => {
  let userId = offer?.user?._id
  const [feedback, setFeedback] = useState();
  const [userFeedback, setUserFeedback] = useState();
  
  const fetchComment = async () => {
    const token = store?.getState()?.loggedInUser?.userInfo?.token;

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    let { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/feedback/offerfeedbacks/${offer._id}`,
      config
    );
    let dateMapping = {
      "01": "Jan",
      "02": "Feb",
      "03": "Mar",
      "04": "April",
      "05": "May",
      "06": "Jun",
      "07": "Jul",
      "08": "Aug",
      "09": "Sept",
      "10": "Oct",
      "11": "Nov",
      "12": "Dec",
    };
    data.data.doc = data.data.doc.map((item) => {
      let year = item.createdAt.substring(0, 4);
      let month = item.createdAt.substring(5, 7);
      let date = item.createdAt.substring(8, 10);
      return { ...item, createdAt: `${dateMapping[month]} ${date}, ${year}` };
    });
    setFeedback(data?.data?.doc);
  };
 const fetchUserFeedback = async () => {
  const token = store?.getState()?.loggedInUser?.userInfo?.token;

  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  let { data } = await axios.get(
    `${process.env.REACT_APP_API_URL}/api/v1/feedback/userfeedbacks/${userId}`,
    config
  );
  let dateMapping = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "April",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sept",
    "10": "Oct",
    "11": "Nov",
    "12": "Dec",
  };
  data.data.doc = data.data.doc.map((item) => {
    let year = item.createdAt.substring(0, 4);
    let month = item.createdAt.substring(5, 7);
    let date = item.createdAt.substring(8, 10);
    return { ...item, createdAt: `${dateMapping[month]} ${date}, ${year}` };
  });
  setUserFeedback(data?.data?.doc);
};

  useEffect(() => {
    fetchComment();
    fetchUserFeedback();
  }, []);
  
  return (
    <div className={styles.wrap}>
      <div className={styles.headerWrap}>
        <div className={styles.heading}>{heading}</div>
        <div className={styles.btnWrap}>
          <button>All</button>
          <button>Positive</button>
          <button>Negative</button>
        </div>
      </div>
      {feedback && feedback.length ? (
        <div className={styles.tableWrap}>
          <table>
            <tbody>
              {feedback &&
                feedback.map((index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <div className={styles.col1}>
                         {index?.buyerId?.profilePic ? ( <img
                            className={styles.userImg}
                            src={`data:image/jpeg;base64,${index?.buyerId?.profilePic}`}
                            alt="user"
                          />) : ( <img
                            className={styles.userImg}
                            src={userImg1}
                            alt="user"
                          />)} 
                          <div className={styles.name_date}>
                            <div className={styles.name}>
                              {index.buyerId?.name}
                            </div>
                            <div className={styles.date}>{index.createdAt}</div>
                          </div>
                          <div className={styles.rightSpace}>
                            <button className={styles.mgRight}>
                              {index?.Like === 1 ? (
                                <img
                                  src={likeIcon2}
                                  className={styles.imp}
                                  alt="imp"
                                />
                              ) : index?.disLike === 1 ? (
                                <img
                                  src={dislike}
                                  className={styles.imp}
                                  alt="imp"
                                />
                              ) : (
                                ""
                              )}
                            </button>
                            <span className={styles.counter}></span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className={styles.col2}>
                          <div className={styles.title_cur_amount}>
                            <div className={styles.title}>
                              {index?.paymentMethod?.name}
                            </div>
                            <div className={styles.cur_amount}>
                              <div className={styles.cur}>
                                {offer?.preferredCurrency}
                              </div>
                              <div className={styles.amount}>Low Amount</div>
                            </div>
                          </div>
                          <div className={styles.text}>{index.comment}</div>
                        </div>
                      </td>
                      <td>
                        <div className={styles.col3}>
                          <span className={styles.link}>View Offer</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <div className={styles.more}>See More</div>
        </div>
      ) : (
        <div className={styles.loader}>
            <span>No Feedback</span>
          </div>
      )}
    </div>
  );
};

export default Feedback;
