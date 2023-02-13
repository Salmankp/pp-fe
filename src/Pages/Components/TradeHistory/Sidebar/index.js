import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import Accordion from 'react-bootstrap/Accordion'
import { DateRangePicker } from 'react-date-range'
import { addDays, parse } from 'date-fns'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { filterTradeAction } from '../../../../actions/trade-actions'
import { useSelector } from 'react-redux'
import { pageCountAction } from '../../../../actions/trade-actions'

const Sidebar = (props) => {
  const pageCount = useSelector((state) => state.pageCount)
  const dispatch = useDispatch()
  const [state, setState] = useState(
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  )

  let dateMapping = {
    '01': 'Jan',
    '02': 'Feb',
    '03': 'Mar',
    '04': 'April',
    '05': 'May',
    '06': 'Jun',
    '07': 'Jul',
    '08': 'Aug',
    '09': 'Sept',
    10: 'Oct',
    11: 'Nov',
    12: 'Dec',
  }
  // let date = state.map((item) => {
  //   let year = moment(item.startDate).format('YYYY')
  //   let month = moment(item.startDate).format('MM')
  //   let date = moment(item.startDate).format('DD')
  //   let eyear = moment(item.endDate).format('YYYY')
  //   let emonth = moment(item.endDate).format('MM')
  //   let edate = moment(item.endDate).format('DD')
  //   return {
  //     startDate: `${dateMapping[month]} ${date}, ${year}`,
  //     endDate: `${dateMapping[emonth]} ${edate}, ${eyear}`,
  //   }
  // })

  const [parsedData, setParsedData] = useState({
    cryptoCurrencyType: [],
    tradingType: [],
    tradingStatus: [],
    dateRange: { startDate: moment(state?.startDate).format('yyyy-MM-DDT00:00:00.00+00:00'), endDate: moment(state?.endDate).format('yyyy-MM-DDT00:00:00.00+00:00') },
    paymentMethod: [],
  })
  const [show, setShow] = useState(true)
  const onChangeListing = (data, type) => {
    let dummy = { ...parsedData }
    const anyFilters = parsedData[type].includes(data)
    if (!anyFilters) {
      dummy[type].push(data)
    } else {
      let idx = dummy[type].indexOf(data)
      dummy[type].splice(idx, 1)
    }
    setParsedData(dummy)
  }
  const viewAll = () => {
    const filters = {
      ...parsedData, dateRange: { startDate: moment(state?.startDate).format('yyyy-MM-DDT00:00:00.00+00:00'), endDate: moment(state?.endDate).format('yyyy-MM-DDT00:00:00.00+00:00') },
    }
    // props.triggerListingFilter(parsedData)
    dispatch(pageCountAction(1))
    dispatch(filterTradeAction({ page: 1, filters }))
  }
  const clearFilters = () => {
    // document
    //   .querySelectorAll('input[type=checkbox]')
    //   .forEach((el) => (el.checked = false))
    // props.onClearFilters()
    setParsedData({})
  }

  useEffect(() => {
    dispatch(
      filterTradeAction({
        page: pageCount?.tradePageCount,
        filters: parsedData,
      })
    )
  }, [dispatch, pageCount?.tradePageCount])

  return (
    <div className={styles.leftBar}>
      <div className={styles.field}>
        <div className={styles.mgBottom}>
          <Accordion defaultActiveKey='0'>
            <Accordion.Item eventKey='0'>
              <Accordion.Header>Cryptocurrency</Accordion.Header>
              <Accordion.Body>
                <div className={styles.checkboxouter}>
                  <div className={styles.checkboxContainer}>
                    <input
                      className={styles.checkbox}
                      type='checkbox'
                      onChange={(e) =>
                        onChangeListing('bitcoin', 'cryptoCurrencyType')
                      }
                    />
                    <span className={styles.checkboxTxt}>Bitcoin</span>
                  </div>
                  <div className={styles.checkboxContainer}>
                    <input
                      className={styles.checkbox}
                      type='checkbox'
                      onChange={(e) =>
                        onChangeListing('USDT', 'cryptoCurrencyType')
                      }
                    />
                    <span className={styles.checkboxTxt}>Tether</span>
                  </div>
                  <div className={styles.checkboxContainer}>
                    <input
                      className={styles.checkbox}
                      type='checkbox'
                      onChange={(e) =>
                        onChangeListing('ethereum', 'cryptoCurrencyType')
                      }
                    />
                    <span className={styles.checkboxTxt}>Ethereum</span>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className={styles.mgBottom}>
          <Accordion defaultActiveKey='1'>
            <Accordion.Item eventKey='1'>
              <Accordion.Header>Trade Type</Accordion.Header>
              <Accordion.Body>
                <div className={styles.checkboxouter}>
                  <div className={styles.checkboxContainer}>
                    <input
                      className={styles.checkbox}
                      type='checkbox'
                      onChange={(e) => onChangeListing('buy', 'tradingType')}
                    />
                    <span className={styles.checkboxTxt}>Buy</span>
                  </div>
                  <div className={styles.checkboxContainer}>
                    <input
                      className={styles.checkbox}
                      type='checkbox'
                      onChange={(e) => onChangeListing('sell', 'tradingType')}
                    />
                    <span className={styles.checkboxTxt}>Sell</span>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className={styles.mgBottom}>
          <Accordion defaultActiveKey='2'>
            <Accordion.Item eventKey='2'>
              <Accordion.Header>Trade Outcome</Accordion.Header>
              <Accordion.Body>
                <div className={styles.checkboxouter}>
                  <div className={styles.checkboxContainer}>
                    <input
                      className={styles.checkbox}
                      type='checkbox'
                      onChange={(e) =>
                        onChangeListing('dateRange', 'tradingStatus')
                      }
                    />
                    <span className={styles.checkboxTxt}>Created</span>
                  </div>

                  <div className={styles.checkboxContainer}>
                    <input
                      className={styles.checkbox}
                      type='checkbox'
                      onChange={(e) =>
                        onChangeListing('pending', 'tradingStatus')
                      }
                    />
                    <span className={styles.checkboxTxt}>pending</span>
                  </div>
                  <div className={styles.checkboxContainer}>
                    <input
                      className={styles.checkbox}
                      type='checkbox'
                      onChange={(e) =>
                        onChangeListing('completed', 'tradingStatus')
                      }
                    />
                    <span className={styles.checkboxTxt}>Completed </span>
                  </div>
                  <div className={styles.checkboxContainer}>
                    <input
                      className={styles.checkbox}
                      type='checkbox'
                      onChange={(e) =>
                        onChangeListing('dispute', 'tradingStatus')
                      }
                    />
                    <span className={styles.checkboxTxt}>Dispute </span>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className={styles.mgBottom}>
          <div
            // onClick={() => setShow(!show)}
            className={styles.selectTxt}>
            Selec Date Range
          </div>
          {show && (
            <div className={styles.calenderOuter}>
              <DateRangePicker
                onChange={(item) => setState(item.selection)}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                months={2}
                ranges={[state]}
                direction='horizontal'
              />
            </div>
          )}
        </div>
        <div className={styles.mgBottom}>
          <Accordion defaultActiveKey='2'>
            <Accordion.Item eventKey='2'>
              <Accordion.Header>Payment Method </Accordion.Header>
              <Accordion.Body>
                <div className={styles.checkboxouter}>
                  <div className={styles.checkboxContainer}>
                    <input
                      className={styles.checkbox}
                      type='checkbox'
                      onChange={(e) =>
                        onChangeListing('jazzcash', 'paymentMethod')
                      }
                    />
                    <span className={styles.checkboxTxt}>JazzCash </span>
                  </div>
                  <div className={styles.checkboxContainer}>
                    <input
                      className={styles.checkbox}
                      type='checkbox'
                      onChange={(e) =>
                        onChangeListing('Faster Payments', 'paymentMethod')
                      }
                    />
                    <span className={styles.checkboxTxt}>Faster Payments</span>
                  </div>
                  <div className={styles.checkboxContainer}>
                    <input
                      className={styles.checkbox}
                      type='checkbox'
                      onChange={(e) =>
                        onChangeListing('Cash App', 'paymentMethod')
                      }
                    />
                    <span className={styles.checkboxTxt}>Cash App</span>
                  </div>
                  <div className={styles.checkboxContainer}>
                    <input
                      className={styles.checkbox}
                      type='checkbox'
                      onChange={(e) => onChangeListing('ePay', 'paymentMethod')}
                    />
                    <span className={styles.checkboxTxt}>ePay </span>
                  </div>
                  <div className={styles.checkboxContainer}>
                    <input
                      className={styles.checkbox}
                      type='checkbox'
                      onChange={(e) =>
                        onChangeListing('Easypaisa', 'paymentMethod')
                      }
                    />
                    <span className={styles.checkboxTxt}>Easypaisa</span>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        {/* <button className={styles.viewBtn} type='button'>Apply</button> */}
        <button className={styles.viewBtn} type='button' onClick={viewAll}>
          Apply
        </button>
        <button className={styles.blueBtn} type='button' onClick={clearFilters}>
          Clear All
        </button>
      </div>
    </div>
  )
}
export default Sidebar
