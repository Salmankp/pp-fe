import React, { useState } from 'react';
import styles from './styles.module.scss';
import Switch from 'react-switch';
import bitcoin from '../../../../assets/images/bitcoin-sm.svg';
import eye from '../../../../assets/images/eye.svg';


const DetailBar = () => {
    const [swtich, setSwitch] = useState(false);
    return (
        <div className={styles.wrap}>
            <div className={styles.alignment}>
                <div className={styles.switchContainer}>
                    <Switch
                        onColor="#1FC28F"
                        offColor="#A8A8A8"
                        uncheckedIcon={false}
                        checkedIcon={false}
                        width={28}
                        height={17}
                        handleDiameter={16}
                        onChange={() => setSwitch(!swtich)}
                        checked={swtich}
                    />
                    <img className={styles.bitcoinImg} src={bitcoin} alt="icon" />
                </div>
                <div className={styles.btnContainer}>
                    <button className={styles.btn}>Edit</button>
                    <button className={styles.btn}>View</button>
                </div>
                <div>
                    <p className={styles.title}>Rate</p>
                    <span className={styles.txt}>7,522,624.54 PKR  +5%</span>
                </div>
                <div>
                    <p className={styles.title}>Min - Max Amount</p>
                    <span className={styles.txt}>1986 - 0 PKR</span>
                </div>
                <div>
                    <p className={styles.title}>Payment Method</p>
                    <span className={styles.txt}>Jazz Cash</span>
                </div>
                <div>
                    <p className={styles.title}>Offer views</p>
                    <span className={styles.txt}>0</span>
                    <img className={styles.eyeIcon} src={eye} alt="icon" />
                </div>
            </div>
        </div>
    );
};
export default DetailBar;
