import React from 'react'

const RestrictionPaymentMethod = () => {
  return (
    <div>
      <p>
        In an effort to help make the marketplace a safer environment, Paxful
        has placed restrictions on some payment methods in certain countries.
        You won't be able to create a new offer or start a new trade using
        restricted payment methods. If you have current offers using restricted
        payment methods, those offers will be deauthorized.
      </p>
      <p>
        If you are temporarily living or traveling in a{' '}
        <a href='#'>country where a payment method is restricted</a>, but you
        have proof that the payment method belongs to you, please:
      </p>
      <ol className='my-2'>
        <li className='mb-2'>
          Take a screenshot of the account that displays your name
        </li>
        <li className='mb-2'>
          Provide proof that you are only temporarily in a restricted country,
          and proof of address or documentation from your country of origin
        </li>
        <li className='mb-2'>
          Send the screenshots of the documents to our support team through
          <a href='#'>PaxBot</a>, our automated website helper
        </li>
      </ol>
      <p>
        Our team will review your information and contact you if they have
        additional questions.
      </p>
    </div>
  )
}

export default RestrictionPaymentMethod
