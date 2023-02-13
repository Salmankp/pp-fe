import React, { useState, useEffect } from "react";
import styles from './styles.module.scss';
import becomeVendor from '../../../../assets/images/becomeVendor.png';
import Row from 'react-bootstrap/Row'
import { useDispatch, useSelector } from "react-redux";
import Col from 'react-bootstrap/Col'
import axios from 'axios'
import store from "../../../../store";
import { Link, useNavigate } from "react-router-dom";
import VendorModal from "../../Common/VendorModal";

const Splash = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);
    const handleModal = () => {
        setOpenModal(true);
    }
  const userData = useSelector(state => state.loggedInUser);
  const userId = userData?.userInfo?.data?.user?._id;
  const role = userData?.userInfo?.data?.user?.role;
  
  const go = () => {
      navigate('/dashboard');
  }
 
    return (
        <div className={styles.wrap}>
            <div className='container'>
            <VendorModal openModal={openModal} setOpenModal={setOpenModal} />
                <Row>
                    <Col lg="6">
                        <h1 className={styles.heading}>Generate Income</h1>
                        <p className={styles.subheading}>by selling your Bitcoin using our payment methods.
                        </p>
                        <p className={styles.metaInfo}>Become a Bitcoin vendor on xyz</p>
                        <p className={styles.description}>With XYZ, kickstart your very own business in a matter of minutes. Create offers with your Bitcoin, set profit margins, and build out a unique customer experience to increase your profits. <button type="button" className={styles.blueBtn}>Sign up</button> as a vendor today and <button type="button" className={styles.blueBtn}>create your first offer.</button></p>
                        {role === 'vendor' ? (
                          <button className={styles.btn} type="button"  onClick={go}>Go to your dashboard</button>
                        ) : (
                            <button className={styles.btn} type="button"  onClick={handleModal}>Sign Me up!</button>
                        )}
                        
                    </Col>
                    <Col lg="6">
                        <img className={styles.img} src={becomeVendor} alt="img" />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Splash;
