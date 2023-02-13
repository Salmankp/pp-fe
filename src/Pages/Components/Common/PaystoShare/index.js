import React from 'react';
import styles from './styles.module.scss';
import telegramIcon from '../../../../assets/images/telegramIcon.svg';
import twitterIcon from '../../../../assets/images/twitterIcon.svg';
import facebookIcon from '../../../../assets/images/facebookIcon.svg';
import linkedinIcon from '../../../../assets/images/linkedinIcon.svg';
import shareBitCoin from '../../../../assets/images/shareBitCoin.svg';

const PaystoShare = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.img_text}>
        <div className={styles.img}>
          <img src={shareBitCoin} alt="img" />
        </div>
        <div className={styles.text}>
          <div className={styles.heading}>It Pays to Share</div>
          <div className={styles.subtext}>
            Bring people to Paxful and earn commission every time they buy
            crypto.
          </div>
          <div className={styles.socialMedia}>
            <a href="#">
              <img src={twitterIcon} alt="twitterIcon" />
            </a>
            <a href="#">
              <img src={facebookIcon} alt="fbIcon" />
            </a>
            <a href="#">
              <img src={telegramIcon} alt="telegramlIcon" />
            </a>
            <a href="#">
              <img src={linkedinIcon} alt="linkedinIcon" />
            </a>
          </div>
        </div>
      </div>
      <button>Find Out How</button>
    </div>
  );
};

export default PaystoShare;
