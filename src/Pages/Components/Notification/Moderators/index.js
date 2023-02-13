import React, { useState } from 'react';
import styles from './styles.module.scss';
import errorIcon from '../../../../assets/images/error_outline.svg';


const Moderators = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.btnContainer}>
                <button className={styles.markBtn}>Mark as read</button>
            </div>
            <div className={styles.alignment}>
                <div className={styles.directionCol}>
                    <h4 className={styles.title}>Moderator Message</h4>
                    <div>
                        <p className={styles.description}>Moderator message in trade rehehdgysjd </p>
                        <div className={styles.align}>
                            <img src={errorIcon} alt="icon" />
                            <span className={styles.msgTxt}>This dispute was awarded...</span>
                        </div>
                    </div>
                </div>
                <span className={styles.time}>3 min ago</span>
            </div>
            <div className={styles.alignment}>
                <div className={styles.directionCol}>
                    <h4 className={styles.title}>Moderator Message</h4>
                    <div>
                        <p className={styles.description}>Moderator message in trade rehehdgysjd </p>
                        <div className={styles.align}>
                            <img src={errorIcon} alt="icon" />
                            <span className={styles.msgTxt}>This dispute was awarded...</span>
                        </div>
                    </div>
                </div>
                <span className={styles.time}>3 min ago</span>
            </div>
            <div className={styles.alignment}>
                <div className={styles.directionCol}>
                    <h4 className={styles.title}>Moderator Message</h4>
                    <div>
                        <p className={styles.description}>Moderator message in trade rehehdgysjd </p>
                        <div className={styles.align}>
                            <img src={errorIcon} alt="icon" />
                            <span className={styles.msgTxt}>This dispute was awarded...</span>
                        </div>
                    </div>
                </div>
                <span className={styles.time}>3 min ago</span>
            </div>
            <div className={styles.alignment}>
                <div className={styles.directionCol}>
                    <h4 className={styles.title}>Moderator Message</h4>
                    <div>
                        <p className={styles.description}>Moderator message in trade rehehdgysjd </p>
                        <div className={styles.align}>
                            <img src={errorIcon} alt="icon" />
                            <span className={styles.msgTxt}>This dispute was awarded...</span>
                        </div>
                    </div>
                </div>
                <span className={styles.time}>3 min ago</span>
            </div>
        </div>
    );
};
export default Moderators;
