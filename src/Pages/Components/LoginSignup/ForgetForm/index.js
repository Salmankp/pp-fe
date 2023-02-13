import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik, Formik } from 'formik'
import { sendForgetEmail, updateUserActivity } from '../../../../actions/user-actions'
import { useDispatch } from 'react-redux'
import { Form, FormControl, Button, Alert } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BsInfoCircle } from 'react-icons/bs'
import ReactCodeInput from 'react-code-input'
import PhoneInput, {
  formatPhoneNumberIntl
} from 'react-phone-number-input'
import { Bars } from 'react-loader-spinner';

const ForgetForm = ({ setLogin, setReset, setSignup }) => {
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const [loader, setLoader] = useState(false)
  const [withPhone, setWithPhone] = useState(true)

  const [value, setValue] = useState({
    email: '',
    password: '',
    phoneNumber: '',
    type: 'PHONE',
  })

  const [inputError, setInputError] = useState({
    error: false,
    errorMsg: '',
  })

  const handleSubmit = async () => {
    const isValid = validateForm();
    if(isValid){
      setLoader(true);
      const data = await dispatch(sendForgetEmail({ ...value }));
      if (data?.status === "success") {
        await dispatch(updateUserActivity('Forgot Password', data?.data?._id));
        setLoader(false);
      }
    }
  }

  const validateForm = () => {
    let checkError = false;
    if(withPhone){
      if (value.phoneNumber === "") {
        setInputError({ ...inputError, error: true, errorMsg: "Phone number is required" });
        checkError = true
      } 
    } else {
      const pattern = new RegExp(
        /^(("[\w-\s]+")|([+\w-]+(?:\.[+\w-]+)*)|("[\w-\s]+")([+\w-]+(?:\.[+\w-]+)*))(@((?:[+\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (value.email === "") {
        setInputError({ ...inputError, error: true, errorMsg: "Email is required" });
        checkError = true
      } else if (!pattern.test(value.email)) {
        setInputError({ ...inputError, error: true, errorMsg: "Invalid email" });
        checkError = true
      }
    }
    if (!checkError) {
      setInputError({ ...inputError, error: false, errorMsg: "" });
    }

    if (checkError) {
      return false;
    }
    return true;
  };

  return (
    <div className={styles.wrap}>
      <ToastContainer />
      <div className={styles.title}>Forgot Password</div>
      <Form>
        <div className={styles.phone_email}>
          <div
            className={withPhone && styles.active}
            onClick={() => {
              setValue({ ...value, type: 'PHONE' })
              setWithPhone(true)
            }}
          >
            With Phone No
          </div>
          <div
            className={!withPhone && styles.active}
            onClick={() => {
              setValue({ ...value, type: 'EMAIL' })
              setWithPhone(false)
            }}
          >
            {' '}
            With Email
          </div>
        </div>
        <div className={styles.formWrap}>
        {inputError.error && (
          <Alert
            className='text-start d-flex align-items-center gap-3 mb-4'
            variant='danger'
          >
            <BsInfoCircle className='text-danger' />{' '}
            <p className='text-danger mb-0'>{inputError.errorMsg}</p>
          </Alert>
          )}
          {withPhone ? (
            <div className={styles.fieldWrap}>
              <label>Phone Number</label>
              <PhoneInput
                international
                defaultCountry='AO'
                placeholder='Enter phone number'
                value={value.phoneNumber}
                name='phoneNumber'
                onChange={(event) => {
                  setValue({
                    ...value,
                    phoneNumber: formatPhoneNumberIntl(event),
                  })
                }}
              />
            </div>
          ) : (
            <div className={styles.fieldWrap}>
              <label>Email</label>
              <FormControl
                type='email'
                placeholder='Email Here'
                name='email'
                value={value.email}
                onChange={(e) => setValue({ ...value, email: e.target.value })}
              />
            </div>
          )}
           {
            loader && 
              <div style={{marginLeft: "45%"}}>
              <Bars color='#1FC28F' height={40} width={40} />
            </div>
          }
          <div className={`${styles.btnWrap} ${styles.mgTop}`}>
            <Button className={styles.btn} onClick={handleSubmit} disabled={loader}>
              Forgot Password
            </Button>
          </div>
          <div className={styles.btnWrap}>
            <div className={styles.subtext}>
              Back to login:{' '}
              <span
                onClick={() => {
                  setLogin(true)
                  setReset(false)
                  setSignup(false)
                }}
              >
                Click here!
              </span>
            </div>
          </div>
          <div className={styles.btnWrap}>
            <div className={styles.subtext}>
              Don't have an account?{' '}
              <span
                onClick={() => {
                  setLogin(false)
                  setReset(false)
                  setSignup(true)
                }}
              >
                Sign up
              </span>
            </div>
          </div>
        </div>
      </Form>
    </div>
  )
}
export default ForgetForm
