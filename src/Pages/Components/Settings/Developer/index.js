import React from 'react';
import styles from './styles.module.scss';
import authIcon from '../../../../assets/images/authIcon.png';

const Developer = () => {
    return (
        <div className={`${styles.wrap}`}>
            <h1 className={styles.title}>Developer</h1>
            <div className={styles.alignment}>
                <img className={styles.authIcon} src={authIcon} alt="icon" />
                <div>
                    <h3 className={styles.subtitle}>OAuth 2.0 Support</h3>
                    <p className={styles.description}>Managing your API just got more flexible with our newly added OAuth 2.0 support. Check it out for yourself in the developer's portal
                    </p>
                    <button className={styles.viewBtn} type='button'>View More</button>
                </div>
            </div>
            <div className={styles.outer}>
                <p className={styles.infoTxt}>To generate an API key, you must first set up two-factor authentication for logging into your account. You can use SMS or Google Authenticator for authenticating your account.</p>
                <button className={styles.lgBtn} type='button'>Enable 2FA login</button>
            </div>
            <div className={styles.border}></div>
            <div>
                <p className={styles.bottomTxt}>Please read Developer introduction <button type='button' className={styles.blueBtn}>here</button> and find API documentation <button type='button' className={styles.blueBtn}>here.</button></p>
            </div>
        </div>
    );
};
export default Developer;
