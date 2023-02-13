import React from 'react'
import { Alert, Card } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'
import LimitsVerificaion from './LimitsVerificaion'

const AccordianComponentsData = () => {
  return (
    <Accordion defaultActiveKey=''>
      <Accordion.Item eventKey='0'>
        <Accordion.Header>
          Logging in With Phone Number on Mobile App
        </Accordion.Header>
        <Accordion.Body>
          <div>
            <h5>
              Why can’t I login to the Paxful mobile app using my phone number?
            </h5>
            <p>
              Right now, the login with a phone number feature is only available
              on the web browser version of Paxful. Although it's not ready for
              mobile just yet, you still have two options:
            </p>
            <ul style={{ paddingLeft: '2rem' }}>
              <li className='mb-2'>
                <b>Verify your email address.</b> You can verify your email
                address and use that to login to the mobile app. As an added
                bonus, your trading/send out limits will increase once your
                email address is verified.
                <p>
                  To verify your email address, just head to the Settings page
                  of your Paxful account and click Verification. From there, you
                  can verify your email address in just a few steps.
                </p>
              </li>
              <li className='mb-2'>
                <b>Use a web browser.</b> You can still login using your phone
                number on our web version of Paxful—even on your mobile device.
                Just open up to your favorite browser and head to
                https://paxful.com.
              </li>
            </ul>
            <p>
              Stay tuned for updates as our team is working hard to get this
              released on mobile.
            </p>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='1'>
        <Accordion.Header>How to Use Your NIN on Paxful</Accordion.Header>
        <Accordion.Body>
          <div>
            <p>
              Starting on July 14, 2021, users located in Nigeria are now able
              to use their NIN (national identification number) to verify their
              identity and address on Paxful.
            </p>
            <p>
              <b>To use your NIN on Paxful follow the instructions below:</b>
              <ol>
                <li className='mb-2'>
                  Select your issuing country as Nigeria and choose the option:
                  National Identification Number (NIN) from the drop-down menu.
                </li>
                <li className='mb-2'>
                  Enter your 11-digit NIN in the box provided.
                </li>
                <li className='mb-2'>
                  Click on the “Start Verification Process” button.
                </li>
                <li className='mb-2'>
                  Provide a selfie (or take a picture of yourself) to prove your
                  identity matches your NIN.
                  <Alert variant='success'>
                    <b>Please ensure the following:</b>
                    <ul className='mt-2' style={{ paddingLeft: '2rem' }}>
                      <li>
                        Your face is well lit and in full view of the camera
                      </li>
                      <li>
                        Don’t wear anything that might block any part of your
                        face.
                      </li>
                      <li>
                        Follow all instructions that appear on the screen.
                      </li>
                    </ul>
                  </Alert>
                </li>
                <li className='mb-2'>
                  When taking your selfie, please allow camera access as seen in
                  the image below.
                </li>
                <li className='mb-2'>
                  Take a selfie by lining up your face to the oval shown on the
                  screen. See the image below for more details.
                </li>
                <li className='mb-2'>
                  Once the image has been taken, we will verify your image and
                  you will see the screen below.
                </li>
                <li className='mb-2'>
                  As soon as your picture is verified and approved, you will see
                  the image below. This means your identification and address
                  have been verified. You are now ready to start trading!
                </li>
              </ol>
              <Alert>
                <b>Note:</b>
                <p>
                  If your image does not pass our verification process, you will
                  see the screen below and need to try again.
                </p>
              </Alert>
            </p>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='2'>
        <Accordion.Header>Limits and Verification</Accordion.Header>
        <Accordion.Body>
          <LimitsVerificaion />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='3'>
        <Accordion.Header>Email Verification</Accordion.Header>
        <Accordion.Body>
          <div>
            <p>
              Email address verification adds an additional layer of security to
              your account. Here's a step-by-step guide on how to verify your
              email address.
            </p>
            <ol className='mb-3'>
              <li className='mb-2'>
                Log in to your Paxful account, hover over your username on the
                top right of the page and click Settings from the context menu
                that appears.
                <p>The Settings page appears.</p>
              </li>
              <li className='mb-2'>
                Under Verify email address click Resend email.{' '}
                <p>
                  A verification email is sent to your registered email address.{' '}
                </p>
              </li>
              <li className='mb-2'>
                <p>
                  Open the email in your inbox received from noreply@paxful.com,
                  and click Confirm Email. Your email address is verified
                  successfully.
                </p>
                <Alert>
                  <b>Note:</b>
                  <ul className='mt-2' style={{ paddingLeft: '2rem' }}>
                    <li className='mb-2'>
                      You can request a new confirmation email only once every
                      20 minutes.
                    </li>
                    <li className='mb-2'>
                      If you do not find our email in your regular inbox, please
                      check your Spam or Junk email folders as well.
                    </li>
                  </ul>
                </Alert>
              </li>
            </ol>
            <p>
              After verifying your email, we also recommend{' '}
              <a href='#'>setting up two-factor authentication</a> on your
              Paxful account if you haven't already.
            </p>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='4'>
        <Accordion.Header>Phone Verification</Accordion.Header>
        <Accordion.Body>
          <div>
            <p>
              If you didn't create your Paxful account using your phone number,
              you'll need to verify it to access certain levels of your account.
              This also provides additional security to your account with tools
              like two-factor authentication (2FA). Here's how you can verify
              your phone number on Paxful if you didn't create your Paxful
              account using your phone number.
            </p>
            <ol className='mb-3'>
              <li className='mb-2'>
                Log in to your Paxful account, hover over your username on the
                top right of the page and click Settings from the context menu
                that appears.
                <p>The Settings page appears. </p>
              </li>
              <li className='mb-2'>
                On the menu on the left side of the page, click Profile.
              </li>
              <li className='mb-2'>
                <p>
                  Enter your phone number in the PHONE field and click Verify or
                  Use a phone call instead.
                </p>
                <Alert>
                  <b>Note:</b> We recommend the Verify option as the call option
                  is not supported in all countries.
                </Alert>
              </li>
              <li className='mb-2'>
                <ol type='a'>
                  <li className='mb-2'>
                    Phone call option{' '}
                    <p>
                      You receive a phone call with the numeric confirmation
                      code. Listen carefully to the code and enter it in the
                      field below and click Submit. Your number is verified.
                    </p>
                  </li>
                  <li className='mb-2'>
                    Verify (SMS) option.
                    <p>
                      You receive an SMS with the numeric confirmation code.
                      Enter the code in the field below and click Submit. Your
                      number is verified.
                    </p>
                  </li>
                </ol>
              </li>
            </ol>
            <p>
              After confirming your phone number, consider activating 2FA and
              verifying your ID.
            </p>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='5'>
        <Accordion.Header>Id Verification</Accordion.Header>
        <Accordion.Body>
          <div>
            <p>
              ID verification elevates your trading experience to a new level.
              We have done our best to make this process as easy as possible for
              you. Here is a step-by-step guide to help you verify your ID on
              Paxful.
            </p>
            <p>
              Before you begin, please ensure that you have verified your phone
              number.
            </p>
            <Card className='mb-3'>
              <Card.Body>
                <ol>
                  <li className='mb-2'>Video Guide</li>
                  <li className='mb-2'>Step 1 Open Verification Page</li>
                  <li className='mb-2'>Step 2 Insert Your Details</li>
                  <li className='mb-2'>Step 3 Provide ID Photo</li>
                  <li className='mb-2'>Step 4 Complete Face Verification</li>
                </ol>
              </Card.Body>
            </Card>
            <div className='mb-3'>
              <h5>Video Guide</h5>
              <p>
                Here is a short video that walks you through the verification
                process:
              </p>
            </div>
            <div className='mb-3'>
              <h5>Step 1 Open Verification Page</h5>
              <ol>
                <li className='mb-2'>
                  Log in to your Paxful account, hover over your username
                  located on the upper right of the page and click Verify Me.
                  <p>
                    A dialog box with the verification video guide appears.{' '}
                  </p>
                </li>
                <li className='mb-2'>
                  After watching our video, click Continue verification.
                  <p>The Verification page appears.</p>
                </li>
              </ol>
            </div>
            <div className='mb-3'>
              <h5>Step 2 Insert Your Details</h5>
              <ol>
                <li className='mb-2'>
                  Fill in the fields on the ID verification form.
                </li>
                <li className='mb-2'>
                  Click Start verification process.
                  <p>The photo ID verification page appears. </p>
                </li>
              </ol>
            </div>
            <div className='mb-3'>
              <h5>Step 3 Provide ID Photo</h5>
              <ol className='mb-2'>
                <li className='mb-2'>
                  On the ID verification page, click Start.
                  <p>The Submit identity card page appears.</p>
                </li>
                <li className='mb-2'>
                  Choose whether you want to take a photo of ID or to upload an
                  existing file from your device.
                </li>
              </ol>
              <Alert>
                <b>Note</b>
                <ul className='mt-2' style={{ paddingLeft: '2rem' }}>
                  <li className='mb-2'>
                    Some countries may not have the ability to upload a file
                    during the ID verification process. These users will need to
                    take a live photo instead.
                  </li>
                  <li className='mb-2'>
                    If you prefer to use your mobile phone, click Prefer to use
                    your mobile?
                  </li>
                </ul>
              </Alert>
            </div>
            <div className='mb-3'>
              <h5>Take Photo</h5>
              <p>
                To take a picture of your ID, make sure your document is ready
                and follow the instructions that appear on the screen.
              </p>
              <ol className='mb-3'>
                <li className='mb-2'>Click Take photo.</li>
                <li className='mb-2'>
                  <p>Click Start.</p>
                  <Alert variant='danger'>
                    <p>
                      <b>Warning:</b> Give the application permission to access
                      your device camera.
                    </p>
                  </Alert>
                  <p>
                    Place your ID in the center of the screen and make sure all
                    the necessary details are visible:{' '}
                  </p>
                  <ul style={{ paddingLeft: '2rem' }}>
                    <li className='mb-2'>your face on the document</li>
                    <li className='mb-2'>document number</li>
                    <li className='mb-2'>your full name</li>
                  </ul>
                </li>
                <li className='mb-2'>
                  Click the Camera icon to capture the image.
                  <p>Click the Camera icon to capture the image.</p>
                </li>
                <li className='mb-2'>
                  f the image is clear, click Confirm. If the photo is not
                  legible or if you are not satisfied with it, click Retake and
                  try again.
                </li>
              </ol>
              <p>
                Repeat the process once again to capture the backside of your ID
                card or Driving license. In the case of a passport, simply
                continue to the next step.
              </p>
            </div>
            <div className='mb-3'>
              <h5>Upload file</h5>
              <p>If you want to upload a file from your device,</p>
              <ol className='mb-3'>
                <li className='mb-2'>
                  Click Upload file. <p>The Upload image page appears. </p>
                </li>
                <li className='mb-2'>
                  Click Choose file and select a file from your device.
                </li>
                <li className='mb-2'>
                  Click Choose another file if you want to retry. If you
                  selected the right file, click Confirm.
                </li>
              </ol>
              <p>
                Repeat the process once again to capture the backside of your ID
                card or Driving license. In the case of a passport, simply
                continue to the next step.
              </p>
            </div>
            <div className='mb-3'>
              <h5>Step 4 Complete Face Verification</h5>
              <p>
                The next step after submitting your ID is to complete your face
                verification. To verify your facial identity. ,
              </p>
              <ol className='mb-3'>
                <li className='mb-2'>
                  On the Face verification page, click Continue.
                  <p>Center your camera page appears.</p>
                </li>
                <li className='mb-2'>
                  Make sure your camera is working and placed correctly. Click
                  Continue.
                  <p>
                    The application activates your device camera so you can
                    click a picture of your face.
                  </p>
                </li>
                <li className='mb-2'>
                  Once you are ready, click Start.
                  <p>
                    While clicking the picture, keep the following points in
                    mind:
                  </p>
                  <ul className='mb-2' style={{ paddingLeft: '2rem' }}>
                    <li className='mb-2'>Look straight into the camera.</li>
                    <li className='mb-2'>
                      Make sure you are dressed decently and are not wearing
                      glasses or hats.
                    </li>
                    <li className='mb-2'>
                      Follow the instructions by moving your face closer to the
                      camera.
                    </li>
                    <li className='mb-2'>Fit your face into the oval frame.</li>
                  </ul>
                  <p>
                    In case of an error, click Try again. In case of success,
                    your photo will be sent automatically to our Verification
                    Team.
                  </p>
                </li>
              </ol>
              <Alert>
                <p>
                  <b>Note:</b> If your attempt has failed, consider increasing
                  the amount of light in the room.
                </p>
              </Alert>
              <p>
                You’ll be notified about your application in just a few minutes!
                Check your notification inbox to find out if your application
                was approved or declined. You will also receive an email with
                the result of your verification.{' '}
              </p>
              <Alert>
                <b>Note:</b>
                <ul className='mt-2' style={{ paddingLeft: '2rem' }}>
                  <li className='mb-2'>
                    There is a lifetime limit of 5 verification attempts for
                    each user!
                  </li>
                  <li className='mb-2'>
                    If you have not received an answer within 24 hours, it means
                    that your document is going through manual verification.
                    Manual verification may take more than 2 days (2-7 days).
                  </li>
                  <li className='mb-2'>
                    Due to Coronavirus (COVID-19) pandemic, manual verification
                    processing times may be longer than usual (3-10 days). Thank
                    you for your patience.
                  </li>
                </ul>
              </Alert>
              <p>
                If you have any questions or face any issues, contact us via our
                contact form. After completing your ID verification, feel free
                to verify your address as well.
              </p>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default AccordianComponentsData
