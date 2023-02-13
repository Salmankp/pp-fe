import React from 'react';
import styles from './styles.module.scss';
import noRecord from '../../../../assets/images/noRecord.png';

const Connected = () => {
    return (
        <div className={styles.wrap}>
            <h1 className={styles.title}>Connected Apps and Websites</h1>
            <div className={styles.outer}>
                <p className={styles.description}>
                    Below you can find the complete list of apps and websites you’ve used Paxful to sign in with. These apps and websites will automatically have access to parts of your information. In case you remove any of these, they will still have access to the information you shared with them previously, yet they can’t collect anything new.
                </p>
                <div className={styles.noRecord}>
                    <img src={noRecord} alt="no record img" />
                    <p className={styles.text}>No Connected Apps and Websites Available</p>
                </div>
            </div>
        </div>
    );
};
export default Connected;
