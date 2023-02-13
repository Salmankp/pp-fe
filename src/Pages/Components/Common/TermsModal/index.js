import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Modal from "react-bootstrap/Modal";
import crossIcon from "../../../../assets/images/crossIcon.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  createEtherTx,
  updateReleaseData
} from "../../../../actions/transaction-actions";
import { useLocation } from "react-router-dom";
import { get } from "../../../../utils/ajax";
import { error, success } from "../../../../utils/toastr";
import { ToastContainer } from "react-toastify";

const SellTerms = ({
  openModal,
  setOpenModal,
  openValue,
  offer,
  cryptoValue,
  commission,
  fiatValue,
  bankId
}) => {
  let navigate = useNavigate();
  const location = useLocation();
  const transactionData = useSelector(state => state.transactionData);
  const loggedInUser = useSelector(state => state?.loggedInUser);

  const dispatch = useDispatch();

  useEffect(() => {
    transactionData.isLoading = false;
    transactionData.success = false;
    transactionData.errorMsg = "";
  }, []);
  useEffect(() => {
    if (
      !transactionData.isLoading &&
      transactionData.success &&
      openValue === "buy"
    )
      navigate(`/dispute?${transactionData?.data?.transaction?.transactionId}`);
    if (
      !transactionData.isLoading &&
      transactionData.success &&
      openValue === "sell"
    ) {
      const transaction = transactionData?.data?.transaction;

      dispatch(
        updateReleaseData({
          trading_id: transaction?.transactionId,
          _id: transaction?._id,
          offer_id: transaction?.offerId,
          status: transaction?.status,
          started: transaction?.started,
          value: transaction?.cryptoAmount,
          buyerId: transaction?.buyerId,
          sellerId: transaction?.sellerId
        })
      );
      navigate(`/trade?${transactionData?.data?.transaction?.transactionId}?status=sell`);
    }
    if (
      !transactionData.isLoading &&
      !transactionData.success &&
      transactionData?.errorMsg !== ""
    )
      error("Error: " + transactionData?.errorMsg);
  }, [
    transactionData.isLoading,
    transactionData.success,
    transactionData?.errorMsg
  ]);

  const submitTransaction = async () => {
    console.log("Offer:", offer?.user?._id);
    const { data } = await get(
      `${process.env.REACT_APP_API_URL}/api/v1/wallet/${offer?.user?._id}`
    );
    console.log(":", data);
    if (data?.data?.doc?.length === 0) {
      error(
        `Error: ${
          openValue === "sell" ? "buy" : "sell"
        }er Need to create Wallet`
      );
      return;
    }
    let postData = {
      sellerId:
        openValue === "sell"
          ? loggedInUser?.userInfo?.data?.user?._id
          : offer?.user?._id,
      buyerId:
        openValue === "sell"
          ? offer?.user?._id
          : loggedInUser?.userInfo?.data?.user?._id,
      offerId: offer?._id,
      transactionId: Math.floor(Date.now() + Math.random()),
      cryptoAmount: cryptoValue?.toFixed(18).toString(),
      fiatAmount: parseInt(fiatValue),
      cryptoCurrencyType: offer?.cryptoCurrencyType,
      commission: commission?.toFixed(18).toString(),
      buyerWallet:
        openValue === "sell"
          ? data?.data?.doc[0]?.wallet?.public
          : loggedInUser?.userInfo?.data?.wallet?.ethWallet,
      sellerWallet:
        openValue === "sell"
          ? loggedInUser?.userInfo?.data?.wallet?.ethWallet
          : data?.data?.doc[0]?.wallet?.public,
      paymentMethod: offer?.paymentMethodId?._id,
      preferredCurrency: offer?.preferredCurrency,
      transferBankID: bankId,
      transferType: bankId && "BankTransfer"
    };

    dispatch(createEtherTx(postData, offer, openValue));
  };

  const submit = () => {
    submitTransaction();
  };

  return (
    <>
      <ToastContainer />
      <Modal
        className={styles.modal}
        show={openModal}
        onHide={() => setOpenModal(false)}
        centered
      >
        <Modal.Body>
          <div className={styles.wrap}>
            <img
              className={styles.cross}
              src={crossIcon}
              onClick={() => setOpenModal(false)}
              alt="crossIcon"
            />
            <div className={styles.heading}>
              You are about to enter into a trade and agreeing to the buyers
              terms and conditions keep in mind the following things
            </div>
            <div className={styles.content}>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </li>
              </ul>
              <div className={styles.btnWrap}>
                {location && location.pathname === "/buy-form" && (
                  <button
                    className={styles.btn}
                    onClick={() => {
                      navigate("/buy");
                    }}
                  >
                    Cancel
                  </button>
                )}
                {location && location.pathname === "/sell-form" && (
                  <button
                    className={styles.btn}
                    onClick={() => {
                      navigate("/sell");
                    }}
                  >
                    Cancel
                  </button>
                )}
                <button
                  onClick={submit}
                  className={`${styles.btn} ${styles.active}`}
                >
                  I understand the risk proceed to {openValue}{" "}
                  {offer.cryptoCurrencyType}
                </button>
              </div>
              <br></br>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SellTerms;
