import React from 'react';
import styles from './styles.module.scss';
import copyIcon from '../../../../assets/images/copy.svg';
import twitter from '../../../../assets/images/twitterIcon2.svg';
import fb from '../../../../assets/images/fb.svg';
import icon from '../../../../assets/images/socialIcon3.svg';
// import QRImg from '../../../../assets/images/qrImg.png';
import { QRCodeSVG } from 'qrcode.react';
import { useSelector } from 'react-redux';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Network = () => {
    const user = useSelector(state => state?.loggedInUser?.userInfo?.data?.user);
    return (
        <div className={styles.wrap}>
            <h3 className={styles.title}>Grow Your Network</h3>
            <div className={styles.sectionContainer}>
                <div className={styles.section}>
                    <h4 className={styles.title}>Invite by Link</h4>
                    <p className={styles.description}>Share your link and earn 50% of the escrow fee when the people you bring on board buy Bitcoin on xyz. Then, earn another 10% from the people they invite</p>
                    <div className={styles.copyTab}>
                        <span className={styles.link}>{window.location.origin + '/register?' + user?.referenceCode}</span>
                        <div className={styles.alignment}>
                            <CopyToClipboard text={window.location.origin + '/register?' + user?.referenceCode}
                            >
                                <button >
                                    {/* <h3 className={styles.copyTxt}>Copy</h3> */}
                                    <img src={copyIcon} alt="icon" />
                                </button>


                            </CopyToClipboard>

                        </div>
                    </div>
                    <p className={styles.infoTxt}><span className={styles.linkTxt}>Advanced Link tracking</span> (Track ID)</p>
                    <span className={styles.heading}>Share link on social media</span>
                    <div className={styles.socialLink}>
                        <button>
                            <img src={twitter} alt="icon" />
                        </button>
                        <button>
                            <img src={fb} alt="icon" />
                        </button>
                        <button>
                            <img src={icon} alt="icon" />
                        </button>
                    </div>
                </div>
                <div className={styles.section}>
                    <h4 className={styles.title}>Invite by QR Code</h4>
                    <div className={styles.outer}>
                        {/* <img src={QRImg} alt="QR Img" /> */}

                        <QRCodeSVG value={window.location.origin + '/register?' + user?.referenceCode} />
                        <div className={styles.content}>
                            <p>Anyone who scans this QR code will become your affiliate on Paxful.</p>
                            <span className={styles.btnTxt}>Embed QR code to website.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.detailCard}>
                <div className={styles.card}>
                    <div className={styles.topRow}>
                        <span>My Earnings</span>
                    </div>
                    <div className={styles.bottomRow}>
                        <div>
                            <h4 className={styles.title}>This Month</h4>
                            <p className={styles.counter}>0 BTC</p>
                            <span className={styles.num}>0 USD</span>
                        </div>
                        <div>
                            <h4 className={styles.title}>Last Month</h4>
                            <p className={styles.counter}>0 BTC</p>
                            <span className={styles.num}>0 USD</span>
                        </div>
                        <div>
                            <h4 className={styles.title}>Total</h4>
                            <p className={styles.counter}>0 BTC</p>
                            <span className={styles.num}>0 USD</span>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.topRow}>
                        <span>Affiliate Activity</span>
                    </div>
                    <div className={styles.bottomRow}>
                        <div>
                            <h4 className={styles.title}>This Month</h4>
                            <p className={styles.counter}>0 BTC</p>
                            <span className={styles.num}>0 USD</span>
                        </div>
                        <div>
                            <h4 className={styles.title}>Last Month</h4>
                            <p className={styles.counter}>0 BTC</p>
                            <span className={styles.num}>0 USD</span>
                        </div>
                        <div>
                            <h4 className={styles.title}>Total</h4>
                            <p className={styles.counter}>0 BTC</p>
                            <span className={styles.num}>0 USD</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Network;
