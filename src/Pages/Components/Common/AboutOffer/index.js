import React from "react";
import styles from "./styles.module.scss";
import rating from "../../../../assets/images/rating.svg";
import profile from "../../../../assets/images/userProfile.png";
import thumbUp from "../../../../assets/images/impIcon.svg";
import thumbDown from "../../../../assets/images/thumbDown.svg";
import check from "../../../../assets/images/check.svg";
import { formatNumber } from "../../../../utils/helper";

const AboutOffer = ({ offer, com }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.aboutOffer}>
        <div className={styles.alignment}>
          <div className={styles.heading}>About this offer</div>
          <img src={rating} alt="icon" />
        </div>
        <div className={styles.sellerRate}>
          <div className={styles.mgBottom}>
            <span className={styles.title}>Buyer rate</span>
            <div>
              <span className={styles.rate}>
                {formatNumber(offer?.cryptoValue)} {offer?.preferredCurrency} .
              </span>
              <span className={styles.rateInfo}>
                {offer?.offerMargin?.margin}% above market
              </span>
            </div>
          </div>
          <div className={styles.mgBottom}>
            <span className={styles.title}>Sell Limits</span>
            <div>
              <span className={styles.rate}>
                Min {offer?.tradeMin} {offer?.preferredCurrency} - Max{" "}
                {offer?.tradeMax} {offer?.preferredCurrency}{" "}
              </span>
            </div>
          </div>
          <div className={styles.spaceBetween}>
            <div>
              <span className={styles.title}>Trade time limit</span>
              <div>
                <span className={styles.rate}>{offer?.offerTimeLimit} min</span>
              </div>
            </div>
            <div>
              <span className={styles.title}>P2P Fee</span>
              <div>
                <span className={styles.rate}>{com}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.userDetails}>
        <div>
          <div className={styles.directionRow}>
            {offer?.user.profilePic ? (
              <img
                className={styles.profileImg}
                src={`data:image/jpeg;base64,${offer?.user?.profilePic}`}
                alt="profile"
              />
            ) : (
              <img className={styles.profileImg} src={profile} alt="profile" />
            )}
            <div>
              <h3 className={styles.userName}>{offer?.user?.name}</h3>
              <div className={styles.directionRow}>
                <div className={styles.userActive}></div>
                <span className={styles.time}>
                  {offer?.user?.isActive
                    ? "online"
                    : `seen ${offer?.user?.lastSeen}`}
                </span>
              </div>
              <div className={`${styles.directionRow} ${styles.btnRow}`}>
                <div className={styles.rightSpace}>
                  <button className={styles.mgRight}>
                    <img src={thumbUp} />
                  </button>
                  <span className={styles.counter}>{offer?.likeCount}</span>
                </div>
                <div>
                  <button className={styles.mgRight}>
                    <img src={thumbDown} />
                  </button>
                  <span className={styles.counter2}>{offer?.disLikeCount}</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.userInfo}>
            <div className={`${styles.mgBottom} ${styles.spaceBetween}`}>
              {offer && offer?.user?.id_verified && (
                <div className={styles.width}>
                  <img src={check} alt="icon" />
                  <span className={styles.txt}>ID Verified </span>
                </div>
              )}
              {offer && offer?.user?.address_verified && (
                <div className={styles.width}>
                  <img src={check} alt="icon" />
                  <span className={styles.txt}>Addresss Verified</span>
                </div>
              )}
            </div>
            <div className={`${styles.mgBottom} ${styles.spaceBetween}`}>
              {offer && offer?.user?.email && (
                <div className={styles.width}>
                  <img src={check} alt="icon" />
                  <span className={styles.txt}>Email Verified</span>
                </div>
              )}
              {offer && offer?.user?.phoneNumber && (
                <div className={styles.width}>
                  <img src={check} alt="icon" />
                  <span className={styles.txt}>Phone Verified</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          <p className={styles.speedTxt}>Avg Trade Speed</p>
          <h4 className={styles.speedTime}>{offer?.user?.activeTime}</h4>
        </div>
      </div>
    </div>
  );
};

export default AboutOffer;
