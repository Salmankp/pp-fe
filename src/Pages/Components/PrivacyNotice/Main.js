import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import TableContent from './TableContent'

const Main = () => {
  return (
    <Container className='mt-5 pt-5'>
      <Row>
        <Col md={12}>
          <div>
            <h1 className='mb-4'>Paxful, Inc. Privacy Notice</h1>
            <p>
              Paxful, Inc. (also referred to as “Paxful,” “we,” “us,” or “our”)
              takes steps to protect your privacy. In this Privacy Notice
              (“Notice”), we describe the types of personal information we may
              collect from you in connection with your use of our websites
              including, but not limited to, <a href='#'>https://paxful.com/</a>
              , the Paxful Wallet, our online bitcoin trading platform, mobile
              application, social media pages, or other online properties
              (collectively, the “Website”), or when you use any of the
              products, services, content, features, technologies, or functions
              we offer (collectively, the “Services”).
            </p>
            <p>
              This Notice is designed to help you obtain information about our
              privacy practices and to help you understand your privacy choices
              when you use our Website and Services. Please note that our
              Service offerings may vary by region.
            </p>
            <p>
              For all purposes, the English language version of this privacy
              notice shall be the original, governing instrument. In the event
              of any conflict between the English language version of this
              privacy notice and any subsequent translation into any other
              language, the English language version shall govern and control.
            </p>
          </div>
          <div>
            <h1 className='mb-3'>Personal information we collect</h1>
            <p>
              We collect information that relates to you (“Personal Data”) in
              connection with your use of the Website, our Services. or
              otherwise in the context of our relationship with you. The types
              of Personal Data that we may obtain from you may include:
            </p>
            <div>
              <Row>
                <Col md={6}>
                  <div>
                    <h3 className='mb-3'>Biographical Data, including:</h3>
                    <ol className='my-2'>
                      <li className='mb-3'>Name</li>
                      <li className='mb-3'>Email Address</li>
                      <li className='mb-3'>Phone Number</li>
                      <li className='mb-3'>Country</li>
                      <li className='mb-3'>Full Address</li>
                      <li className='mb-3'>Date of Birth</li>
                    </ol>
                  </div>
                </Col>
                <Col md={6}>
                  <div>
                    <h3 className='mb-3'>Paxful Account Details, including:</h3>
                    <ol className='my-2'>
                      <li className='mb-3'>Username</li>
                      <li className='mb-3'>
                        User Profile Information in the “Bio” section
                      </li>
                      <li className='mb-3'>Profile Picture</li>
                      <li className='mb-3'>Joined Date</li>
                      <li className='mb-3'>Default Currency</li>
                      <li className='mb-3'>Time Zone</li>
                      <li className='mb-3'>Default Language</li>
                    </ol>
                  </div>
                </Col>
                <Col className='mt-4' md={6}>
                  <div>
                    <h3 className='mb-3'>
                      Paxful Account Activity, including:
                    </h3>
                    <ol className='my-2'>
                      <li className='mb-3'>
                        Trade Chat Messages (which may contain financial
                        information if you provide it to sellers)
                      </li>
                      <li className='mb-3'>Trade Chat Attachments</li>
                      <li className='mb-3'>Trade Activity</li>
                      <li className='mb-3'>Transaction History</li>
                      <li className='mb-3'>Affiliate Name</li>
                      <li className='mb-3'>Affiliate ID</li>
                      <li className='mb-3'>Affiliate Link</li>
                      <li className='mb-3'>Affiliate Transactions</li>
                      <li className='mb-3'>Offers Created</li>
                      <li className='mb-3'>Offer Terms</li>
                      <li className='mb-3'>Trade Instructions</li>
                      <li className='mb-3'>Account Notifications</li>
                      <li className='mb-3'>Account Status</li>
                    </ol>
                  </div>
                </Col>
                <Col className='mt-4' md={6}>
                  <div>
                    <h3 className='mb-3'>
                      Data relating to your Digital asset wallet, including:
                    </h3>
                    <ol className='my-2'>
                      <li className='mb-3'>Private Keys</li>
                      <li className='mb-3'>Public Keys</li>
                      <li className='mb-3'>Wallet Balance</li>
                      <li className='mb-3'>Transactions received</li>
                      <li className='mb-3'>Transactions sent</li>
                    </ol>
                  </div>
                </Col>
                <Col className='mt-4' md={6}>
                  <div>
                    <h3 className='mb-3'>
                      Data Collected in connection with “Know Your Customer”
                      (KYC) Compliance, including:
                    </h3>
                    <ol className='my-2'>
                      <li className='mb-3'>Government-issued ID</li>
                      <li className='mb-3'>Proof of Address</li>
                      <li className='mb-3'>Phone Number</li>
                      <li className='mb-3'>
                        Photographs, if you elect to provide them to us
                      </li>
                      <li className='mb-3'>
                        Video, if you elect to provide them to us
                      </li>
                    </ol>
                  </div>
                </Col>
                <Col className='mt-4' md={6}>
                  <div>
                    <h3 className='mb-3'>
                      Device and Website Usage Data, including:
                    </h3>
                    <ol className='my-2'>
                      <li className='mb-3'>IP Addresses</li>
                      <li className='mb-3'>
                        Cookie ID and/or other device identifiers
                      </li>
                      <li className='mb-3'>
                        Information relating to your access to the Website, such
                        as device characteristics, date & time
                      </li>
                      <li className='mb-3'>Language preferences</li>
                      <li className='mb-3'>
                        Information on actions taken while using the Website
                      </li>
                    </ol>
                  </div>
                </Col>
                <Col className='mt-4' md={12}>
                  <div>
                    <h3 className='mb-3'>
                      Mobile application usage data, including:
                    </h3>
                    <ol className='my-2'>
                      <li className='mb-3'>
                        Session data: IP address, version of the operating
                        system, brand and model of the device, unique
                        identifiers of the device, browser used, information
                        about the time the Application was accessed, name and
                        parameters of the network connection.
                      </li>
                      <li className='mb-3'>
                        Information about applications installed on the User’s
                        device (metadata from applications): application name,
                        application identifier and version, device identifier
                        and checksum. Detecting malicious apps and protecting
                        users from fraud are the main reasons for collecting
                        information about installed apps.
                      </li>
                      <li className='mb-3'>
                        Information on actions taken while using the mobile
                        application
                      </li>
                      <li className='mb-3'>
                        Crash and application errors diagnostics data
                      </li>
                    </ol>
                  </div>
                </Col>
                <Col className='mt-4' md={12}>
                  <div>
                    <h3 className='mb-3'>How we use your data</h3>
                    <p>
                      The business purposes for which we collect, use, retain,
                      and share your Personal Data may include:
                    </p>
                    <ol className='my-2'>
                      <li className='mb-3'>
                        <p>
                          To provide Services through operating the Website,
                          including to:
                        </p>
                        <ul style={{ paddingLeft: '2rem' }}>
                          <li className='mb-2'>
                            Register, create, and maintain your account;
                          </li>
                          <li className='mb-2'>
                            Authenticate your identity and/or your access to an
                            account, or help sellers verify your identity;
                          </li>
                          <li className='mb-2'>
                            Initiate, facilitate, process, and/or execute
                            transactions;
                          </li>
                          <li className='mb-2'>
                            Communicate with you regarding your account or any
                            Services you use;
                          </li>
                          <li className='mb-2'>
                            Perform creditworthiness, KYC, or other similar
                            reviews;
                          </li>
                          <li className='mb-2'>Evaluate applications; or</li>
                          <li className='mb-2'>
                            Compare information for accuracy and verification
                            purposes.
                          </li>
                        </ul>
                      </li>
                      <li className='mb-3'>
                        To manage risk and protect you, other persons, and the
                        Website and Services.
                      </li>
                      <li className='mb-3'>
                        To provide a personalized experience and implement your
                        preferences.
                      </li>
                      <li className='mb-3'>
                        To better understand customers and how they use and
                        interact with the Website and Services.
                      </li>
                      <li className='mb-3'>To market to you.</li>
                      <li className='mb-3'>
                        To provide personalized Services, offers, and promotions
                        on our Website and third-party websites.
                      </li>
                      <li className='mb-3'>
                        To provide you with location-specific options,
                        functionalities, and offers.
                      </li>
                      <li className='mb-3'>
                        To comply with our policies and obligations, including,
                        but not limited to, disclosures and responses in
                        response to any requests from law enforcement
                        authorities and/or regulators in accordance with any
                        applicable law, rule, regulation, judicial or
                        governmental order, regulatory authority of competent
                        jurisdiction, discovery request or similar legal
                        process.
                      </li>
                      <li className='mb-3'>
                        To resolve disputes, collect fees, or troubleshoot
                        problems.
                      </li>
                      <li className='mb-3'>
                        To provide customer service to you or otherwise
                        communicate with you.
                      </li>
                      <li className='mb-3'>To manage our business.</li>
                    </ol>
                    <p>
                      We may also process Personal Data for other purposes based
                      upon your consent when required by applicable law.
                    </p>
                  </div>
                </Col>
                <Col className='mt-4' md={12}>
                  <div>
                    <h3 className='mb-3'>
                      Sources from which we collect personal data
                    </h3>
                    <p>
                      We collect Personal Data from a number of sources,
                      including
                    </p>
                    <ol className='my-2'>
                      <li className='mb-3'>
                        <b>Directly from you:</b> We collect Personal Data
                        directly from you when you use our Website or Services,
                        communicate with us, or interact directly with us.
                      </li>
                      <li className='mb-3'>
                        <b>
                          From service providers and/or data processors who
                          assist us in providing the Website or the Services:
                        </b>{' '}
                        We may engage service providers to assist us in
                        facilitating the Website or the Services to you, at our
                        direction and on our behalf. These service providers may
                        collect information about you and provide it to us.
                      </li>
                      <li className='mb-3'>
                        <b>
                          From other users on the Paxful Website or from
                          affiliates integrated with the Paxful Website or
                          Services:
                        </b>{' '}
                        Other users may provide us with information about you in
                        connection with transactions or chats. Affiliates may
                        also provide information to us about you related to your
                        interactions or transactions with such affiliates.
                      </li>
                      <li className='mb-3'>
                        From third-parties who may help us verify identity,
                        prevent fraud, and protect the security of transactions.
                      </li>
                      <li className='mb-3'>
                        From third-parties who may help us evaluate your
                        creditworthiness or financial standing.
                      </li>
                      <li className='mb-3'>
                        From third-parties who may help us analyze Personal
                        Data, improve the Website or the Services or your
                        experience on it, market products or services, or
                        provide promotions and offers to you.
                      </li>
                      <li className='mb-3'>
                        From social media platforms, if you interact with us
                        through social media.
                      </li>
                    </ol>
                  </div>
                </Col>
                <Col className='mt-4' md={12}>
                  <div>
                    <h3 className='mb-3'>How we share data</h3>
                    <p>
                      Under certain circumstances, we may disclose certain
                      Personal Data with other persons. The categories of
                      persons with whom we may share Personal Data include:
                    </p>
                    <ol className='my-2'>
                      <li className='mb-3'>
                        <b>Service providers and/or data processors: </b> We may
                        share Personal Data with third-party service providers
                        that perform services and functions at our direction and
                        on our behalf. These third-party service providers may,
                        for example, provide you with Services, verify your
                        identity, assist in processing transactions, send you
                        advertisements for our products and Services, or provide
                        customer support.
                      </li>
                      <li className='mb-3'>
                        <b>Other parties to transactions, such as sellers:</b>{' '}
                        We may share information with the other participants to
                        your transactions, including other users from whom you
                        are purchasing the digital asset.
                      </li>
                      <li className='mb-3'>
                        Financial institutions and other companies involved in
                        helping you make payments in connection with
                        transactions
                      </li>
                      <li className='mb-3'>
                        Affiliates that receive referrals from our Website
                      </li>
                      <li className='mb-3'>
                        <p>
                          Other third-parties for our business purposes or as
                          permitted or required by law, including:
                        </p>
                        <ul style={{ paddingLeft: '2rem' }}>
                          <li className='mb-2'>
                            To comply with any legal, regulatory or contractual
                            obligation, or with any legal or regulatory process
                            (such as a valid court order or subpoena);
                          </li>
                          <li className='mb-2'>
                            To establish, exercise, or defend legal claims;
                          </li>
                          <li className='mb-2'>
                            In response to a request by a government agency,
                            such as law enforcement authorities or a judicial
                            order;
                          </li>
                          <li className='mb-2'>
                            To enforce our Website Terms of Service or our
                            internal policies;
                          </li>
                          <li className='mb-2'>
                            To prevent physical harm or financial loss, in
                            connection with an investigation of suspected or
                            actual illegal activity, or to otherwise protect our
                            or others’ rights, property, or safety;
                          </li>
                          <li className='mb-2'>
                            To facilitate a purchase or sale of all or part of
                            Paxful’s business. For example, by sharing data with
                            a company we plan to merge with or be acquired by;
                            or
                          </li>
                          <li className='mb-2'>
                            To support our audit, compliance, and corporate
                            governance functions.
                          </li>
                        </ul>
                      </li>
                    </ol>
                  </div>
                </Col>
                <Col className='mt-4' md={12}>
                  <div>
                    <h3 className='mb-3'>International transfers of data</h3>
                    <p>
                      Please note that we may transfer Personal Data we collect
                      about you to countries other than the country in which the
                      information was originally collected. Those countries may
                      not have the same data protection laws as the country in
                      which you initially provided the information. When we
                      transfer your Personal Data to other countries, we take
                      steps designed to ensure that the transfer is in
                      accordance with applicable law.
                    </p>
                  </div>
                </Col>
              </Row>
              <div className='mt-4'>
                <h3 className='mb-3'>Cookies and online advertising</h3>
                <ol className='my-2'>
                  <li className='mb-3'>
                    A cookie is a small text file that a website saves on your
                    computer or mobile device when you visit the website.
                  </li>
                  <li className='mb-3'>
                    Our Website uses cookies and tracking technologies to
                    operate, and to target advertising that may be of interest
                    to you. For further information, please refer to our Cookie
                    Policy.
                  </li>
                  <li className='mb-3'>
                    Paxful may partner with third-party ad networks to either
                    display advertising on the Paxful Website or on third-party
                    websites. These websites and third-party ad networks are not
                    controlled by Paxful. Ad network partners use data
                    technologies to collect information about your online
                    activities to provide you targeted advertising based upon
                    your interests. If you wish not to have this information
                    used for the purpose of serving you targeted ads, you may be
                    able to opt-out by visiting:
                    <ul style={{ paddingLeft: '2rem' }}>
                      <li className='mb-2'>
                        <a href='#'>http://optout.aboutads.info/</a>
                      </li>
                      <li className='mb-2'>
                        <a href='#'>http://optout.networkadvertising.org/</a>
                      </li>
                    </ul>
                    <p>
                      Please note this does not opt you out from being served
                      advertising; you will continue to receive generic ads that
                      are not based on your specific interests. You can control
                      the use of cookies at the individual browser level. If you
                      reject cookies, you may still use our Website, but your
                      ability to use some features or areas of our Website may
                      be limited.
                    </p>
                  </li>
                </ol>
              </div>
              <div className='mt-4'>
                <h3 className='mb-3'>Data retention</h3>
                <p>
                  We retain Personal Data for the period necessary for the
                  purposes for which it was collected, or for such periods as
                  required by applicable law. This may involve retaining
                  Personal Data for periods following a transaction. We make
                  efforts to delete your Personal Data once it is no longer
                  required for any of the business purposes described above.
                </p>
              </div>
              <div className='mt-4'>
                <h3 className='mb-3'>Data security</h3>
                <p>
                  Paxful has implemented safeguards designed to protect your
                  Personal Data, including measures designed to prevent Personal
                  Data against loss, misuse, and unauthorized access and
                  disclosure. Still, Paxful cannot ensure or warrant the
                  security or confidentiality of information you transmit to us
                  or receive from us by Internet or wireless connection.
                  Transferring data through the Internet always carries some
                  risk, even if Paxful makes efforts to protect data once it has
                  received it.
                </p>
              </div>
              <div className='mt-4'>
                <h3 className='mb-3'>Children under 18 years of age</h3>
                <p>
                  Paxful’s Website is not intended for children under the age of
                  18. We do not knowingly collect data from children under the
                  age of 18 without verified parental consent. If we learn that
                  we have collected information, including Personal Data, from
                  an individual under 18 years of age without parental consent,
                  we will delete that information immediately.
                </p>
              </div>
              <div className='mt-4'>
                <h3 className='mb-3'>Modifications to the privacy notice</h3>
                <p>
                  Paxful reserves the right to change this Notice from time to
                  time. We will notify you of modifications to this Notice by
                  posting a revised version of this Notice here, by email, or by
                  means of a prominent notice on the Paxful Website home page.
                  We recommend that you periodically check the Website for any
                  changes.
                </p>
              </div>
              <div className='mt-4'>
                <h3 className='mb-3'>Contact us</h3>
                <p>
                  If you have any questions about this Notice, or wish to make
                  an inquiry with us regarding Personal Data or privacy, please
                  contact us at: <a href='#'>privacy@paxful.com</a>
                </p>
              </div>
              <div className='mt-4'>
                <h3 className='mb-3'>EEA Addendum</h3>
                <p>
                  The following disclosures apply to, and are intended
                  exclusively for, individuals who reside within the European
                  Economic Area (EEA).
                </p>
              </div>
              <div className='mt-4'>
                <h3 className='mb-3'>Data Controller</h3>
                <p>The controller for your Personal Data is Paxful, Inc.</p>
              </div>
              <div className='mt-4'>
                <h3 className='mb-3'>
                  Legal Bases for Processing Personal Data
                </h3>
                <ol>
                  <li className='mb-2'>
                    To the extent we use Personal Data to perform contractual
                    obligations or requests made by you in connection with a
                    contract, Article 6(1)(b) of the General Data Protection
                    Regulation (“GDPR”) is the legal basis for our data
                    processing.
                  </li>
                  <li className='mb-2'>
                    To the extent we use Personal Data to comply with a legal
                    obligation under EU or Member State law, Article 6(1)(c) of
                    the GDPR is the legal basis for our data processing.
                  </li>
                  <li className='mb-2'>
                    To the extent we use Personal Data to protect the vital
                    interests of individuals, Article 6(1)(d) of the GDPR is the
                    legal basis for our data processing.
                  </li>
                  <li className='mb-2'>
                    To the extent we use Personal Data in pursuit of our
                    legitimate business interests, Article 6(1)(f) of the GDPR
                    is the legal basis for our data processing. A list of our
                    legitimate business interests is in the above section titled
                    “How We Use Your Data”.
                  </li>
                </ol>
              </div>
              <div className='mt-4'>
                <h3 className='mb-3'>European Data Protection Rights</h3>
                <p>
                  European law provides you with certain rights with respect to
                  your Personal Data, including:
                </p>
                <ol className='my-2'>
                  <li className='mb-2'>
                    The right to request access to and rectification of your
                    Personal Data.
                  </li>
                  <li className='mb-2'>
                    The right to request that Paxful delete certain Personal
                    Data relating to you.
                  </li>
                  <li className='mb-2'>
                    The right to data portability, which includes the right to
                    request that certain Personal Data you have provided to us
                    be transferred from us to another data controller.
                  </li>
                  <li className='mb-2'>
                    The right to withdraw any consent you have provided to
                    Paxful to collect, use, or share your data at any time.
                    Please note that withdrawing consent does not affect the
                    lawfulness of Paxful processing your Personal Data before
                    your withdrawal.
                  </li>
                  <li className='mb-2'>
                    The right to object to Paxful’s processing of your Personal
                    Data, based on grounds specific to your particular
                    situation.
                  </li>
                  <li className='mb-2'>
                    The right to request that Paxful restrict the processing of
                    your Personal Data, if certain statutory conditions for
                    restriction are met.
                  </li>
                  <li className='mb-2'>
                    The right to lodge a complaint with a European supervisory
                    authority.
                  </li>
                </ol>
                <p>
                  Please note that applicable law may provide exceptions to any
                  of these rights, permit Paxful to decline your request, or
                  permit Paxful to extend the period in which it can act on your
                  request. Paxful may also contact you to verify your identity,
                  as permitted by law, prior to acting on your request. To
                  exercise any of these rights, please contact us as set forth
                  in the above section titled “Contact Us”.
                </p>
              </div>
              <div className='mt-4'>
                <h3 className='mb-3'>International Transfers</h3>
                <p>
                  We may transfer Personal Data relating to EEA residents to
                  countries that have not been found by the European Commission
                  to provide adequate protection, including the United States.
                  For any such transfers, Paxful implements safeguards designed
                  to ensure that your Personal Data receives an adequate level
                  of protection. If you are located in the EEA, Paxful will only
                  transfer your Personal Data if: the country to which the
                  Personal Data will be transferred has been granted a European
                  Commission adequacy decision; the recipient of the Personal
                  Data is located in the United States and has certified to the
                  US-EU Privacy Shield Framework; Paxful has put in place
                  appropriate safeguards in respect of the transfer, for example
                  by entering into EU Standard Contractual Clauses with the
                  recipient, or; an applicable statutory exception to the GDPR
                  general transfer prohibition applies. To obtain a copy of the
                  mechanisms that Paxful has executed to support its transfers
                  of personal data outside the EEA, contact us as set forth in
                  the above “Contact Us” section.
                </p>
              </div>
              <div className='mt-4'>
                <h3 className='mb-3'>California Addendum</h3>
                <p>
                  The following disclosures apply to, and are intended
                  exclusively for, residents of the State of California.
                </p>
              </div>
              <div className='mt-4'>
                <h3 className='mb-3'>Your California Privacy Rights</h3>
                <p>
                  To the extent that we disclose certain personally identifiable
                  information about you to third parties who use it for their
                  direct marketing purposes, you have a right to request further
                  information about the recipients of your information. To
                  exercise this right, please contact us as described in the
                  above section titled “Contact Us.”
                </p>
              </div>
              <div className='mt-4'>
                <h3 className='mb-3'>Do Not Track Disclosure</h3>
                <p>
                  Our Website is not designed to respond to “Do Not Track”
                  signals or requests.
                </p>
              </div>
            </div>
          </div>
          <TableContent />
        </Col>
      </Row>
    </Container>
  )
}

export default Main
