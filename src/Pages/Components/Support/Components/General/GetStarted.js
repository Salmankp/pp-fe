import React from 'react'
import { Alert } from 'react-bootstrap'
import SignupImg from '../../../../../assets/images/support/signup.webp'

const GetStarted = () => {
  return (
    <div>
      <div>
        <h4 className='mb-2'>1. Start at the P2p Account Registration Page</h4>
        <p>If you’re starting from the P2p home page, click Register.</p>
        <p>
          From there, you'll need to create your account with either your phone
          number or email address.
        </p>
        <img className='w-100 mb-3 d-block' src={SignupImg} alt='SignupImg' />
        <p>
          Once your account is created, you'll receive a free cryptocurrency
          wallet. This digital wallet is where you will store all of your
          hard-earned cryptocurrency. To learn more about the functions of this
          wallet and <a href='#'>any restrictions</a>, visit our Help Center’s
          section on P2P Wallets.{' '}
        </p>
      </div>
      <div>
        <h4>2. Verify your Account</h4>
        <p>
          Once you've created your account, you'll need to verify your phone
          number or email address (depending on what you used to create your
          account) using a code sent to your phone or email.
        </p>
        <p>
          There are <a href='#'>several levels of verification</a> that you can
          complete. These verification levels allow for different trading
          opportunities within the marketplace, and the verification process
          helps the security of the platform.
        </p>
        <Alert variant='info'>
          <h5>Pro-Tip</h5>
          <p>
            Take some time after you verify your account to familiarize yourself
            with the marketplace. You can take a tour of our platform by hitting
          </p>
        </Alert>
        <p>That’s it! Time to get trading🤘 </p>
        <Alert variant='primary'>
          <h5>Note:</h5>
          <p>
            If you are located in certain <a href='#'>states</a> or certain
            <a href='#'>countries</a>, you may be unable to access P2P at this
            time. For further information on countries that have banned access
            visit <a href='#'>here</a>.
          </p>
        </Alert>
      </div>
    </div>
  )
}

export default GetStarted
