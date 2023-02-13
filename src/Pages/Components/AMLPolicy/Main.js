import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Main = () => {
  return (
    <Container className='mt-5'>
      <Row>
        <Col md={12}>
          <div>
            <h1>AML Policy</h1>
            <p>
              P2P, Inc. and P2P USA, Inc. (individually and collectively, the
              “Company”), incorporated under the laws of the State of Delaware
              offers services through an internet-enabled peer-to-peer (“P2P”)
              marketplace for the purchase and sale of digital assets.
            </p>
            <p>
              The Company is registered as a Money Services Business with the
              United States Treasury Department’s Financial Crimes Enforcement
              Network (“FinCEN”). P2P's Anti-Money Laundering (“AML”) policies
              and procedures are designed to deter illicit activities on the
              platform, protect the users, the business, and the digital
              currencies and financial services communities from exploitation by
              criminals. The Company is compliant with the requirements of the
              Bank Secrecy Act and related FinCEN regulations and guidance.
            </p>
            <p>
              As part of P2P’s Compliance policies, Know Your Customer (“KYC”)
              policies and procedures for individual and institutional customers
              have been designed to enable the Company to form a reasonable
              belief that it knows the true identity of those of its customers
              for which such review has been performed. The policy applies to
              all users on the platform and is followed by all of the Company’s
              employees, consultants, officers, owners and directors.
            </p>
            <p>
              Using a risk based approach as part of KYC & AML Compliance, P2P
              has taken the following measures:
            </p>
            <ol className='my-4'>
              <li className='mb-2'>
                Appointment of a Chief Compliance Officer who has the sufficient
                level of expertise and independence, has responsibility for the
                oversight of compliance with the relevant legislation,
                regulations, rules and industry guidance;
              </li>
              <li className='mb-2'>
                Establishing and maintaining risk-based KYC, Customer Due
                Diligence (CDD), and Enhanced Due Diligence (EDD) Policy;
              </li>
              <li className='mb-2'>
                Establishing risk-based tiers for verification of the Company's
                users (refer to this Blog post);
              </li>
              <li className='mb-2'>
                Cooperation with law enforcement requests and local regulatory
                requirements;
              </li>
              <li className='mb-2'>
                Filing of Suspicious Activity Reports (“SARs”);
              </li>
              <li className='mb-2'>Company-wide BSA/AML/OFAC training;</li>
              <li className='mb-2'>Use of various anti-fraud systems;</li>
              <li className='mb-2'>
                Ongoing rule based transaction monitoring;
              </li>
              <li className='mb-2'>
                Investigations using blockchain analytics;
              </li>
            </ol>
            <p>
              We file SARs if we know, suspect or have reason to suspect
              suspicious activities have occurred on our platform. A suspicious
              transaction is often one that is inconsistent with a user’s known
              and legitimate business, personal activities or personal means.
              Our Chief Compliance Officer reviews and investigates suspicious
              activity to determine if sufficient information has been collected
              to justify the filing of a SAR. Our Chief Compliance Officer
              maintains records and supporting documentation of all SARs that
              have been filed.
            </p>
            <p>
              The Company has also adopted ongoing OFAC sanctions policies and
              procedures designed to protect the platform from being used for
              prohibited transactions, by sanctioned individuals or for the
              purposes of evading, avoiding or otherwise circumventing U.S. and
              global sanctions.
            </p>
            <p>
              P2P fully cooperates with all OFAC, Specially Designated Nationals
              (SDN) and Blocked persons sanctions lists. Please refer to the
              following link for the Company's list of risk-based banned
              countries that are prevented from using P2P's platform.
            </p>
            <p>
              Where P2P has provided you with a translation of the English
              language version of this policy, then you agree that the
              translation is provided for your convenience only and that the
              English language versions of the policy will govern your
              relationship with P2P. If there is any contradiction between what
              the English language version of the policy says and what a
              translation says, then the English language version shall control.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Main
