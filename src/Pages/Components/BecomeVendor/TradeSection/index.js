import React from 'react'
import styles from './styles.module.scss';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import profile from '../../../../assets/images/profile.svg';
import findOffer from '../../../../assets/images/findOffer.svg';
import trade from '../../../../assets/images/trade.svg';

const TradeSection = () => {
    return (
        <div className={styles.wrap}>
            <div className='container'>
                <h1 className={styles.heading}>Trade on XYZ and <span className={styles.txtWhite}>start your very own fintech Business</span></h1>
                <span className={styles.description}>Current bitcoin price: USD 30,114.13</span>
                <Row>
                    <Col lg="6">
                        <div className={styles.cardOuter}>
                            <div className={styles.card}>
                                <div className={styles.bar}></div>
                                <img className={styles.img} src={profile} />
                                <div className={styles.alignment}>
                                    <h1 className={styles.title}>1.</h1>
                                    <div>
                                        <h1 className={styles.title2}>Build your <span className={styles.highlightTxt}>Profile</span></h1>
                                        <p className={styles.description}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg="6" className={styles.outer} >
                        <div className={styles.rightOuter}>
                            <div className={styles.card}>
                                <div className={styles.bar}></div>
                                <img className={styles.img} src={findOffer} />
                                <div className={styles.alignment}>
                                    <h1 className={styles.title}>2.</h1>
                                    <div>
                                        <h1 className={styles.title2}><span className={styles.highlightTxt}>Create or find</span> an offer</h1>
                                        <p className={styles.description}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.card}>
                                <div className={styles.bar}></div>
                                <img className={styles.img} src={trade} />
                                <div className={styles.alignment}>
                                    <h1 className={styles.title}>3.</h1>
                                    <div>
                                        <h1 className={styles.title2}>Trade and <span className={styles.highlightTxt}>earn Profit</span></h1>
                                        <p className={styles.description}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default TradeSection;
