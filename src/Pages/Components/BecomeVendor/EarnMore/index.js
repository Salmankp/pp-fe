import React from 'react'
import styles from './styles.module.scss';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import bullet from '../../../../assets/images/bullet.svg';
import bgImg from '../../../../assets/images/bgImg.png';

const EarnMore = () => {
    return (
        <div className='container'>
            <div className={styles.wrap}>
                <Row className='row'>
                    <Col lg="6">
                        <h1 className={styles.heading}><span className={styles.highlightTxt}>Earn more</span> with our affiliate program</h1>
                        <p className={styles.description}>Affiliate Program was created to help you increase your profits by inviting your friends, family, and extended network to our platform.</p>
                        <p className={styles.description}>Instant Profits on Every Trade:</p>
                        <div className={styles.metaInfo}>
                            <img className={styles.bullet} src={bullet} alt="icon" />
                            <span className={styles.metaTxt}><b>50%</b>&nbsp;of your Tier 1 affiliates fees
                            </span>
                        </div>
                        <div>
                            <img className={styles.bullet} src={bullet} alt="icon" />
                            <span className={styles.metaTxt}><b>10%</b>&nbsp;of your Tier 2 affiliates fees paid by their affiliates
                            </span>
                        </div>
                    </Col>
                    <Col lg="6">
                        <img className={styles.bgImg} src={bgImg} alt="img" />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default EarnMore;
