import React, { useState, useEffect, useRef } from "react";
import moment from "moment";
import styles from "./styles.module.scss";
import profile from "../../../../assets/images/userProfile.png";
import sendIcon from "../../../../assets/images/sendIcon.svg";
import uploadIcon from "../../../../assets/images/smExport.svg";
import pdfDownloadIcon from "../../../../assets/images/pdfDownloadIcon.png";
import io from "socket.io-client";
import { useSelector } from "react-redux";
import { getChats, afterPostMessage } from "../../../../actions/chat-actions";
import { useDispatch } from "react-redux";
import Dropzone from "react-dropzone";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotificationSound from '../../../../assets/notification.mp3'
export const socket = io.connect(process.env.REACT_APP_SOCKET_URL);
const API_LINK = process.env.REACT_APP_SOCKET_URL;

const ChatBox = ({ title, transactionData }) => {
  const audioPlayer = useRef(null);
  const [chatData, setChatData] = useState("");
  const [input, setInput] = useState("");
  const [timeStamp, setTime] = useState("");
  const store = useSelector(store => store.loggedInUser);
  const [storageOfferID, setStoreageOfferID] = useState("");
  const chat = useSelector(chat => chat.chatData);
  const transactionId = transactionData?._id;
  
  const dispatch = useDispatch();
  const messagesEndRef = useRef(null);
  const isFirstRender = useRef(true);

  const timeFormat = () => {
    const d = Date.now();
    const time = new Date(d).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true
    });
    setTime(time);
    return time;
  };
  const getExtension = filename => {
    return filename.split(".").pop();
  };

  const SENDER = chatDataPropsSender => {
    const data = chatDataPropsSender.chatDataPropsSender;
    const senderResponse =
      data?.message && data?.message.substring(0, 10) === "data:image" ? (
        <a target="_blank" download href={data?.message} rel="noreferrer">
          <img style={{ maxWidth: "200px" }} src={data?.message} alt="img" />
        </a>
      ) : data?.message &&
        data?.message.substring(0, 20) === "data:application/pdf" ? (
        <a download="p2p-query.pdf" href={data?.message}>
          <img style={{ maxWidth: "200px" }} src={pdfDownloadIcon} alt="img" />
        </a>
      ) : (
        data.message
      );
    return senderResponse;
  };

  const RECEIVER = chatDataPropsReceiver => {
    const data = chatDataPropsReceiver.chatDataPropsReceiver;
    const receiverResponse =
      data?.message && data?.message.substring(0, 10) === "data:image" ? (
        <a target="_blank" href={data?.message} rel="noreferrer">
          <img style={{ maxWidth: "200px" }} src={data?.message} alt="img" />
        </a>
      ) : data?.message &&
        data?.message.substring(0, 20) === "data:application/pdf" ? (
        <a download="p2p-query.pdf" href={data?.message}>
          <img style={{ maxWidth: "200px" }} src={pdfDownloadIcon} alt="img" />
        </a>
      ) : (
        data?.message
      );
    return receiverResponse;
  };

  useEffect(() => {
    setStoreageOfferID(localStorage.getItem("offer_id"));
    if (chat) {
      setChatData(chat);
    }
    messagesEndRef?.current.scrollIntoView({
      block: "end",
      behavior: "smooth"
    });
  }, [chat, chatData]);

  useEffect(() => {
    if (!isFirstRender?.current) {
      let temp;
      socket.on("receive-chat-message", data => {
        if (data) {
          temp = data;
          audioPlayer.current.play();
          dispatch(afterPostMessage(temp));
        }
      });
      if(transactionId){
      dispatch(getChats(transactionId))
      }
      timeFormat();
    }
    return () => {
      isFirstRender.current = false;
    };
  }, [socket,transactionData]);

  const sendMessage = () => {
    let sellerId = transactionData?.sellerId?._id || transactionData?.sellerId
    let buyerId = transactionData?.buyerId?._id || transactionData?.buyerId

    const payLoad = {
      message: input,
      senderID: store?.userInfo?.data?.user?._id,
      time: timeStamp,
      receiverID: sellerId === store?.userInfo?.data?.user?._id ? buyerId : sellerId,
      transactionId: transactionData?._id
    };

    console.log("payload", payLoad)
    socket.emit("send-chat-payload", payLoad);
    setInput("");
  };

  const onDrop = files => {
    const file = files[0];
    const extension = getExtension(file.name).toLowerCase();
    var arr = ["pdf", "jpeg", "png"];
    if (!arr.includes(extension)) {
      alert("Extension is not allowed");
      return false;
    }
    let baseData;
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      baseData = reader.result;
      let sellerId = transactionData?.sellerId?._id || transactionData?.sellerId
      let buyerId = transactionData?.buyerId?._id || transactionData?.buyerId

      console.log(sellerId, buyerId)
      const payLoad = {
        message: baseData,
        senderID: store?.data.user._id,
        receiverID: sellerId === store?.userInfo?.data?.user?._id ? buyerId : sellerId,
        transactionId: transactionData?._id
      };
      socket.emit("send-chat-payload", payLoad);
    };
  };
  const dates = new Set();
  const renderDate = (chat, dateNum) => {
    const timestampDate = moment
      .utc(chat?.createdAt)
      .local()
      .startOf("day")
      .fromNow();
    // Add to Set so it does not render again
    dates.add(dateNum);
    return <>{timestampDate}</>;
  };

  return (
    <div className={styles.wrap}>
      <audio ref={audioPlayer} src={NotificationSound} />
      <ToastContainer />
      <div className={styles.header}>
        <img src={profile} alt="logo" />
        {title}
      </div>
      <div className={styles.chatContainer}>
        {chatData &&
          chatData?.chats &&
          chatData.chats.map((data, index) => {
            const dateNum = moment(data?.createdAt).format("ddMMyyyy");
            return (
              (store?.userInfo?.data?.user?._id === data?.receiver || store?.userInfo?.data?.user?._id === data?.sender) && (<div key={index} className={styles.preChatWrap}>
                <div className={styles.dayTime}>
                  {dates.has(dateNum) ? null : renderDate(data, dateNum)}
                </div>
                <div className={styles.msgWrap}>
                  {store?.userInfo?.data?.user?._id === data?.receiver && (
                    <div className={styles.receiveMsg}>
                      <div className={styles.msgContent}>
                        <span>
                          {console.log("i am reciever", store?.userInfo?.data?.user?._id, data?.receiver, data.message)}
                          <RECEIVER chatDataPropsReceiver={data} />
                        </span>
                      </div>
                    </div>
                  )}
                  {store?.userInfo?.data?.user?._id == data?.sender && (
                    <div className={styles.sendMsg}>
                      <div className={styles.msgContent}>
                        <span>
                          {console.log("i am sender", store?.userInfo?.data?.user?._id, data?.sender, data?.message)
                          }
                          <SENDER chatDataPropsSender={data} />
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              ));
          })}
        <div ref={messagesEndRef} />
      </div>
      <div className={styles.txtContainer}>
        <div className={styles.bottomRow}>
          <div className={styles.alignment}>
            <input
              className={styles.inputField}
              placeholder="Write a Message..."
              type="text"
              value={input}
              onChange={event => {
                setInput(event.target.value);
              }}
            />

            <Dropzone onDrop={onDrop}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <button>
                      {" "}
                      <img src={uploadIcon} alt="icon" />{" "}
                    </button>
                  </div>
                </section>
              )}
            </Dropzone>
          </div>
          <button onClick={() => sendMessage()} type="button">
            <img src={sendIcon} alt="icon" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ChatBox;
