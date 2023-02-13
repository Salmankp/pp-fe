import React from 'react'
import styles from '../styles.module.scss'

const FixedPriceMarket = ({value, onChange}) => {
  return (
    <>
      <div className={styles.offer_margin_limit}>
        <div className={styles.heading}>
          Fixed price market rate your offer will list at
        </div>

        <div className={styles.field_btn}>
          <div className={styles.fieldWrap}>
            <div className={styles.field}>
              <button onClick={()=> onChange(value >= 0 ? value+1 : 0 ) }>+</button>
              <input type='number' value={value} onChange={onChange} />
              <button onClick={()=>value && value >= 1 && onChange(value-1) }>-</button>
            </div>
            <button>PKR</button>
          </div>
        </div>
      </div>
      <div className='mt-4'>
        <p>
          Current Bitcoin market price:{' '}
          <b className='text-danger'>4,453,187.63 PKR</b>
        </p>
        <p>
          Your price is:
          <b className='text-danger'> 1.00% below </b> the market price
        </p>
        <p>
          You will get:
          <b className='text-danger'> 44,508.87 PKR below </b> the market price
          for every Bitcoin you sell
        </p>
        <p>
          So for every
          <b> 2,262.00 PKR </b> worth of <b>Bitcoin</b> you sell (your minimum
          trade limit), you will receive an <b>2,239.38 PKR</b> in return.
        </p>
      </div>
    </>
  )
}

export default FixedPriceMarket
