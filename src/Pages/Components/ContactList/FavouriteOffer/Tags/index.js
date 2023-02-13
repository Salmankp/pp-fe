import React from 'react'
import styles from '../styles.module.scss'

const Tags = ({ offerTags }) => {
  return (
    <div className={styles.tagsWrapper}>
      {offerTags && offerTags.map((item,index)=> (
        
          <div key={index}
          className={styles.tagItem} 
        >
          {item}
        </div>
      ))}
     
    </div>
  )
}

export default Tags
