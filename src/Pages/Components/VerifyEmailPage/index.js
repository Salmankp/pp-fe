import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col ,Button, Card, Form, Alert } from 'react-bootstrap'
import { BsInfoCircle } from 'react-icons/bs'
import ReactCodeInput from 'react-code-input'
import { Link, useNavigate } from 'react-router-dom'
import { Bars } from 'react-loader-spinner'
import { error, success } from "../../../utils/toastr"
import { getUser, addPhoneEmailWith2FACode, verify2FACode } from '../../../actions/user-actions'

const VerifyEmailPage = () => {

  const user = useSelector((state) => state?.loggedInUser?.userInfo?.data?.user);
  let navigate = useNavigate()
  const dispatch = useDispatch()

  const [loader, setLoader] = useState(false)
  const [showVerifyEmail, setShowVerifyEmail] = useState(false)
  const [email, setEmail] = useState({
    value: "",
    error: false,
    errorMsg: ""
  })
  const [verify2FA, setVerify2FA] = useState(true)

  const handleSubmit = async () => {
    const isValid = validateForm();
    if(isValid){
      setLoader(true);
      const res = await dispatch(addPhoneEmailWith2FACode({userId: user._id, email: email.value}));
      if(res) {
        setLoader(false);
        setShowVerifyEmail(true);
      }
    }
    setLoader(false);
  }

  const validateForm = () => {
    let checkError = false;
    const pattern = new RegExp(
      /^(("[\w-\s]+")|([+\w-]+(?:\.[+\w-]+)*)|("[\w-\s]+")([+\w-]+(?:\.[+\w-]+)*))(@((?:[+\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if (email.value === "") {
      setEmail({ ...email, error: true, errorMsg: "Email is required" });
      checkError = true
    } else if (!pattern.test(email.value)) {
      setEmail({ ...email, error: true, errorMsg: "Invalid Email" });
      checkError = true
    }
    if (!checkError) {
      setEmail({ ...email, error: false, errorMsg: "" });
    }
    if (checkError) {
      return false;
    }
    return true;
  }

  const handleChangeCode = async (val) => {
    if(val.toString().length === 6){
      setLoader(true);
      const verifyCode = await dispatch(verify2FACode({email: email.value, code: val}));
      if(verifyCode?.data?.status === "success") {
        dispatch(getUser(user._id));
        setVerify2FA(true)
        success("Email verified successfully");
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
          <Card.Header>Verify your email</Card.Header>
            <Card.Body>
              {email.error && (
                <Alert
                  className='text-start d-flex align-items-center gap-3 mb-4'
                  variant='danger'
                >
                  <BsInfoCircle className='text-danger' />{' '}
                  <p className='text-danger mb-0'>{email.errorMsg}</p>
                </Alert>
              )}
              {
                !showVerifyEmail ?
              <>
                <p>
                  Enter the email address you'd like to use with your P2P account below.
                </p>
                <div className='mt-3'>
                  <Form>
                    <Form.Group>
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control type='email' 
                        onChange={(e) => {
                          setEmail({
                            ...email,
                            value: e.target.value,
                          });
                        }}
                      />
                    </Form.Group>
                    <Button className='mt-3' onClick={handleSubmit} disabled={loader}>Continue</Button>
                  </Form>
                </div>
              </>
                :
                <>
                  <p>
                      Enter the code or click the link we've sent to
                      {' '} <b>{email.value}</b> to verify your email.
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

export default VerifyEmailPage