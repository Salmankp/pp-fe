import React, { useState } from 'react';
import styles from './styles.module.scss';
import like from '../../../../assets/images/likeIcon.svg';
import dislike from '../../../../assets/images/dislikeIcon.svg';
import Twitter from '../../../../assets/images/twitter.svg';
import facebook from '../../../../assets/images/fb.jpg';

const DisputeWin = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.paymentBlock}>
                <div className={styles.paymentHeadingBlock}>
                    <h3 className={styles.title}>
                        Successfully 13.4 USD (0.00154531 BTC) has been loaded to your BITCOIN wallet
                    </h3>
                </div>
            </div>
            <div className={styles.btnContainer}>
                <button className={styles.likeBtn} type='button'>
                    <img src={like} />
                    <span>102</span>
                </button>
                <button className={styles.neutralBtn} type='button'>Neutral</button>
                <button className={styles.dislikeBtn} type='button'>
                    <img src={dislike} />
                    <span>0</span>
                </button>
            </div>
            <textarea className={styles.txtArea} placeholder="Comment"></textarea>
            <button className={styles.feedBackBtn} type='button'>Leave Feedback</button>
            <div className={styles.socialBtn}>
                <h3 className={styles.title}>Share with your friends </h3>
                <div className={styles.btnContainer}>
                    <a href='#' className={styles.twitterBtn}>
                        <div className={styles.alignment}>
                            <span className={styles.btnTxt}>Share on Twitter </span>
                            <img src={Twitter} alt="twitter" />
                        </div>
                    </a>
                    <a href='#' className={styles.fbBtn}>
                        <div className={styles.alignment}>
                            <span className={styles.btnTxt}>Share on Facebook </span>
                            <img className={styles.fbImg} src={facebook} alt="facebook" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};
export default DisputeWin;
