import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Modal from "react-bootstrap/Modal";
import crossIcon from "../../../../../assets/images/crossIcon.svg";
import searchIcon from "../../../../../assets/images/searchIcon.svg";
import arrowBtn from "../../../../../assets/images/arrowBtn.svg";
import backArrow from "../../../../../assets/images/backArrow.svg";
import { Bars } from "react-loader-spinner";

import {
  listGiftCard,
  handleGiftCardModal,
  getSubPaymentMethods,
  getGiftCardWithParams
} from "../../../../../actions/giftCard-actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const GiftModal = props => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [show, setShow] = useState(1);
  const [mainCategories, setMainCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  // const [paymentData, setPaymentData] = useState("");

  // const giftCard = useSelector(state => state.giftCard);
  const categories = useSelector(state => state?.giftCard?.giftCardsWithOffers);
  const giftCardModal = useSelector(state => state?.giftCard?.giftCardModal);


  useEffect(() => {
    categories?.length > 0 && setMainCategories(categories)
  }, [categories]);

  const closeModal = () => {
    setShow(1);
    dispatch(handleGiftCardModal(false));
  };

  const handleSearch = (e) => {
    console.log(categories.map(el => el.name).indexOf('Online shopping and Retail'));
    !e.target.value ? setMainCategories(categories) :
    setMainCategories(categories.filter(el => ((el.name.toLowerCase()).indexOf(e.target.value.toLowerCase())) > -1 ))
  }

  // const getInnerPaymentMethods = category => {
  //   const options = {
  //     isGiftCard: category.isGiftCard,
  //     paymentMethod: category._id,
  //     subPaymentMethodId: ""
  //   };
  //   dispatch(getSubPaymentMethods(category._id));
  //   dispatch(getGiftCardWithParams(options));
  //   setSelectedCategory(category.name);
  //   setShow(2);
  // };

  // let totalCards = 0;
  // giftCardsList?.map(item => (totalCards += item?.subPayment?.length || 0));

  return (
    <Modal
      className={styles.buy_modal}
      show={giftCardModal}
      onHide={() => closeModal()}
      centered
    >
      <Modal.Body>
        <div className={styles.wrap}>
          <img
            className={styles.cross}
            src={crossIcon}
            onClick={() => closeModal()}
            alt="crossIcon"
          />

          <div>
            {show === 1 && (
              <div>
                <div className={styles.heading}>Gift Card</div>
                <div className={styles.field}>
                  <input
                    type="text"
                    placeholder="Search Your Giftcard or category"
                    onChange={handleSearch}
                  />
                  <button>
                    <img src={searchIcon} alt="searchIcon" />
                  </button>
                </div>
                {mainCategories && mainCategories.length > 0 ? (<>
                  <span className={styles.metaInfo}>
                    Choose a gift card category{" "}
                  </span>

                  <div>
                    {/* <div className={styles.alignment}>
                      <div className={styles.outer}>
                        <div className={styles.counter}>{totalCards}</div>
                        <span className={styles.txt}>All</span>
                      </div>
                      <button
                        onClick={() => {
                          closeModal();
                        }}
                      >
                        <img src={arrowBtn} alt="btn Icon" />
                      </button>
                    </div> */}

                    {mainCategories.map((item, index) => {
                      return (
                        <div key={index} className={styles.alignment}>
                          <div className={styles.outer}>
                            <div className={styles.counter}>
                              {item?.total || 0}
                            </div>
                            <span className={styles.txt}>{item?.name}</span>
                          </div>
                          <button
                            onClick={() => {
                              setShow(2);
                              setSelectedCategory(item);
                            }}
                          >
                            <img src={arrowBtn} alt="btn Icon" />
                          </button>
                        </div>
                      );
                    })}
                  </div></>) : (
                  <div>
                    {/* <div className={styles.heading}>Gift Card</div> */}
                    <h5 className={styles.emptyCard}>Empty Gift Card List</h5>
                  </div>
                )}
              </div>
            )}
            {show === 2 && (
              <div>
                <div className={styles.outerAlignment}>
                  <button
                    onClick={() => {
                      setShow(1);
                    }}
                    className={styles.btn}
                  >
                    <img src={backArrow} alt="icon" />
                  </button>
                  <div className={styles.heading}>{selectedCategory?.name}</div>
                </div>

                {selectedCategory?.subPayments?.length > 0 ? (
                  selectedCategory?.subPayments?.map((item, index) => {
                    return (
                      <div key={index} className={styles.alignment}>
                        <div className={styles.outer}>
                          <div className={styles.counter}>{item.total}</div>
                          <span className={styles.txt}>{item.name}</span>
                        </div>
                        <button
                          onClick={() => {
                            closeModal();
                            navigate("/GiftCard");
                          }}
                        >
                          <img src={arrowBtn} alt="btn Icon" />
                        </button>
                      </div>
                    );
                  })
                ) : (
                  <h5 className={styles.emptyCard}>
                    <Bars color="#1FC28F" height={80} width={80} />
                  </h5>
                )}
              </div>
            )}
          </div>

        </div>
      </Modal.Body>
    </Modal>
  );
};

export default GiftModal;
