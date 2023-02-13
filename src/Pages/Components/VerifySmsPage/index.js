import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col ,Button, Card, Form, Alert } from 'react-bootstrap'
import { BsInfoCircle } from 'react-icons/bs'
import ReactCodeInput from 'react-code-input'
import { Link, useNavigate } from 'react-router-dom'
import PhoneInput, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  isValidPhoneNumber,
} from 'react-phone-number-input'
import styles from './styles.module.scss'
import { Bars } from 'react-loader-spinner'
import { getUser, addPhoneEmailWith2FACode, verify2FACode } from '../../../actions/user-actions'

const VerifySmsPage = () => {

  const user = useSelector((state) => state?.loggedInUser?.userInfo?.data?.user);

  const [loader, setLoader] = useState(false)
  let navigate = useNavigate()
  const dispatch = useDispatch()

  const [showVerifySms, setShowVerifySms] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState({
    value: "",
    error: false,
    errorMsg: ""
  })
  const [verify2FA, setVerify2FA] = useState(true)

  const handleSubmit = async () => {
    const isValid = validateForm();
    if(isValid){
      setLoader(true);
      const res = await dispatch(addPhoneEmailWith2FACode({userId: user._id, phoneNumber: phoneNumber.value}));
      if(res) {
        setLoader(false);
        setShowVerifySms(true);
      }
    }
    setLoader(false);
  }

  const validateForm = () => {
    let checkError = false;
    if (phoneNumber.value === "") {
      setPhoneNumber({ ...phoneNumber, error: true, errorMsg: "Phone Number is required" });
      checkError = true
    } 
    if (!checkError) {
      setPhoneNumber({ ...phoneNumber, error: false, errorMsg: "" });
    }
    if (checkError) {
      return false;
    }
    return true;
  }

  const handleChangeCode = async (val) => {
    if(val.toString().length === 6){
      setLoader(true);
      const verifyCode = await dispatch(verify2FACode({phoneNumber: phoneNumber.value, code: val}));
      if(verifyCode?.data?.status === "approved") {
        dispatch(getUser(user._id));
        setVerify2FA(true)
        navigate('/settings')
      } else {
        setLoader(false);
        setVerify2FA(false)
      }
    }
  }

  return (
    <Container className='my-5 pt-5'>
      <Row>
       <Col md={8}>
        <Card>
          <Card.Header>Verify your Phone Number</Card.Header>
            <Card.Body>
              {phoneNumber.error && (
                <Alert
                  className='text-start d-flex align-items-center gap-3 mb-4'
                  variant='danger'
                >
                  <BsInfoCircle className='text-danger' />{' '}
                  <p className='text-danger mb-0'>{phoneNumber.errorMsg}</p>
                </Alert>
              )}
              {
                !showVerifySms ?
              <>
                <p>
                  Enter the phone number you like to use with your P2P account below.
                </p>
                <div className='mt-3'>
                  <Form>
                    <Form.Group>
                      <Form.Label>Phone Number</Form.Label>
                      <div className={styles.fieldWrap}>
                        <PhoneInput
                          international
                          defaultCountry='AO'
                          placeholder='Enter phone number'
                          value={phoneNumber.value}
                          name='phoneNumber'
                          onChange={(event) => {
                            setPhoneNumber({
                              ...phoneNumber,
                              value: formatPhoneNumberIntl(event),
                            })
                          }}
                        />
                      </div>
                    </Form.Group>
                    <Button className='mt-3' onClick={handleSubmit} loader>Continue</Button>
                  </Form>
                </div>
              </>
                :
                <>
                  <p>
                      Enter the code or click the link we've sent to
                      {' '} <b>{phoneNumber.value}</b> to verify your phone number.
                  </p>
                  <div className='mt-3'>
                    <h5>Enter Code</h5>
                    <ReactCodeInput fields={6} isValid={verify2FA} onChange={(val) => handleChangeCode(val)}/>
                    {/* <p className='text-primary mt-2' role='button'>
                      Resend verification mail
                    </p> */}
                  </div>
                </>
              }
               {
                loader && 
                  <div style={{marginLeft: "45%"}}>
                  <Bars color='#1FC28F' height={40} width={40} />
                </div>
              }
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default VerifySmsPage