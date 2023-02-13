import React from 'react'
import styles from './styles.module.scss';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import dashboard from '../../../../assets/images/dashboard.png';
import bullet from '../../../../assets/images/bullet.svg';

const DashboardSection = () => {
    return (
        <div className={styles.outer}>
            <div className='container'>
                <div className={styles.wrap}>
                    <Row>
                        <Col lg="8">
                            <img className={styles.dashboardImg} src={dashboard} alt="img" />
                        </Col>
                        <Col lg="4">
                            <h1 className={styles.heading}>Bring your Bitcoin to us and <span className={styles.subheading}> sell for a profit</span></h1>
                            <div className={styles.listOuter}>
                                <div className={styles.list}>
                                    <img className={styles.bullet} src={bullet} alt="icon" />
                                    <span>350+ payment methods</span>
                                </div>
                                <div className={styles.list}>
                                    <img className={styles.bullet} src={bullet} alt="icon" />
                                    <span>Transaction fees 0-2%</span>
                                </div>
                                <div className={styles.list}>
                                    <img className={styles.bullet} src={bullet} alt="icon" />
                                    <span>VIP support for high-volume vendors</span>
                                </div>
                                <div className={styles.list}>
                                    <img className={styles.bullet} src={bullet} alt="icon" />
                                    <span>Overview of transactions and earnings
                                    </span>
                                </div>
                                <div className={styles.list}>
                                    <img className={styles.bullet} src={bullet} alt="icon" />
                                    <span>Affiliate program to onboard new vendors and expand your business
                                    </span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default DashboardSection;
