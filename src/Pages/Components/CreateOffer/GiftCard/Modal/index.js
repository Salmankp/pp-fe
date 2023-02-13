import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import { Modal, Form, Badge, Button } from 'react-bootstrap'
import Dropzone from 'react-dropzone'
import { BsGift } from 'react-icons/bs'
// import tether from '../../../../../assets/images/tether.svg'
import { error, success } from '../../../../../utils/toastr'
import { useDispatch } from 'react-redux'
import { uploadPaymentCardImage } from '../../../../../actions/offer-actions'

const GiftCardModal = ({
  setCardsData,
  formValues,
  openModal,
  setCloseModal,
  editId,
  editedObject
}) => {
  const dispatch = useDispatch();
  const [inputValues, setInputValues] = useState({})
  const [files, setFiles] = useState('')
  let uniqId = 'id' + new Date().getTime();


  const acceptedFilesHandler = async (data) => {
   const res = await dispatch(uploadPaymentCardImage({file: data[0]}));

    setFiles(
      Object.assign(data[0], {
        preview: URL.createObjectURL(data[0]),
      })
    )
    setInputValues({
      ...inputValues,
      image: res?.data,
    })

  }

  const inputChangeHandler = (e) => {
    const { name, value } = e.target
    setInputValues({
      ...inputValues,
      [name]: value,
    })
  }

  const removeFile = () => {
    setFiles('')
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!inputValues?.code || !inputValues?.amount || (formValues.cardType === 'physical' && !inputValues?.image)) {
      return error('Please fill all required fields', 'Message')
    }
    if (editId) {
      const _arr = formValues?.paymentCards?.map(el => {
        if (editId === el?._id) {
          return inputValues
        }
        return el
      })
      success('Card updated successfully')
      setCardsData(_arr)
    } else {
      setCardsData([
        ...formValues?.paymentCards, { ...inputValues, _id: uniqId }
      ])
      success('Card added successfully')
      setInputValues({})
    }
    setInputValues({})
    setFiles('');
    setCloseModal();
  }
  console.log(editedObject);

  useEffect(() => {
    setInputValues(editedObject);
    // editedObject?.image && acceptedFilesHandler([editedObject?.image])
  }, [editedObject])



  return (
    <Modal
      className={styles.pay_modal}
      show={openModal}
      onHide={setCloseModal}
      centered
    >
      <Modal.Header closeButton>Add Best Buy Gift Card for PKR</Modal.Header>
      <Form onSubmit={formSubmitHandler}>
        <Modal.Body>
          <div className='p-4'>
            {formValues?.cardType === 'physical' && <div className='mb-2'>
              <h5 className='my-3'>1. Card Image</h5>
              <p>Make Sure the gift card code is clearlt visible.</p>
              {(!files && !inputValues?.image) ? (
                <div className={`my-2 ${styles.dragWrapper}`}>
                  <Dropzone
                    onDrop={(acceptedFiles) =>
                      acceptedFilesHandler(acceptedFiles)
                    }
                    accept={{ 'image/jpeg': ['.jpeg', '.png'] }}
                  >
                    {({ getRootProps, getInputProps }) => (
                      <section>
                        <div {...getRootProps()}>
                          <input {...getInputProps()} sel />

                          <div className={`${styles.innerItem} p-3`}>
                            <BsGift color='#1fc28f' fontSize={30} />
                            <p className='mt-3'>Choose file or drag it here</p>
                          </div>
                        </div>
                      </section>
                    )}
                  </Dropzone>
                </div>
              ) : (
                <div >
                  <img
                    className={styles.imgPreview}
                    src={files.preview || `${process.env.REACT_APP_API_URL}/${inputValues?.image}`}
                    alt={files.name}
                  />
                  <button
                    className='btn btn-danger'
                    onClick={removeFile}
                    type='button'
                  >
                    Remove File
                  </button>
                </div>
              )}
            </div>}
            <div className='mb-2'>
              <h5 className='my-3'>Card code and value</h5>
              <p>Enter the gift card code and value manually.</p>
              <Form.Group className='mb-3'>
                <Form.Label>Pin</Form.Label>
                <Form.Control
                  onChange={inputChangeHandler}
                  name='code'
                  type='password'
                  placeholder='12345678'
                  value={inputValues?.code}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>
                  Card amount <Badge>PKR</Badge>
                </Form.Label>
                <Form.Control
                  onChange={inputChangeHandler}
                  name='amount'
                  type='number'
                  placeholder='12345678'
                  value={
                    inputValues?.amount
                  }
                />
              </Form.Group>
              {/* <p className='text-danger' style={{ fontSize: '12px' }}>
                Card amount must be greate than or equal to 2,316PKR
              </p> */}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className='justify-content-between'>
          <Button onClick={setCloseModal} variant='danger'>
            Cancel
          </Button>
          {/* <div>
            {!editId && <Form.Check
              type='checkbox'
              id={`addCard`}
              onChange={addCardHandler}
              defaultChecked={addAnotherCard}
              label={
                <span
                  style={{ position: 'relative', top: '4px' }}
                >{`Add another Card`}</span>
              }
            />}
          </div> */}
          <Button type='submit'>{editId ? 'Update Card' : 'Add Card'}</Button>
        </Modal.Footer>
      </Form>
    </Modal >
  )
}

export default GiftCardModal
