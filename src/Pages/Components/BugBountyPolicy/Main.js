import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Main = () => {
  return (
    <Container className='mt-5'>
      <Row>
        <Col md={12}>
          <div>
            <div className='mb-3'>
              <h1>Bug Bounty Policy</h1>
              <p>
                P2P, Inc. (also referred to as “P2P,” “we,” “us,” or “our”)
                takes steps to improve our product and provide secure solutions
                for our customers. In this Bug Bounty Policy (“Policy”), we
                describe applicable cases for our Bug Bounty Program and how it
                should be used in connection with your use of our website at
                https://P2P.com/, including, but not limited to, the P2P Wallet,
                online Bitcoin trading platform, mobile application, social
                media pages, or other online properties (collectively, the
                “Website”), or when you use any of the products, services,
                content, features, technologies, or functions we offer
                (collectively, the “Services”). This Policy is designed to help
                you obtain information about how you can participate in our Bug
                Bounty Program, which secure research results are applicable,
                and which benefits you can receive. Please note that our Service
                offerings may vary by region.
              </p>
              <p>
                For all purposes, the English language version of this bug
                bounty policy shall be the original, governing instrument. In
                the event of any conflict between the English language version
                of this bug bounty policy and any subsequent translation into
                any other language, the English language version shall govern
                and control.
              </p>
            </div>
            <div className='mb-3'>
              <h3>What is the Bug Bounty Program?</h3>
              <p>
                In order to improve P2P and the Services, the P2P Bug Bounty
                Program provides our users an opportunity to earn a reward for
                identifying technical issues.
              </p>
            </div>
            <div className='mb-3'>
              <h3>
                How can you communicate your Bug Bounty Program findings to us?
              </h3>
              <p>
                All such communications should be directed to bugbounty@P2P.com.
                In your submission please specify full description of the
                vulnerability and verifiable proof that the vulnerability exists
                (explanation / steps to reproduce / screenshots / videos /
                scripts or such other materials).
              </p>
            </div>
            <div className='mb-3'>
              <h3>Program Rules</h3>
              <p>
                Violation of any of these rules can result in ineligibility for
                a bounty.
              </p>
              <ol>
                <li className='mb-2'>
                  Test vulnerabilities only against an account that you own or
                  accounts that you have consent from the account holder to test
                  against.
                </li>
                <li className='mb-2'>
                  Never use a finding to compromise/exfiltrate data or pivot to
                  other systems. Use a proof of concept only to demonstrate an
                  issue.
                </li>
                <li className='mb-2'>
                  If sensitive information such as personal information,
                  credentials, etc.. is accessed as part of a vulnerability, it
                  must not be saved, stored, transferred, accessed, or otherwise
                  processed after initial discovery.
                </li>
                <li className='mb-2'>
                  Researchers may not, and are not authorised to engage in any
                  activity that would be disruptive, damaging or harmful to P2P.
                </li>
                <li className='mb-2'>
                  Researchers may not publicly disclose vulnerabilities (sharing
                  any details whatsoever with anyone other than authorized P2P
                  employees), or otherwise share vulnerabilities with a third
                  party, without P2P's express permission.
                </li>
              </ol>
            </div>
            <div className='mb-3'>
              <h3>
                How do we evaluate issues identified under the Bug Bounty
                Program?
              </h3>
              <p>All findings are evaluated using a risk-based approach.</p>
            </div>
            <div className='mb-3'>
              <h3>Non-Disclosure Agreement</h3>
              <p>
                Before we begin discussing any details related to confirmed
                issues that you have identified under the Bug Bounty Program,
                including compensation, etc., you will be required to enter into
                a Non-Disclosure Agreement with us.
              </p>
            </div>
            <div className='mb-3'>
              <h3>How do we pay Bug Bounty Program rewards?</h3>
              <p>
                All such rewards are paid by P2P. All rewards can be paid only
                if they are not contrary to applicable laws and regulations,
                including but not limited to trade sanctions and economic
                restrictions.
              </p>
            </div>
            <div className='mb-3'>
              <h3>
                How long will it take us to analyze your Bug Bounty Program
                findings?
              </h3>
              <p>
                Due to the varying and complex nature of technical issues, we
                have not established particular timelines for analyzing findings
                under the Bug Bounty Program. Our analysis is finished only when
                we have confirmed the existence or absence of a vulnerability.
              </p>
            </div>
            <div className='mb-3'>
              <h3>What cases are excluded from the Bug Bounty Program?</h3>
              <p>
                Certain vulnerabilities are considered out-of-scope for the Bug
                Bounty Program. Those out-of-scope vulnerabilities include, but
                are not limited to:
              </p>
              <ol>
                <li className='mb-2'>Spam;</li>
                <li className='mb-2'>
                  Vulnerabilities that require social engineering/phishing;
                </li>
                <li className='mb-2'>DDOS attacks;</li>
                <li className='mb-2'>
                  Hypothetical issues that do not have any practical impact;
                </li>
                <li className='mb-2'>
                  Security vulnerabilities in third-party applications and on
                  third-party websites integrated with P2P;
                </li>
                <li className='mb-2'>
                  Scanner output or scanner-generated reports;
                </li>
                <li className='mb-2'>
                  Issues found through automated testing;
                </li>
                <li className='mb-2'>
                  Publicly-released bugs in Internet software within 30 days of
                  their disclosure;
                </li>
                <li className='mb-2'>Man-in-the-Middle attacks;</li>
                <li className='mb-2'>
                  Host header injections without a specific, demonstrable
                  impact;
                </li>
                <li className='mb-2'>
                  Self-XSS, which includes any payload entered by the victim;
                </li>
                <li className='mb-2'>Login/logout CSRF;</li>
              </ol>
            </div>
            <div className='mb-3'>
              <h3>More Information</h3>
              <p>
                If you are looking for more information regarding this Policy,
                you may contact us by emailing privacy@P2P.com.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Main
