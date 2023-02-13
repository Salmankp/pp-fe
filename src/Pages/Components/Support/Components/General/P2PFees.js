import React from 'react'
import { Table } from 'react-bootstrap'

const P2PFees = () => {
  return (
    <div>
      <div>
        <h4 className='mb-3'>Trading Cryptocurrency</h4>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Payment Group</th>
              <th>Sell</th>
              <th>Buy</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bank Transfer</td>
              <td> 0.5%</td>
              <td>no fee</td>
            </tr>
            <tr>
              <td>Other Bank Transfer</td>
              <td>1%</td>
              <td> no fee</td>
            </tr>
            <tr>
              <td>Credit/Debit Card</td>
              <td> 1%</td>
              <td> no fee</td>
            </tr>
            <tr>
              <td>Digital Currency</td>
              <td> 1%</td>
              <td> no fee</td>
            </tr>
            <tr>
              <td>Online Wallet</td>
              <td> 1%</td>
              <td> no fee</td>
            </tr>
            <tr>
              <td>Cash</td>
              <td> 1%</td>
              <td> no fee</td>
            </tr>
            <tr>
              <td>Goods & Services</td>
              <td> 1%</td>
              <td> no fee</td>
            </tr>
            <tr>
              <td>Gift Card</td>
              <td>
                <p>5% iTunes and Google Play cards</p>
                <p>3% for all other gift card types</p>
              </td>
              <td> no fee</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className='my-4 py-2'>
        <h4>Buying Cryptocurrency</h4>
        <ul style={{ paddingLeft: '2rem' }}>
          <li>
            When buying cryptocurrency from another user on P2P, you are buying
            cryptocurrency at a rate set by the customers themselves. These
            rates vary based on numerous factors such as your verification
            status, payment method, currency pair (such as USD, EUR, CNY), and
            order size.
          </li>
        </ul>
      </div>
      <div className='my-4 py-2'>
        <h4>Selling Cryptocurrency</h4>
        <ul style={{ paddingLeft: '2rem' }}>
          <li>
            This escrow amount is deducted from your P2P Wallet at the beginning
            of the trade. Upon successful completion of the trade, P2P receives
            the escrow fee. If the trade is not completed, i.e cryptocurrency is
            released from escrow back to the cryptocurrency seller, P2P takes no
            fee.
          </li>
          <li>
            Some kiosk trades may require a fee in addition to P2P's escrow fee.
            For more information about kiosk trades, check out{' '}
            <a href='#'>this article.</a>
          </li>
        </ul>
      </div>
      <div className='my-4 py-2'>
        <h4 className='mb-3'>Sending and Receiving Bitcoin</h4>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Wallet Type</th>
              <th>Send</th>
              <th>Receive</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>External Wallet</td>
              <td>
                <div>
                  <p>Dynamic Ethereum or Tron network fee + P2P Wallet fee</p>
                  <p>P2P Wallet fee breakdown:</p>
                  <p>
                    $0 - $9.99 = <b>0.00008 BTC fee</b>
                  </p>
                  <p>
                    $10 - $19.99 = <b>0.00016 BTC fee</b>
                  </p>
                  <p>
                    $20+ = <b>0.0004 BTC fee</b>
                  </p>
                </div>
              </td>
              <td>no fee</td>
            </tr>
            <tr>
              <td>Internal Wallet</td>
              <td>
                <div>
                  <p>
                    Up to 1,000 USD per month for free (between all
                    cryptocurrencies)
                  </p>
                  <p>
                    After 1,000 USD is reached, a fee of 1 USD or 1% of the
                    amount being sent, whichever is greater, is applied
                  </p>
                </div>
              </td>
              <td>no fee</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className='my-4 py-2'>
        <h4 className='mb-3'>Sending and Receiving Tether (USDT)</h4>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Wallet Type</th>
              <th>Send</th>
              <th>Receive</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>External Wallet</td>
              <td>
                <div>
                  <p>Dynamic Ethereum or Tron network fee + P2P Wallet fee</p>
                  <p>P2P Wallet fee breakdown:</p>
                  <p>
                    $0 - $9.99 = <b>1 USDT fee</b>
                  </p>
                  <p>
                    $10 - $19.99 = <b>2 USDT fee</b>
                  </p>
                  <p>
                    $20+ = <b>5 USDT fee</b>
                  </p>
                </div>
              </td>
              <td>no fee</td>
            </tr>
            <tr>
              <td>Internal Wallet</td>
              <td>
                <div>
                  <p>
                    Up to 1,000 USD per month for free (between all
                    cryptocurrencies)
                  </p>
                  <p>
                    After 1,000 USD is reached, a fee of 1 USD or 1% of the
                    amount being sent, whichever is greater, is applied
                  </p>
                </div>
              </td>
              <td>no fee</td>
            </tr>
          </tbody>
        </Table>
        <p>
          When you send TRC-20 based USDT from your P2P wallet, you won't pay a
          Tron network fee, but you will pay the P2P wallet fee.
        </p>
      </div>
      <div className='my-4 py-2'>
        <h4 className='mb-3'>Sending and Receiving Ethereum (ETH)</h4>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Wallet Type</th>
              <th>Send</th>
              <th>Receive</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>External Wallet</td>
              <td>
                <div>
                  <p>Dynamic Ethereum or Tron network fee + P2P Wallet fee</p>
                  <p>P2P Wallet fee breakdown:</p>
                  <p>
                    $0 - $9.99 = <b>0.0005 ETH fee</b>
                  </p>
                  <p>
                    $10 - $19.99 = <b>0.001 ETH fee</b>
                  </p>
                  <p>
                    $20+ = <b>0.002 ETH fee</b>
                  </p>
                </div>
              </td>
              <td>no fee</td>
            </tr>
            <tr>
              <td>Internal Wallet</td>
              <td>
                <div>
                  <p>
                    Up to 1,000 USD per month for free (between all
                    cryptocurrencies)
                  </p>
                  <p>
                    After 1,000 USD is reached, a fee of 1 USD or 1% of the
                    amount being sent, whichever is greater, is applied
                  </p>
                </div>
              </td>
              <td>no fee</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className='my-4 py-2'>
        <h4 className='mb-3'>Lightning</h4>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Wallet Type</th>
              <th>Send</th>
              <th>Receive</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>External Wallet</td>
              <td>1% of the amount being sent</td>
              <td>no fee</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className='my-4 py-2'>
        <h4 className='mb-3'>Converting Cryptocurrency </h4>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Conversion Type</th>
              <th>Fee</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>All cryptocurrency conversions</td>
              <td>0.5%</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className='my-4 py-2'>
        <h4 className='mb-3'>Converting Tether (USDT)</h4>
        <h4 className='mb-3'>P2P Stablecoin</h4>
        <p>
          The quoted price you receive from the Stablecoin Counterparty is
          inclusive of all fees and charges. This quoted price may include
          additional fees charged by the Stablecoin Counterparty and/or third
          party fees necessary to facilitate this transaction. Please note that
          this is a separate fee from a third party and P2P is not responsible
          for nor calculates such third party fee.
        </p>
      </div>
    </div>
  )
}

export default P2PFees
