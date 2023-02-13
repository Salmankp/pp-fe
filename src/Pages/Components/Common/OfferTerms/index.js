import React from 'react';
import styles from './styles.module.scss';
import receipt from '../../../../assets/images/receipt.svg';
import thirdParty from '../../../../assets/images/thirdParty.svg';


const AboutOffer = ({ offer }) => {
    return (
        <div className={styles.wrap}>
            <h1 className={styles.heading}>Offer Terms</h1>
            <p className={styles.description}>{offer.offerTerms}</p>
            <div className={styles.receiptContainer}>
                <div className={styles.directionRow}>
                    <div className={styles.imgContainer}>
                        <img src={receipt} alt="icon" />
                    </div>
                    <p className={styles.txt}>Reciept Required</p>
                </div>
                <div className={styles.directionRow}>
                    <div className={styles.imgContainer}>
                        <img src={thirdParty} alt="icon" />
                    </div>
                    <p className={styles.txt}>No third parties</p>
                </div>
            </div>
        </div>
    )
}
export default AboutOffer;