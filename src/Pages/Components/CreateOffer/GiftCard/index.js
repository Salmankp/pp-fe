import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import styles from './style.module.scss'
import { BsPlus } from 'react-icons/bs'
import GiftCardModal from './Modal'
import MetaInfo from './MetaInfo'
const GiftCard = ({ formValues, handleChange, offerId }) => {
  const [showGiftCardModal, setShowGiftCardModal] = useState(false)
  const [cardsData, setCardsData] = useState([])
  const [editId, setEditId] = useState('')
  const [editedObject, setEditedObject] = useState({})

  const addCardHandler = () => {
    setEditId('')
    setEditedObject({})
    setShowGiftCardModal(true)
  }

  const setCloseModal = () => {
    setShowGiftCardModal(false);
    setEditId('')
    setEditedObject({})
  }


  return (
    <div className={styles.giftCardWrap}>
      <div className={styles.sale_buy}>
        <div className={styles.sheading}>Preferred trade experience</div>
        <div className={styles.mainWrap}>
          <div className={styles.sbwrap}>
            <input
              type='radio'
              name='tradExperience'
              onChange={(e) => handleChange(e.target.name, e.target.checked && 'classic')}
              id='classicTrade'
              checked={formValues?.tradExperience === 'classic'}
              disabled={offerId || formValues?.paymentCards?.length > 0}

            />
            <label htmlFor='classicTrade'>
              <div className={styles.circle}></div>
              <div>
                <span>Classic Trade</span>
                Interact with you customer in real time.The classic peer-to-peer
                experience.You are required to be present during the trade.
              </div>
            </label>
          </div>
          <div className={styles.sbwrap}>
            <input
              type='radio'
              name='tradExperience'
              id='automatedTrade'
              onChange={(e) => handleChange(e.target.name, e.target.checked && 'automatic')}
              checked={formValues?.tradExperience === 'automatic'}
              disabled={offerId || formValues?.paymentCards?.length > 0}
            />
            <label htmlFor='automatedTrade'>
              <div className={styles.circle}></div>
              <div>
                <span>Automated Trade</span>
                We do the work for you! simply provide the gift cards, and we
                will take it from there. you will be notified as easch gift card
                sells. Relax and earn
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className={styles.sale_buy}>
        <div className={styles.sheading}>Gift Cards</div>
        <p>Select Card type</p>
        <div className={styles.mainWrap}>
          <div className={styles.sbwrap}>
            <input
              type='radio'
              name='cardType'
              onChange={(e) => handleChange(e.target.name, e.target.checked && 'physical')}
              checked={formValues?.cardType === 'physical'}
              id='physicalCard'
              disabled={offerId || formValues?.tradExperience === 'classic' || formValues?.paymentCards?.length > 0}
            />
            <label htmlFor='physicalCard'>
              <div className={styles.circle}></div>
              <div>
                <span>Physical Card</span>
                Add photo, code and value
              </div>
            </label>
          </div>
          <div className={styles.sbwrap}>
            <input
              type='radio'
              name='cardType'
              id='codeOnly'
              onChange={(e) => handleChange(e.target.name, e.target.checked && 'ecard')}
              checked={formValues?.cardType === 'ecard'}
              disabled={offerId || formValues?.tradExperience === 'classic' || formValues?.paymentCards?.length > 0}
            />
            <label htmlFor='codeOnly'>
              <div className={styles.circle}></div>
              <div>
                <span>E-card / code only</span>
                Add code and value
              </div>
            </label>
          </div>
        </div>
      </div>
      <div>
        <div className='mt-5 d-flex justify-content-center align-items-center gap-5 flex-wrap mb-3'>
          <Button onClick={addCardHandler} variant='success'
            disabled={formValues?.tradExperience === 'classic'}
          >
            Add New <BsPlus size={25} />
          </Button>
          <button className='btn btn-outline-success'
            disabled={true}
          >
            Add Existing <BsPlus size={25} />
          </button>
        </div>
        <p className='text-center'>Add Best Buy Gift Card for PKR</p>
        <div>
          <GiftCardModal
            addCardHandler={addCardHandler}



            setCardsData={(e) => handleChange('paymentCards', e)}
            openModal={showGiftCardModal}
            setCloseModal={setCloseModal}
            editId={editId}
            editedObject={editedObject}
            setEditedObject={setEditedObject}
            setEditId={setEditId}
            formValues={formValues}


          />
        </div>
      </div>
      {formValues?.paymentCards?.map((card, index) => (
        <MetaInfo
          key={index}
          data={card}
          cardsData={formValues?.paymentCards}
          setCardsData={(e) => handleChange('paymentCards', e)}
          setShowGiftCardModal={setShowGiftCardModal}
          setEditId={setEditId}
          setEditedObject={setEditedObject}
          formValues={formValues}
        />
      ))}
    </div>
  )
}

export default GiftCard
