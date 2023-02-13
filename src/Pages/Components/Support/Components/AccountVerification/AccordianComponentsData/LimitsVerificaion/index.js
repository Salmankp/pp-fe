import React from 'react'
import { Alert, Table } from 'react-bootstrap'

const LimitsVerificaion = () => {
  return (
    <div>
      <p>
        Verification is an important part of Paxful as we aim to make the
        trading experience on our platform as safe as possible.
      </p>
      <p>
        The following table lists out our various verification levels along with
        their corresponding benefits:
      </p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Level</th>
            <th>Verification Needed</th>
            <th> Per Trade Limit</th>
            <th>Trade Volume Lifetime Limit</th>
            <th>Send from Wallet Lifetime Limit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td>-</td>
            <td>$0</td>
            <td>$0</td>
            <td>$0</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Phone</td>
            <td>$1,000*</td>
            <td>$1,000 *</td>
            <td> $1,000*</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Email and ID</td>
            <td> $10,000</td>
            <td>$10,000</td>
            <td> $10,000</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Address</td>
            <td> $50,000</td>
            <td>Unlimited</td>
            <td>Unlimited</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Enhanced Due Diligence</td>
            <td>Higher than $50,000</td>
            <td>Unlimited</td>
            <td>Unlimited</td>
          </tr>
        </tbody>
      </Table>
      <ul className='my-2' style={{ paddingLeft: '2rem' }}>
        <li className='mb-2'>
          Users from countries on <a href='#'>this list</a> require levels 1 and
          2 to sell crypto, convert crypto, and withdraw any funds from their
          Paxful Wallet.
        </li>
        <li className='mb-2'>
          For Lightning transactions, there is an additional limit of $750 per
          transaction and $10,000 per month.
        </li>
      </ul>
      <Alert>
        <b>Note:</b> Trade limits and wallet send out limits are tracked
        separately. For example, you can have $500 remaining for trading, and
        $9,000 left for wallet send outs.
      </Alert>
      <p>Why should I verify my account?</p>
      <p>
        With each new level of verification, here’s a glimpse of what you’ll
        unlock:
      </p>
      <div className='my-3'>
        <b>Level 1</b>
        <ul className='my-2' style={{ paddingLeft: '2rem' }}>
          <li className='mb-2'>Increased security on your account</li>
          <li className='mb-2'>Ability to trade and send more crypto</li>
          <li className='mb-2'>Ability to convert cryptocurrency</li>
        </ul>
      </div>
      <div className='mb-3'>
        <b>Level 2</b>
        <ul className='my-2' style={{ paddingLeft: '2rem' }}>
          <li className='mb-2'>Increased trade and send out limits</li>
          <li className='mb-2'>Access to more payment methods</li>
          <li className='mb-2'>Ability to create your own offers</li>
        </ul>
      </div>
      <div className='mb-3'>
        <b>Level 3</b>
        <ul className='my-2' style={{ paddingLeft: '2rem' }}>
          <li className='mb-2'>Increased trade and send out limits</li>
          <li className='mb-2'>
            Removal of 0.002 BTC requirement for your offers to be visible in
            the marketplace
          </li>
        </ul>
      </div>
      <div className='mb-3'>
        <b>Level 4</b>
        <ul className='my-2' style={{ paddingLeft: '2rem' }}>
          <li className='mb-2'>Increased trade and send out limits</li>
        </ul>
      </div>
      <Alert variant='danger'>
        <b>Warning:</b>
        <ul className='mt-3' style={{ paddingLeft: '2rem' }}>
          <li className='mb-2'>
            Users from countries on <a href='#'>this list</a> require levels 1
            and 2 to use Paxful wallet services and trade on our marketplace. To
            withdraw funds and to make any trades on Paxful, users must verify
            their ID.
          </li>
          <li className='mb-2'>
            In order to create an offer, you need to be{' '}
            <a href='#'>ID-verified</a>.
          </li>
          <li className='mb-2'>
            To send funds from your Paxful wallet, you need to verify your{' '}
            <a href='#'>phone</a>.
          </li>
          <li className='mb-2'>
            The per trade limit for a trade is calculated based on the total
            volume of all active trades available for your current level.{' '}
          </li>
          <li className='mb-2'>
            Check if your country is on the <a href='#'>OFAC grey list</a>. In
            case if your country is on the list, to send funds from your Paxful
            wallet or to sell cryptocurrency, you need to be{' '}
            <a href='#'>ID-verified</a>.
          </li>
        </ul>
      </Alert>
      <p>
        Here are some <a href='#'>additional cases</a> which may require
        verification. Please visit our Help Center for more information on the{' '}
        <a href='#'>verification process</a>.
      </p>
    </div>
  )
}

export default LimitsVerificaion
