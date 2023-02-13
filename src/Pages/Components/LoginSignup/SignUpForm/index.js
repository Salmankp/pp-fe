import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import eyeIcon from '../../../../assets/images/eye.svg'
import { register } from '../../../../actions/user-actions'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { Form, FormControl, Button, Alert } from 'react-bootstrap'
import * as Yup from 'yup'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PhoneInput, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  isValidPhoneNumber,
} from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { BsInfoCircle } from 'react-icons/bs'
import ReactCodeInput from 'react-code-input'
import { Bars } from 'react-loader-spinner'
import { send2FACode, verify2FACode, updateUserActivity} from '../../../../actions/user-actions'

const SignUpForm = ({ setLogin, setReset, setSignup }) => {
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const [showPass, setShowPass] = useState(false)
  const [withPhone, setWithPhone] = useState(true)
  const [loader, setLoader] = useState(false)
  const [enable2FA, setEnable2FA] = useState(false)
  const [verify2FA, setVerify2FA] = useState(true)
  const [error, setError] = useState('')

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
  
  // fetch registered user detail from redux
  const userLog = useSelector((state) => state?.userRegister)

  //call when user register and redirect ot user login
  /*  useEffect(() => {
    if (userLog?.userInfo?.status === "success") {
      navigate("/");
      setValue({ ...value, type: "EMAIL" });
      setValue({ ...value, type: "PHONE" });
      setWithPhone(false);
    }
  }, [userLog?.userInfo]); */

  const handleSubmit = async () => {
    const isValid = validateForm();
    if(isValid){
      setLoader(true);
      const res = await dispatch(register({ ...value }))
      if(res){
        if(withPhone) {
          await dispatch(send2FACode({phoneNumber: value.phoneNumber}));
        } else {
          await dispatch(send2FACode({email: value.email}));
        }
        setLoader(false);
        setEnable2FA(true);
      }
    }
    setLoader(false);
  }

  const validateForm = () => {
    let checkError = false;
    if(withPhone){
      if (value.phoneNumber === "" || value.password === "") {
        setInputError({ ...inputError, error: true, errorMsg: "Fields are required" });
        checkError = true
      } 
    } else {
      const pattern = new RegExp(
        /^(("[\w-\s]+")|([+\w-]+(?:\.[+\w-]+)*)|("[\w-\s]+")([+\w-]+(?:\.[+\w-]+)*))(@((?:[+\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (value.email === "" || value.password === "") {
        setInputError({ ...inputError, error: true, errorMsg: "Fields are required" });
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

  const handleChangeCode = async (val) => {
    if(val.toString().length === 6){
      setLoader(true);
      let verifyCode;
      if(withPhone) {
         verifyCode = await dispatch(verify2FACode({phoneNumber: value.phoneNumber, code: val}));
      } else {
         verifyCode = await dispatch(verify2FACode({email: value.email, code: val}));
      }
      if(verifyCode?.data?.status === "approved" || verifyCode?.data?.status === "success") {
        setVerify2FA(true);
        await dispatch(updateUserActivity('User Signup'));
        navigate('/buy');
      } else {
        setLoader(false);
        setVerify2FA(false)
      }
    }
  }

  return (
    <div className={styles.wrap}>
      <ToastContainer />
      <div className={styles.title}>Sign Up</div>
      <Form onSubmit={handleSubmit}>
        <div className={styles.phone_email}>
          <div
            className={withPhone && styles.active}
            onClick={() => {
              setValue({ ...value, type: 'PHONE', email: '' })
              setWithPhone(true)
            }}
          >
            With Phone No
          </div>
          <div
            className={!withPhone && styles.active}
            onClick={() => {
              setValue({ ...value, type: 'EMAIL', phoneNumber: '' })
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

              <p className='text-danger'>
                {error.statusCode ? error.statusCode : null}
              </p>
            </div>
          ) : (
            <div className={styles.fieldWrap}>
              <label>Email</label>
              <FormControl
                type='email'
                placeholder='Email Here'
                name='email'
                value={value.email}
                // disabled={!!String(values.phoneNumber || "").trim()}
                // onChange={handleChange}
                onChange={(e) => setValue({ ...value, email: e.target.value })}
              />
              <p className='text-danger'>{error.email ? error.email : null}</p>
            </div>
          )}
          <div className={styles.fieldWrap}>
            <label>Password</label>
            <div className={styles.passWrap}>
              <FormControl
                type={showPass ? 'text' : 'password'}
                placeholder='Password here'
                value={value.password}
                name='password'
                onChange={(e) =>
                  setValue({ ...value, password: e.target.value })
                }
                // onChange={handleChange}
              />
              <p className='text-danger'>
                {error.password ? error.password : null}
              </p>

              <img
                src={eyeIcon}
                onClick={() => setShowPass(!showPass)}
                alt='show'
              />
            </div>
            <p className='text-danger'>
              {userLog?.error ? userLog?.error : null}
            </p>
          </div>
            {
              loader && 
                <div style={{marginLeft: "45%"}}>
                <Bars color='#1FC28F' height={40} width={40} />
              </div>
            }
            {
              enable2FA &&
              <>
                <Alert
                className='text-start d-flex align-items-center gap-3 mb-4'
                variant='danger'
                >
                <BsInfoCircle className='text-danger' />{' '}
                <p className='text-danger mb-0'>Please verify 2FA</p>
              </Alert>

              <div className={styles.fieldWrap}>
                <div className='my-2 d-flex flex-column justify-content-start align-items-start'>
                  <label>Enter Code</label>
                  <ReactCodeInput fields={6} isValid={verify2FA} onChange={(val) => handleChangeCode(val)}/>
                </div>
              </div>
            </>
          }
          <div className={styles.btnWrap}>
            <Button onClick={handleSubmit} disabled={loader}>Sign up</Button>
            <div className={styles.subtext}>
              Already have an account?{' '}
              <span
                onClick={() => {
                  setLogin(true)
                  setReset(false)
                  setSignup(false)
                }}
              >
                Log in
              </span>
            </div>
          </div>
        </div>
      </Form>
    </div>
  )
}

export default SignUpForm
