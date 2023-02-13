import React from 'react'
import { Table } from 'react-bootstrap'

const TableContent = () => {
  return (
    <div className='pt-5'>
      <div className='mb-4'>
        <Table striped bordered hover>
          <tbody>
            <tr>
              <th>Facts</th>
              <td>What does Paxful do with your personal information?</td>
            </tr>
            <tr>
              <th>Why?</th>
              <td>
                Financial companies choose how they share your personal
                information. Federal law gives consumers the right to limit some
                but not all sharing. Federal law also requires us to tell you
                how we collect, share, and protect your personal information.
                Please read this notice carefully to understand what we do.
              </td>
            </tr>
            <tr>
              <th>What?</th>
              <td>
                The types of personal information we collect and share depend on
                the product or service you have with us. This information can
                include:
                <ul style={{ paddingLeft: '2rem' }}>
                  <li className='mb-2'>
                    Social Security number or account balances
                  </li>
                  <li className='mb-2'>
                    Payment history or transaction history
                  </li>
                  <li className='mb-2'>Credit history or credit scores</li>
                </ul>
                <p>
                  When you are no longer our customer, we continue to share your
                  information as described in this notice.
                </p>
              </td>
            </tr>
            <tr>
              <th>How?</th>
              <td>
                All financial companies need to share customers' personal
                information to run their everyday business. In the section
                below, we list the reasons financial companies can share their
                customers' personal information; the reasons Paxful chooses to
                share; and whether you can limit this sharing.
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className='mb-4'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Reasons we can share your personal information</th>
              <th>Does Paxful share?</th>
              <th>Can you limit this sharing?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>
                  <b>For our everyday business purposes</b> - such as to process
                  your transactions, maintain your account(s), respond to court
                  orders and legal investigations, or report to credit bureaus
                </p>
              </td>
              <td>Yes</td>
              <td>No</td>
            </tr>
            <tr>
              <td>
                <p>
                  <b>For our marketing purposes</b> - to offer our products and
                  services to you
                </p>
              </td>
              <td>Yes</td>
              <td>No</td>
            </tr>
            <tr>
              <td>
                <p>For joint marketing with other financial companies</p>
              </td>
              <td>Yes</td>
              <td>No</td>
            </tr>
            <tr>
              <td>
                <p>
                  <b>For our affiliates' everyday business purposes</b> -
                  information about your transactions and experiences
                </p>
              </td>
              <td>Yes</td>
              <td>No</td>
            </tr>
            <tr>
              <td>
                <p>
                  <b>For our affiliates' everyday business purposes</b> -
                  information about your creditworthiness
                </p>
              </td>
              <td>No</td>
              <td>We don't share</td>
            </tr>
            <tr>
              <td>
                <p>For nonaffiliates to market to you</p>
              </td>
              <td>No</td>
              <td>We don't share</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className='mb-4'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th colSpan={2}>
                <b>Who we are</b>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>Who is providing this notice?</b>
              </td>
              <td>
                The privacy notice is provided by Paxful and is applicable to
                your personal Paxful account.
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className='mb-4'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th colSpan={2}>
                <b>What we do</b>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>How does Paxful protect my personal information?</b>
              </td>
              <td>
                To protect your personal information from unauthorized access
                and use, we use security measures that comply with federal law.
                These measures include computer safeguards and secured files and
                buildings.
              </td>
            </tr>
            <tr>
              <td>
                <b>How does Paxful collect my personal information?</b>
              </td>
              <td>
                <p>
                  We collect your personal information, for example, when you
                </p>
                <ul style={{ paddingLeft: '2rem' }}>
                  <li className='mb-2'>
                    open an account or provide account information
                  </li>
                  <li className='mb-2'>
                    give us contact information or make a transfer
                  </li>
                  <li className='mb-2'>
                    use your Paxful account to send or receive funds
                  </li>
                </ul>
                <p>
                  We also collect personal information from others, such as
                  credit bureaus, affiliates, and other companies.
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <b>Why can’t I limit all sharing?</b>
              </td>
              <td>
                <p>Federal law gives you the right to limit only</p>
                <ul style={{ paddingLeft: '2rem' }}>
                  <li className='mb-2'>
                    sharing for affiliates' everyday business purposes —
                    information about your creditworthiness
                  </li>
                  <li className='mb-2'>
                    affiliates from using your information to market to you
                  </li>
                  <li className='mb-2'>
                    sharing for nonaffiliates to market to you
                  </li>
                </ul>
                <p>
                  State laws and individual companies may give you additional
                  rights to limit sharing. See below for more on your rights
                  under state law.
                </p>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className='mb-4'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th colSpan={2}>
                <b>Definitions</b>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>Affiliates</b>
              </td>
              <td>
                <p>
                  Companies related by common ownership or control. They can be
                  financial and nonfinancial companies.
                </p>
                <ul style={{ paddingLeft: '2rem' }}>
                  <li>
                    ates include companies under common control of Paxful
                    Holdings, Inc.
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                <b>Nonaffiliates</b>
              </td>
              <td>
                <p>
                  Companies not related by common ownership or control. They can
                  be financial and nonfinancial companies.
                </p>
                <ul style={{ paddingLeft: '2rem' }}>
                  <li>
                    Nonaffiliates with which we share personal information
                    include service providers that perform services or functions
                    on our behalf.
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                <b>Joint marketing</b>
              </td>
              <td>
                <p>
                  A formal agreement between nonaffiliated financial companies
                  that together market financial products or services to you.
                </p>
                <ul style={{ paddingLeft: '2rem' }}>
                  <li>
                    Our joint marketing partners include financial companies.
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className='mb-4'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>
                <b>Other important information</b>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>
                  We may transfer personal information to other countries, for
                  example, for customer service or to process transactions.
                </p>
                <p>
                  California: If your Paxful account has a California mailing
                  address, we will not share personal information we collect
                  about you except to the extent permitted under California law.
                </p>
                <p>
                  Vermont: If your Paxful account has a Vermont address, we will
                  not share personal information we collect about you with
                  nonaffiliates unless the law allows or you provide
                  authorization.
                </p>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default TableContent
