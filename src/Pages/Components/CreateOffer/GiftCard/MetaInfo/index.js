import React from 'react'
import { Badge, Alert } from 'react-bootstrap'
import { BsPencil } from 'react-icons/bs'
import { AiOutlineDelete } from 'react-icons/ai'
import { success } from '../../../../../utils/toastr'

const MetaInfo = ({
  setShowGiftCardModal,
  data,
  cardsData,
  setCardsData,
  setEditId,
  setEditedObject,
  formValues
}) => {
  const cardDeleteHandler = (id) => {
    let filteredArray = cardsData?.filter((item) => item._id !== id)
    setCardsData(filteredArray)
    success('deleted successfully')
  }
  const editCardHandler = (id) => {
    setShowGiftCardModal(true)
    setEditId(id)
    const specificItem = cardsData?.find((item) => item._id === id)
    setEditedObject(specificItem)
  }
  return (
    <Alert
      variant='info'
      className='mt-2 d-flex justify-content-between align-items-center flex-wrap gap-2'
    >
      <div className='d-flex align-items-center gap-2'>
        <Badge>{formValues?.cardType}</Badge>
        <div className='d-flex align-items-center gap-2'>
          <span>
            {data?.code?.length > 3
              ? `*******${data?.code?.slice(
                  data?.code?.length - 3,
                  data?.code?.length
                )}`
              : data?.code?.length}
          </span>
          <b>{formValues?.onlineWallet?.label}</b>
        </div>
      </div>
      <div className='d-flex align-items-center gap-3'>
        <div>
          <p>
            <b>{data?.amount} PKR</b>
          </p>
          <p>Not used</p>
        </div>
        <div className='d-flex align-items-center gap-3'>
          <span onClick={() => editCardHandler(data?._id)} role='button'>
            <BsPencil fontSize={18} />
          </span>
          <span role='button' onClick={() => cardDeleteHandler(data?._id)}>
            <AiOutlineDelete fontSize={18} />
          </span>
        </div>
      </div>
    </Alert>
  )
}

export default MetaInfo
