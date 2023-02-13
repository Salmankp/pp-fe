import React from 'react'
import styles from './styles.module.scss';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import featureIcon from '../../../../assets/images/featureIcon.svg';
import usersIcon from '../../../../assets/images/usersIcon.svg';
import trustedIcon from '../../../../assets/images/trustedIcon.svg';
import support from '../../../../assets/images/support.svg';

const List = () => {
    return (
        <div className='container'>
            <div className={styles.wrap}>
                <Row>
                    <Col lg="3" md="6">
                        <div className={styles.listOuter}>
                            <img src={featureIcon} alt="icon" />
                            <p className={styles.txt}>The right set of <b>features</b> to manage your trades, offers, and stats</p>
                        </div>
                    </Col>
                    <Col lg="3" md="6">
                        <div className={styles.listOuter}>
                            <img src={usersIcon} alt="icon" />
                            <p className={styles.txt}>Over <b>6 million </b>registered users worldwide</p>
                        </div>
                    </Col>
                    <Col lg="3" md="6">
                        <div className={styles.listOuter}>
                            <img src={trustedIcon} alt="icon" />
                            <p className={styles.txt}>Trusted by over <b>12,000</b> registered Bitcoin vendors</p>
                        </div>
                    </Col>
                    <Col lg="3" md="6">
                        <div className={styles.listOuter}>
                            <img src={support} alt="icon" />
                            <p className={styles.txt}><b>High-end support</b> for a seamless trading experience</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default List;
