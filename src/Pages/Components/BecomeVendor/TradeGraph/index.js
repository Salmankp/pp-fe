import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Graph from '../../Common/Graph';
import { useDispatch } from 'react-redux';
import { getLastWeekTrade } from '../../../../actions/trade-actions';
import moment from 'moment';
import { formatNumber } from '../../../../utils/helper';
const TradeGraph = () => {
    const dispatch = useDispatch()
    const [tab, setTab] = useState('USDT');
    const [data, setData] = useState({dates:[], amounts: []});


    useEffect(() => {
        (async () => {
           const res = await dispatch(getLastWeekTrade({currency: tab}));
           const dates = []
           const amounts = res?.docs?.map(item => {
               dates.push(moment(item?.created).format('DD-MMM-YYYY'))
               return item?.amount?.toFixed(12)
            //    return formatNumber(item?.amount)
           })
           setData({amounts, dates});
        })()
    }, [tab])


    return (
        <div className='container'>
            <div className={styles.wrap}>
                <h1 className={styles.heading}>Weekly trade Volume</h1>
                <div className={styles.tabs}>
                    <div
                        className={`${styles.tab} ${tab === 'USDT' && styles.active}`}
                        onClick={() => setTab('USDT')}
                    >
                        Tether
                    </div>
                    <div
                        className={`${styles.tab} ${tab === 'ETH' && styles.active
                            }`}
                        onClick={() => setTab('ETH')}
                    >
                        Ethereum
                    </div>
                    <div
                        className={`${styles.tab} ${tab === 'BTC' && styles.active}`}
                        onClick={() => setTab('BTC')}
                    >
                        Bitcoin
                    </div>

                </div>
                <Graph data={data} currency={tab} />
            </div>
        </div>
    )
}

export default TradeGraph
