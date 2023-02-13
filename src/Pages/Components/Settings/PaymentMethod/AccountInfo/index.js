import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import styles from './styles.module.scss';
import Accordion from 'react-bootstrap/Accordion';
import flag from '../../../../../assets/images/flag.svg';
import info from '../../../../../assets/images/infoIcon.svg';
import icon from '../../../../../assets/images/dropdownicon.svg';
import CurrencyFlag from "react-currency-flags";
import { useDispatch, useSelector } from "react-redux";
import { addBank } from '../../../../../actions/bankAccount-actions';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AccountInfo = ({currency, country, tab, user, show}) => {
   const { register, handleSubmit, errors, control } = useForm();
   const dispatch = useDispatch();
  const findOfferFunc = async (e) => {
    e = {
      ...e,
      country,
      currency,
      accountType:tab,
      user
    };
   await dispatch(addBank(e));
  };
    return (
        <div className={styles.wrap}>
            <div className={styles.outer}>
                <span className={styles.title}>Pay with {"  "}
                <CurrencyFlag
                      currency={currency}
                      size="sm"
                />
                </span>
            </div>
            <div className={styles.field}>
                <span className={styles.label}>Bank name</span>
                <input
                  name="Bank name"
                  type="text"
                  className={styles.inputField}
                  {...register("bankName", { required: true })}
                />
            </div>
            <div className={styles.field}>
                <span className={styles.label}>Account holder’s name</span>
                <input
                  name="Account holder name"
                  type="text"
                  className={styles.inputField}
                  {...register("accountHolderName", { required: true })}
                />
            </div>
            <div className={styles.field}>
                <span className={styles.label}>Custom bank details</span>
                <div className={styles.inputContainer}>
                <textarea
                  className={styles.inputField2}
                  {...register("details", { required: false })}
                ></textarea>
                    <span>Optional</span>
                </div>
                <div className={styles.errorTxt}>
                    <img src={info} alt="icon" />
                    <span>Add any other bank account details here, if needed.</span>
                </div>
            </div>
            <div className={styles.field}>
                <span className={styles.label}>Account Number</span>
                <div className={styles.inputContainer}>
                <input
                  name="Account number"
                  type="text"
                  className={styles.inputField2}
                  {...register("accountNumber", { required: false })}
                />
                    <span>Optional</span>
                </div>
            </div>
            <div>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <span className={styles.transferTxt}>International Transfer Details</span>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className={styles.errorTxt}>
                                <img src={info} alt="icon" />
                                <span>If you want to receive international payments, additional details about Account Holder are necessary.</span>
                            </div>
                            <div className={styles.field}>
                                <span className={styles.label}>Country of residency</span>
                                <input
                                  name="Country of residency"
                                  type="text"
                                  className={styles.inputField}
                                  {...register("internationalTransferDetails.countryOfResidency", { required: false })}
                                         />
                            </div>
                            <div className={styles.field}>
                                <span className={styles.label}>State/Region</span>
                                <input
                                  name="State"
                                  type="text"
                                  className={styles.inputField}
                                  {...register("internationalTransferDetails.state", { required: false })}
                                         />
                            </div>
                            <div className={styles.field}>
                                <span className={styles.label}>City</span>
                                <input
                                  name="City"
                                  type="text"
                                  className={styles.inputField}
                                  {...register("internationalTransferDetails.city", { required: false })}
                                         />
                            </div>
                            <div className={styles.field}>
                                <span className={styles.label}>Zip Code</span>
                                <input
                                  name="Zip Code"
                                  type="text"
                                  className={styles.inputField}
                                  {...register("internationalTransferDetails.zipCode", { required: false })}
                                         />
                            </div>
                            <div className={styles.field}>
                                <span className={styles.label}>Address</span>
                                <textarea
                                  rows="3" className={styles.txtArea} type="text"
                                  {...register("internationalTransferDetails.address", { required: false })}
                                  ></textarea>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <div className={styles.btnContainer}>
                <button type='button' className={styles.backBtn} onClick={() => show(1)}>Back</button>
                <button type='button' className={styles.addBtn}  onClick={handleSubmit(findOfferFunc)}>
                Add Account
                </button>
            </div>
        </div>
    );
};
export default AccountInfo;
