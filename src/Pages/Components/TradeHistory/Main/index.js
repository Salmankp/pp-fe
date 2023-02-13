import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import Sidebar from '../Sidebar'
import PastTrades from '../PastTrades'
import { pageCountAction } from '../../../../actions/trade-actions'
import { useDispatch, useSelector } from 'react-redux'
import { get } from '../../../../utils/ajax'
import { Pagination } from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner'

let render = false

const Main = () => {
  const pageCount = useSelector((state) => state.pageCount)
  const dispatch = useDispatch()
  const [trades, setTrades] = useState()
  const [tradesListing, setTradesListing] = useState()
  const [filters, setApplyFilters] = useState([])
  const { userInfo } = useSelector((state) => state.loggedInUser)
  const {
    success: successTradeFilter,
    loading: loadingTradeFilter,
    filterTradeInfo,
  } = useSelector((state) => state.filterTrade)
  const filterTradeListingData = filterTradeInfo?.data?.data
  const filterDataCount = filterTradeInfo?.data?.count
  const [currentPage, setCurrentPage] = useState(1)
  const userId = userInfo?.data?.user?._id
  const userName = userInfo?.data?.user?.name
  const [count, setCount] = useState(0)
  const getAllTrades = async () => {
    const { data } = await get(
      `${process.env.REACT_APP_API_URL}/api/v1/transection/getOne/${currentPage}`
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
    data.data.data = data.data.data.map((item) => {
      let year = item.created.substring(0, 4)
      let month = item.created.substring(5, 7)
      let date = item.created.substring(8, 10)
      return { ...item, created: `${dateMapping[month]} ${date}, ${year}` }
    })
    setCount(data?.data?.count)
    setTrades(data?.data?.data)
    setTradesListing(data?.data?.data)
  }
  const triggerListingFilter = (type) => {
    console.log('type', type)
    console.log('trades', trades)
    let arr = []
    let _trades = trades

    if (
      type.cryptoCurrencyType.length &&
      !type.buyerId.length &&
      !type.status.length &&
      !type.sellerId.length &&
      !type.created.length &&
      !type.bankName.length
    ) {
      console.log('1')
      _trades = trades.filter((x) => {
        return type.cryptoCurrencyType.includes(x.cryptoCurrencyType)
      })
      setTradesListing(_trades)
    } else if (
      type.cryptoCurrencyType.length &&
      type.buyerId.length &&
      !type.status.length &&
      !type.sellerId.length &&
      !type.created.length &&
      !type.bankName.length
    ) {
      console.log('2')
      _trades = trades.filter((x) => {
        return (
          type.cryptoCurrencyType.includes(x.cryptoCurrencyType) &&
          type.buyerId.includes(x.buyerId)
        )
      })
      setTradesListing(_trades)
    } else if (
      type.cryptoCurrencyType.length &&
      !type.buyerId.length &&
      !type.status.length &&
      type.sellerId.length &&
      !type.created.length &&
      !type.bankName.length
    ) {
      console.log('3')
      _trades = trades.filter((x) => {
        return (
          type.cryptoCurrencyType.includes(x.cryptoCurrencyType) &&
          type.sellerId.includes(x.sellerId)
        )
      })
      setTradesListing(_trades)
    } else if (
      !type.cryptoCurrencyType.length &&
      !type.buyerId.length &&
      !type.status.length &&
      type.sellerId.length &&
      !type.created.length &&
      !type.bankName.length
    ) {
      console.log('4')
      _trades = trades.filter((x) => {
        return type.sellerId.includes(x.sellerId)
      })
      setTradesListing(_trades)
    } else if (
      !type.cryptoCurrencyType.length &&
      type.buyerId.length &&
      !type.status.length &&
      !type.sellerId.length &&
      !type.created.length &&
      !type.bankName.length
    ) {
      console.log('5')
      _trades = trades.filter((x) => {
        return type.buyerId.includes(x.buyerId)
      })
      setTradesListing(_trades)
    } else if (
      type.cryptoCurrencyType.length &&
      type.buyerId.length &&
      type.status.length &&
      !type.sellerId.length &&
      !type.created.length &&
      !type.bankName.length
    ) {
      console.log('6')
      _trades = trades.filter((x) => {
        return (
          type.cryptoCurrencyType.includes(x.cryptoCurrencyType) &&
          type.buyerId.includes(x.buyerId) &&
          type.status.includes(x.status)
        )
      })
      setTradesListing(_trades)
    } else if (
      type.cryptoCurrencyType.length &&
      !type.buyerId.length &&
      type.status.length &&
      type.sellerId.length &&
      !type.created.length &&
      !type.bankName.length
    ) {
      console.log('7')
      _trades = trades.filter((x) => {
        return (
          type.cryptoCurrencyType.includes(x.cryptoCurrencyType) &&
          type.sellerId.includes(x.sellerId) &&
          type.status.includes(x.status)
        )
      })
      setTradesListing(_trades)
    } else if (
      type.cryptoCurrencyType.length &&
      !type.buyerId.length &&
      type.status.length &&
      !type.sellerId.length &&
      !type.created.length &&
      !type.bankName.length
    ) {
      console.log('8')
      _trades = trades.filter((x) => {
        return (
          type.cryptoCurrencyType.includes(x.cryptoCurrencyType) &&
          type.status.includes(x.status)
        )
      })
      setTradesListing(_trades)
    } else if (
      !type.cryptoCurrencyType.length &&
      !type.buyerId.length &&
      type.status.length &&
      !type.sellerId.length &&
      !type.created.length &&
      !type.bankName.length
    ) {
      console.log('9')
      _trades = trades.filter((x) => {
        return type.status.includes(x.status)
      })
      setTradesListing(_trades)
    } else if (
      !type.cryptoCurrencyType.length &&
      type.buyerId.length &&
      type.status.length &&
      !type.sellerId.length &&
      !type.created.length &&
      !type.bankName.length
    ) {
      console.log('10')
      _trades = trades.filter((x) => {
        return (
          type.buyerId.includes(x.buyerId) && type.status.includes(x.status)
        )
      })
      setTradesListing(_trades)
    } else if (
      !type.cryptoCurrencyType.length &&
      !type.buyerId.length &&
      type.status.length &&
      type.sellerId.length &&
      !type.created.length &&
      !type.bankName.length
    ) {
      console.log('11')
      _trades = trades.filter((x) => {
        return (
          type.sellerId.includes(x.sellerId) && type.status.includes(x.status)
        )
      })
      setTradesListing(_trades)
    } else if (
      !type.cryptoCurrencyType.length &&
      !type.buyerId.length &&
      !type.status.length &&
      !type.sellerId.length &&
      type.created.length &&
      !type.bankName.length
    ) {
      console.log('12')
      _trades = trades.filter((x) => {
        return (
          type.created[0][0].startDate.includes(x.created) &&
          type.created[0][0].endDate.includes(x.created)
        )
      })
      setTradesListing(_trades)
    } else if (
      !type.cryptoCurrencyType.length &&
      !type.buyerId.length &&
      !type.status.length &&
      !type.sellerId.length &&
      !type.created.length &&
      type.bankName.length
    ) {
      console.log('13')
      _trades = trades.filter((x) => {
        return type.bankName.includes(x.bankName)
      })
      setTradesListing(_trades)
    } else if (
      type.cryptoCurrencyType.length &&
      !type.buyerId.length &&
      !type.status.length &&
      !type.sellerId.length &&
      !type.created.length &&
      type.bankName.length
    ) {
      console.log('14')
      _trades = trades.filter((x) => {
        return (
          type.cryptoCurrencyType.includes(x.cryptoCurrencyType) &&
          type.bankName.includes(x.bankName)
        )
      })
      setTradesListing(_trades)
    } else if (
      type.cryptoCurrencyType.length &&
      type.buyerId.length &&
      !type.status.length &&
      !type.sellerId.length &&
      !type.created.length &&
      type.bankName.length
    ) {
      console.log('15')
      _trades = trades.filter((x) => {
        return (
          type.cryptoCurrencyType.includes(x.cryptoCurrencyType) &&
          type.buyerId.includes(x.buyerId) &&
          type.bankName.includes(x.bankName)
        )
      })
      setTradesListing(_trades)
    } else if (
      type.cryptoCurrencyType.length &&
      !type.buyerId.length &&
      !type.status.length &&
      type.sellerId.length &&
      !type.created.length &&
      type.bankName.length
    ) {
      console.log('16')
      _trades = trades.filter((x) => {
        return (
          type.cryptoCurrencyType.includes(x.cryptoCurrencyType) &&
          type.sellerId.includes(x.sellerId) &&
          type.bankName.includes(x.bankName)
        )
      })
      setTradesListing(_trades)
    } else if (
      type.cryptoCurrencyType.length &&
      type.buyerId.length &&
      type.status.length &&
      !type.sellerId.length &&
      !type.created.length &&
      type.bankName.length
    ) {
      console.log('17')
      _trades = trades.filter((x) => {
        return (
          type.cryptoCurrencyType.includes(x.cryptoCurrencyType) &&
          type.buyerId.includes(x.buyerId) &&
          type.status.includes(x.status) &&
          type.bankName.includes(x.bankName)
        )
      })
      setTradesListing(_trades)
    } else if (
      type.cryptoCurrencyType.length &&
      !type.buyerId.length &&
      type.status.length &&
      !type.sellerId.length &&
      !type.created.length &&
      type.bankName.length
    ) {
      console.log('18')
      _trades = trades.filter((x) => {
        return (
          type.cryptoCurrencyType.includes(x.cryptoCurrencyType) &&
          type.status.includes(x.status) &&
          type.bankName.includes(x.bankName)
        )
      })
      setTradesListing(_trades)
    } else if (
      !type.cryptoCurrencyType.length &&
      type.buyerId.length &&
      type.status.length &&
      !type.sellerId.length &&
      !type.created.length &&
      type.bankName.length
    ) {
      console.log('19')
      _trades = trades.filter((x) => {
        return (
          type.buyerId.includes(x.buyerId) &&
          type.status.includes(x.status) &&
          type.bankName.includes(x.bankName)
        )
      })
      setTradesListing(_trades)
    } else if (
      !type.cryptoCurrencyType.length &&
      !type.buyerId.length &&
      type.status.length &&
      type.sellerId.length &&
      !type.created.length &&
      type.bankName.length
    ) {
      console.log('20')
      _trades = trades.filter((x) => {
        return (
          type.cryptoCurrencyType.includes(x.cryptoCurrencyType) &&
          type.sellerId.includes(x.sellerId) &&
          type.status.includes(x.status) &&
          type.bankName.includes(x.bankName)
        )
      })
      setTradesListing(_trades)
    } else if (
      type.cryptoCurrencyType.length &&
      !type.buyerId.length &&
      !type.status.length &&
      type.sellerId.length &&
      !type.created.length &&
      type.bankName.length
    ) {
      console.log('21')
      _trades = trades.filter((x) => {
        return (
          type.cryptoCurrencyType.includes(x.cryptoCurrencyType) &&
          type.sellerId.includes(x.sellerId) &&
          type.bankName.includes(x.bankName)
        )
      })
      setTradesListing(_trades)
    } else if (
      !type.cryptoCurrencyType.length &&
      !type.buyerId.length &&
      type.status.length &&
      !type.sellerId.length &&
      !type.created.length &&
      type.bankName.length
    ) {
      console.log('22')
      _trades = trades.filter((x) => {
        return (
          type.status.includes(x.status) && type.bankName.includes(x.bankName)
        )
      })
      setTradesListing(_trades)
    } else if (
      !type.cryptoCurrencyType.length &&
      type.buyerId.length &&
      type.status.length &&
      !type.sellerId.length &&
      !type.created.length &&
      type.bankName.length
    ) {
      console.log('23')
      _trades = trades.filter((x) => {
        return (
          type.buyerId.includes(x.buyerId) && type.bankName.includes(x.bankName)
        )
      })
      setTradesListing(_trades)
    } else if (
      !type.cryptoCurrencyType.length &&
      !type.buyerId.length &&
      type.status.length &&
      type.sellerId.length &&
      !type.created.length &&
      type.bankName.length
    ) {
      console.log('24')
      _trades = trades.filter((x) => {
        return (
          type.sellerId.includes(x.sellerId) &&
          type.bankName.includes(x.bankName)
        )
      })
      setTradesListing(_trades)
    } else if (
      type.cryptoCurrencyType.length &&
      type.buyerId.length &&
      type.status.length &&
      type.sellerId.length &&
      type.created.length &&
      type.bankName.length
    ) {
      console.log('25')
      _trades = trades.filter((x) => {
        return (
          type.cryptoCurrencyType.includes(x.cryptoCurrencyType) &&
          type.buyerId.includes(x.buyerId) &&
          type.status.includes(x.status) &&
          type.created[0][0].startDate.includes(x.created) &&
          type.created[0][0].endDate.includes(x.created) &&
          type.sellerId.includes(x.sellerId) &&
          type.bankName.includes(x.bankName)
        )
      })
      setTradesListing(_trades)
    } else {
      setTradesListing(_trades)
    }
  }
  //   const triggerListingFilter = (type) => {
  //     const _trades = [...trades];
  //     let arr = [];
  //     for (const iterator in type) {
  //       // If array
  //       console.log('hadi');
  //       type[iterator].forEach((item) => {
  //         const anyFilter = _trades.includes(iterator);
  //         if (!anyFilter) {
  //           if(arr.length === 0){
  //             let data = _trades.filter((x) => x[iterator] == type[iterator]);
  //             arr = [...arr, ...data];
  //             console.log('data ',data);
  //           }else{
  //             let data = arr.filter((x) => x[iterator] == type[iterator]);
  //             arr = [...arr, ...data];
  //             console.log('data else',data);
  //           }

  //         } else {
  //           let idx = arr.indexOf(item);
  //           arr.splice(idx, 1);
  //         }
  //       });
  //     }
  //     console.log("arr", arr);
  //     setTradesListing(arr);
  //   };
  //   const triggerListingFilter = (type) => {
  //     let myFilters = [...filters];
  //     const anyFilters = myFilters.includes(type);
  //     if (!anyFilters) myFilters.push(type);
  //     else {
  //       let idx = myFilters.indexOf(type);
  //       myFilters.splice(idx, 1);
  //     }
  //     console.log('myF',myFilters);
  //     setApplyFilters(myFilters);
  //       const _trades = [...trades];
  //       let arr = [];
  //       if(myFilters.length > 0){
  //         myFilters.forEach((item) =>{
  //             let data = _trades.filter(i => i.cryptoCurrencyType.toLowerCase() === item);
  //             console.log('data',data);
  //             arr = [...arr, ...data];
  //           })
  //           setTradesListing(arr);
  //       }else{
  //           setTradesListing(trades);
  //       }
  //   };
  const onClearFilters = () => {
    setApplyFilters([])
    setTradesListing(trades)
  }
  useEffect(() => {
    // if (!filterTradeListingData) {
    //   getAllTrades()
    // }
    dispatch(pageCountAction(currentPage))
  }, [currentPage, filterTradeListingData, dispatch])

  return (
    <div className={`${'container'} ${'layout'}`}>
      <div className={styles.wrap}>
        <h1 className={styles.heading}>Trade History</h1>
        <div className={styles.outer}>
          <Sidebar
            triggerListingFilter={triggerListingFilter}
            onClearFilters={onClearFilters}
            userId={userId}
          />
          {loadingTradeFilter ? (
            <div className='d-flex justify-content-center w-100'>
              <Spinner animation='border' role='status' size='lg'>
                <span className='visually-hidden'>Loading...</span>
              </Spinner>
            </div>
          ) : filterTradeListingData ? (
            <PastTrades
              trades={filterTradeListingData}
              userId={userId}
              userName={userName}
              count={filterDataCount}
              currentPage={Number(pageCount?.tradePageCount)}
              setCurrentPage={setCurrentPage}
              limit={10}
            />
          ) : (
            <PastTrades
              trades={tradesListing}
              userId={userId}
              userName={userName}
              count={count}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              limit={10}
            />
          )}
        </div>
      </div>
    </div>
  )
}
export default Main
