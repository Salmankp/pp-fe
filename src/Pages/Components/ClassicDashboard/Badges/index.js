import React from 'react';
import styles from './styles.module.scss';
import powerIcon from '../../../../assets/images/power.svg';
import ellipse from '../../../../assets/images/ellipse.svg';
import info from '../../../../assets/images/cardInfoIcon.svg';
import mark from '../../../../assets/images/questionMark.svg';

const Badges = () => {
    return (
        <div className={styles.wrap}>
            <h3 className={styles.title}>Traders Program Badges</h3>
            <p className={styles.description}>Your performance is measured and updated daily across a 90-day period. Meet the requirements to receive your badge and maintain your status.</p>
            <p className={`${styles.description} ${styles.mgTop}`}>Check out the <span className={styles.link}>XYZ Trader program page</span> to find out more about exclusive benefits.</p>
            <div className={styles.cardsCOntainer}>
                <div className={styles.card}>
                    <div>
                        <img src={powerIcon} alt="icon" />
                        <span className={styles.title}>Power Trader</span>
                    </div>
                    <div className={styles.details}>
                        <div className={styles.bottom}>
                            <img src={ellipse} />
                            <span className={styles.txt}>ID Verification
                            </span>
                        </div>
                        <div className={styles.bottom}>
                            <img src={ellipse} />
                            <span className={styles.txt}>Address Verification
                            </span>
                        </div>
                        <div className={styles.bottom}>
                            <img src={ellipse} />
                            <span className={styles.txt}>90-day-old account
                            </span>
                        </div>
                        <div className={styles.bottom}>
                            <img src={ellipse} alt="icon" />
                            <span className={styles.txt}>Good behaviour score
                            </span>
                            <img className={styles.infoIcon} src={info} />
                        </div>
                    </div>
                    <div className={styles.bottomRow}>
                        <div className={styles.alignment}>
                            <div>
                                <span className={styles.txt}>Trade Partners</span>
                                <img src={mark} />
                            </div>
                            <div>
                                <p className={styles.counter}><span className={styles.blueTxt}>0</span>/ <span>125</span></p>
                            </div>
                        </div>
                        <div className={styles.alignment}>
                            <div>
                                <span className={styles.txt}>Successful Trades</span>
                                <img src={mark} />
                            </div>
                            <div>
                                <p className={styles.counter}><span className={styles.blueTxt}>0</span>/ <span>125</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.card} ${styles.bgColor}`}>
                    <div>
                        <img src={powerIcon} alt="icon" />
                        <span className={styles.title}>Power Trader</span>
                    </div>
                    <div className={styles.details}>
                        <div className={styles.bottom}>
                            <img src={ellipse} />
                            <span className={styles.txt}>ID Verification
                            </span>
                        </div>
                        <div className={styles.bottom}>
                            <img src={ellipse} />
                            <span className={styles.txt}>Address Verification
                            </span>
                        </div>
                        <div className={styles.bottom}>
                            <img src={ellipse} />
                            <span className={styles.txt}>90-day-old account
                            </span>
                        </div>
                        <div className={styles.bottom}>
                            <img src={ellipse} alt="icon" />
                            <span className={styles.txt}>Good behaviour score
                            </span>
                            <img className={styles.infoIcon} src={info} />
                        </div>
                    </div>
                    <div className={styles.bottomRow}>
                        <div className={styles.alignment}>
                            <div>
                                <span className={styles.txt}>Trade Partners</span>
                                <img src={mark} />
                            </div>
                            <div>
                                <p className={styles.counter}><span className={styles.blueTxt}>0</span>/ <span>125</span></p>
                            </div>
                        </div>
                        <div className={styles.alignment}>
                            <div>
                                <span className={styles.txt}>Successful Trades</span>
                                <img src={mark} />
                            </div>
                            <div>
                                <p className={styles.counter}><span className={styles.blueTxt}>0</span>/ <span>125</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Badges;
