import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import TermsAndConditions from '../TermsAndConditions'
import Switch from 'react-switch'
import Select, { components } from 'react-select'
import ReactSelect from '../../Common/ReactSelect'
import CreateOfferModal from '../../Common/createOfferModal'
import { setFormStep3 } from '../../../../actions/offer-actions'
import { useDispatch, useSelector } from 'react-redux'
import TimezoneSelect from 'react-timezone-select'
import {
  countriesList,
  timeFrom,
  timeTo,
  day,
  offerTags,
} from '../../../../common/countries_and_time'

const Settings = () => {
  const dispatch = useDispatch()
  const [swtich, setSwitch] = useState(false)
  const [showModal, setShowModal] = useState(true)
  const [show, setModal] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [changeValue, setChangeValue] = useState(false)
  const [selectedTimezone, setSelectedTimezone] = useState({})
  const stateData = useSelector((state) => state?.userData?.getUser)
  const createOffer = useSelector((state) => state.createOffer)
  const { step3 } = createOffer.formValues

  const offerDetails = useSelector((state) => state.offerDetails)
  const tags = useSelector((state) => state.offerTags?.tags[0])

  const [step3formValues, setStep3formValues] = useState(step3)

  useEffect(() => {
    dispatch(setFormStep3(step3formValues))
  }, [step3formValues])

  const vlaidate = () => {
    // const { offerTags, offerLabel, offerTerms, tradeInstructions } =
    //   step3formValues;
    // if (offerTags && offerLabel && offerTerms && tradeInstructions) {
    //   dispatch(setFormStep3(step3formValues));
    // }
  }

  const selectHandleCallback = (childData) => {
    console.log(childData)
    if (childData.type === 'country') {
      setStep3formValues({
        ...step3formValues,
        advanceOptions: { ...step3formValues?.advanceOptions, offerLocation: childData },
      })
    }
    if (childData.type === 'timeZone') {
      setStep3formValues({
        ...step3formValues,
        advanceOptions: { ...step3formValues?.advanceOptions, timeZone: childData.value }
      })
    }
    if (childData.type === 'Day') {
      setStep3formValues({ ...step3formValues, day: childData.value })
    }
    if (childData.type === 'timeFrom') {
      setStep3formValues({ ...step3formValues, timeFrom: childData.value })
    }
    if (childData.type === 'timeTo') {
      setStep3formValues({ ...step3formValues, timeTo: childData.value })
    }
  }
  const customStyles = {
    control: (base, state) => ({
      ...base,
      height: height ? height : 48,
      minHeight: minHeight ? minHeight : 48,
      backgroundColor: backgroundColor ? backgroundColor : '#F9F9F9',
      border: '1px solid #EDEDED',
      border: border ? border : '1px solid #EDEDED',
      padding: '0px 8px',
      minWidth: minWidth ? minWidth : '120px',
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: '#7B7B7B',
    }),
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        color: placeholderColor ? placeholderColor : '#353535',
      }
    },
  }
  return (
    <div className={styles.wrap}>
      {/* <TermsAndConditions showModal={showModal} setShowModal={setShowModal} /> */}
      <CreateOfferModal show={show} setModal={setModal} />
      <div className={styles.fieldWrap}>
        <div className={styles.field}>
          <p className={styles.heading}>Offer Tags <span className={styles.required}> *</span></p>
          <Select
            value={step3formValues?.offerTags?.map(el => ({
              label: el?.label,
              value: el?.value,
              type: "offerTags",
            }))}
            options={tags?.map(el => ({
              label: el?.name,
              value: el?._id,
              type: "offerTags",
            }))}
            className='react-select'
            classNamePrefix='react-select'
            onChange={(e) => {
              setStep3formValues({
                ...step3formValues,
                offerTags: e.map((item) => item),
              })
            }}
            // options={offerTags}
            placeholder='Select Offer tag or start typing to search for one'
            isMulti={true}
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary25: '#1fc28f87',
                primary: '#1fc28f',
              },
            })}
          />
          <div className={styles.text}>
            Select atleast 3 tags taht describes your offer best{' '}
            <div onClick={() => setModal(true)} className={styles.link}>
              See All
            </div>
          </div>
        </div>
        <div className={styles.field}>
          <p className={styles.heading}>Offer Labels <span className={styles.required}> *</span></p>

          <input
            className={styles.inputTxt}
            type='text'
            placeholder='Maximun 25 Charactera. Only letters, numbers and dashes.'
            onChange={({ target: { value } }) => {
              setStep3formValues({
                ...step3formValues,
                offerLabel: value,
              })
              vlaidate()
            }}
            value={step3formValues?.offerLabel}
          />
          <div className={styles.text}>
            Make your offer stand out to other users with a catchy label. Your
            offer label can be up to 25 characters long and can contain letters,
            numbers, the apostrophe and the hyphen.
          </div>
        </div>
      </div>
      <div className={styles.fieldWrap}>
        <div className={styles.field}>
          <p className={styles.heading}>Offer Terms <span className={styles.required}> *</span></p>

          <textarea
            className={styles.inputTxt}
            type='text'
            placeholder='Write your term here'
            onChange={({ target: { value } }) => {
              setStep3formValues({
                ...step3formValues,
                offerTerms: value,
              })
              vlaidate()
            }}
            value={step3formValues?.offerTerms}
          />
          <div className={styles.text}>
            Anyone who view your offer will see these. keep your offer simple
            and clear to make it more attractive
          </div>
        </div>
        <div className={styles.field}>
          <p className={styles.heading}>Trade Instructions <span className={styles.required}> *</span></p>

          <textarea
            className={styles.inputTxt}
            placeholder='List out your instructions for your trade Partner.'
            onChange={({ target: { value } }) => {
              setStep3formValues({
                ...step3formValues,
                tradeInstructions: value,
              })
              vlaidate()
            }}
            value={step3formValues?.tradeInstructions}
          />
          <div className={styles.text}>
            To ensure a succesful trade be transparent about what you expect
            from your trade partner and list out what you need.
          </div>
        </div>
      </div>
      <div className={styles.fieldWrap}>
        <div className={styles.field}>
          <div className={styles.heading}>Verification</div>
          <div className={styles.verify}>
            <input
              type='checkbox'
              id='id'
              checked={
                step3formValues?.verifiedID
              }
              onChange={(e) => {
                setStep3formValues({
                  ...step3formValues,
                  verifiedID: e.target.checked,
                })
                vlaidate()
              }}
            />
            <label htmlFor='id'>
              Required your trade partner to have verified their ID
            </label>
          </div>
          <div className={styles.verify}>
            <input
              type='checkbox'
              id='fullname'
              checked={step3formValues?.verifiedName}
              onChange={(e) => {
                setStep3formValues({
                  ...step3formValues,
                  verifiedName: e.target.checked,
                })
                vlaidate()
              }}
            />
            <label htmlFor='fullname'>
              Require your trade partner to show their full name
            </label>
          </div>
        </div>
      </div>

      <div className={styles.advance_heading}>Advanced Options</div>

      <div className={styles.fieldWrap}>
        <div className={styles.field}>
          <div className={styles.heading}>Target Country</div>
          <ReactSelect
            options={countriesList}
            value={step3formValues?.advanceOptions?.offerLocation}
            parentCallback={selectHandleCallback}
            placeholder='Select a specific country and the addional traffic will come from this market'
          />

          <div className={styles.text}>
            Anyone who view your offer will see these. keep your offer simple
            and clear to make it more attractive
          </div>
        </div>
        <div className={styles.field}>
          <div className={styles.heading}>Visibility</div>

          <div
            aria-disabled={stateData?.trusted}
            className={`${stateData?.trusted ? styles.verify : styles.isDisabled
              } form-check`}
          >
            <input
              type='checkbox'
              id='users'
              class='form-check-input'
              checked={step3formValues?.trustedUsers}
              onChange={(e) => {
                setStep3formValues({
                  ...step3formValues,
                  trustedUsers: e.target.checked,
                })
                vlaidate()
              }}
            />
            <label class='form-check-label' htmlFor='users'>
              Show this offer only to my list of trusted users
            </label>
          </div>
          <div
            aria-disabled={stateData?.trusted}
            className={`${stateData?.trusted ? styles.verify : styles.isDisabled
              } form-check`}
          >
            <input
              type='checkbox'
              id='currency'
              checked={step3formValues?.currencyMatched}
              class='form-check-input'
              onChange={(e) => {
                setStep3formValues({
                  ...step3formValues,
                  currencyMatched: e.target.checked,
                })
                vlaidate()
              }}
            />
            <label class='form-check-label' htmlFor='currency'>
              Buyers localcurrency should match my offer’s currency
            </label>
          </div>
          <div className={styles.lowerHeading}>
            To require your trade partner to be verified, you must complete ID
            verification. <b> Click Here</b> to begin your verification process.
            It only takes a few minutes!
          </div>
        </div>
      </div>

      <div className={styles.fieldWrap}>
        <div className={styles.field}>
          <div className={styles.heading}>Minimum Trades Required</div>
          <input
            className={styles.inputTxt}
            type='number'
            onChange={(e) => {
              setStep3formValues({
                ...step3formValues,
                advanceOptions: { ...step3formValues?.advanceOptions, pastTradeValue: e.target.value },
              })
              vlaidate()
            }}
            value={step3formValues?.advanceOptions?.pastTradeValue}
            placeholder='Show this offer to the users who have completed atleast'
          />
          <div className={styles.text}>Past Trades</div>
        </div>
        <div className={styles.field}>
          <div className={styles.heading}>Limit for New Users</div>
          <div className={styles.inputwrap}>
            <input
              className={styles.inputTxt}
              type='number'
              onChange={(e) => {
                setStep3formValues({
                  ...step3formValues,
                  advanceOptions: { ...step3formValues?.advanceOptions, limitForNewUser: e.target.value },
                })
                vlaidate()
              }}
              value={step3formValues?.advanceOptions?.limitForNewUser}

              placeholder='New users can only trade up to:'
            />
            <button>PKR</button>
          </div>
        </div>
      </div>

      <div className={styles.fieldWrap}>
        <div className={styles.field}>
          <div className={styles.heading}>Limitation by countries</div>

          <Select
            className='react-select'
            classNamePrefix='react-select'
            onChange={(e) => {
              setStep3formValues({
                ...step3formValues,
                advanceOptions: { ...step3formValues?.advanceOptions, selectedCountriesToBlockOrAllow: e.map((item) => item) }
              })
            }}
            options={countriesList}
            value={step3formValues?.advanceOptions?.selectedCountriesToBlockOrAllow}
            placeholder='Select the country you’d like to show this offer or type manually'
            isMulti={true}
            isDisabled={disabled}
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary25: '#1fc28f87',
                primary: '#1fc28f',
              },
            })}
          />

          <div className={styles.text}></div>
          <div className={styles.radio}>
            <input
              type='radio'
              name='toggler1'
              id='none1'
              checked={step3formValues?.advanceOptions?.blockedNone}
              onChange={(e) => {
                setDisabled(true)
                setStep3formValues({
                  ...step3formValues,
                  advanceOptions: {
                    ...step3formValues?.advanceOptions,
                    blockedNone: true,
                    allowedCountries: false,
                    blockedCountries: false,
                    selectedCountriesToBlockOrAllow: [],
                  }
                })
                vlaidate()
              }}
            />
            <label htmlFor='none1'>
              <div className={styles.circle}></div>None
            </label>
          </div>
          <div className={styles.radio}>
            <input
              type='radio'
              name='toggler2'
              id='block'
              checked={step3formValues?.advanceOptions?.blockedCountries}
              onChange={(e) => {
                setDisabled(false)
                setStep3formValues({
                  ...step3formValues,
                  advanceOptions: {
                    ...step3formValues?.advanceOptions,
                    blockedNone: false,
                    allowedCountries: false,
                    blockedCountries: true,
                  }
                })
                vlaidate()
              }}
            />
            <label htmlFor='block'>
              <div className={styles.circle}></div>Blocked Countries
            </label>
          </div>
          <div className={styles.radio}>
            <input
              type='radio'
              name='toggler3'
              id='allow'
              checked={step3formValues?.advanceOptions?.allowedCountries}
              onChange={(e) => {
                setDisabled(false)
                setStep3formValues({
                  ...step3formValues,
                  advanceOptions: {
                    ...step3formValues?.advanceOptions,
                    blockedNone: false,
                    allowedCountries: true,
                    blockedCountries: false,
                  }
                })
                vlaidate()
              }}
            />
            <label htmlFor='allow'>
              <div className={styles.circle}></div>Allowed Countries
            </label>
          </div>
        </div>
        <div className={styles.field}>
          <div className={styles.heading}>Proxy/Vpn Users</div>
          <div className={styles.radio}>
            <input
              type='radio'
              name='toggler4'
              id='noVpn'
              checked={step3formValues?.advanceOptions?.vpnAllowed}
              onChange={(e) => {
                console.log(e.target.checked)
                setStep3formValues({
                  ...step3formValues,
                  advanceOptions: {
                    ...step3formValues?.advanceOptions,
                    vpnAllowed: e.target.checked,
                    vpnNotAllowed: false
                  }
                })
                vlaidate()
              }}
            />
            <label htmlFor='noVpn'>
              <div className={styles.circle}></div>None
            </label>
          </div>
          <div className={styles.radio}>
            <input
              type='radio'
              name='toggler6'
              id='vpn'
              checked={step3formValues?.advanceOptions?.vpnNotAllowed}
              onChange={(e) => {
                setStep3formValues({
                  ...step3formValues,
                  advanceOptions: {
                    ...step3formValues?.advanceOptions,
                    vpnNotAllowed: e.target.checked,
                    vpnAllowed: false,
                  }
                })
                vlaidate()
              }}
            />
            <label htmlFor='vpn'>
              <div className={styles.circle}></div>
              Don’t allow VPN or any other anonymous users
            </label>
          </div>
        </div>
      </div>

      <div className={styles.fieldWrap}>
        <div className={styles.field}>
          <div className={styles.heading}>Working Hours</div>

          <TimezoneSelect
            className='react-select'
            classNamePrefix='react-select'
            value={step3formValues?.advanceOptions?.timeZone}
            onChange={(e) => {
              setStep3formValues({
                ...step3formValues,
                advanceOptions: {
                  ...step3formValues?.advanceOptions,
                  timeZone: e.value
                }
              })

              // setSelectedTimezone(e.value)
            }}
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary25: '#1fc28f87',
                primary: '#1fc28f',
              },
            })}
          />
          {/* <div className={styles.text}>
            Choose the days of the week and time when you wan this offer to be
            active
          </div> */}
          {/* <div className={styles.switchWrap}>
            <Switch
              onColor='#1FC28F'
              offColor='#A8A8A8'
              uncheckedIcon={false}
              checkedIcon={false}
              width={20}
              height={11}
              handleDiameter={6}
              onChange={() => setSwitch(!swtich)}
              checked={swtich}
            />
            Apply on all offers
          </div> */}

          {/* <div className={styles.selectWrap}>
            <div className={styles.select}>
              <div className={styles.heading}>Day of week</div>
              <ReactSelect
                options={day}
                value={day}
                parentCallback={selectHandleCallback}
                placeholder='Select Day'
              />
            </div>

            <div className={styles.selects}>
              <div className={styles.select}>
                <div className={styles.heading}>From</div>
                <ReactSelect
                  options={timeFrom}
                  value={timeFrom}
                  parentCallback={selectHandleCallback}
                  placeholder='From'
                />
              </div>
              <div className={styles.select}>
                <div className={styles.heading}>To</div>
                <ReactSelect
                  options={timeTo}
                  value={timeTo}
                  parentCallback={selectHandleCallback}
                  placeholder='To'
                />
              </div>
            </div>
          </div> */}
        </div>
        <div className={styles.field}>
          <div className={styles.heading}>Offer Settings for Kiosk</div>
          <div className={styles.content}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <br />
            <p>Allow all Kiosk trades</p>
            <p>No minimum for kiosk trades</p>
            <p>No proxy/VPN restrictions for kiosk trades</p>
            <span className={styles.link}>Change settings</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
