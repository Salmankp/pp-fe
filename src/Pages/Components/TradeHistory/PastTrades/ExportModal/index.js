import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { DateRangePicker } from 'react-date-range'
import { addDays, setDate } from 'date-fns'
import Classes from './styles.module.scss'
import { AiFillInfoCircle } from 'react-icons/ai'
import moment from 'moment'
import { filterTradeAction } from '../../../../../actions/trade-actions'
import { useDispatch } from 'react-redux'
import { Bars } from 'react-loader-spinner'

const ExportModal = ({ showModal, setShowModal, handleDownloads, trades, first, last, tradesData }) => {
  const dispatch = useDispatch();
  const [showDateRangePicket, setShowDateRangePicket] = React.useState(false)
  const [loading, setLoading] = useState(false)
  const [formatType, setFormatType] = useState('')
  const [data, setData] = useState(tradesData)
  const [state, setState] = React.useState(
    {
      startDate: trades && trades > 0 ? new Date(first) : new Date(),
      endDate: trades && trades > 0 ? new Date(last) : addDays(new Date(), 7),
      key: 'selection',
    },
  )

  const changeHandler = (e) => {
    setFormatType(e.target.id)
  }

  const handleDateChange = async (e) => {
    setLoading(true)
    setState(e.selection);
    const filters = {
      dateRange: { startDate: moment(e?.selection?.startDate).format('yyyy-MM-DDT00:00:00.00+00:00'), endDate: moment(e?.selection?.endDate).format('yyyy-MM-DDT00:00:00.00+00:00') },
    }
    const res = await dispatch(filterTradeAction({ page: undefined, filters }));
    setData(res)
    setLoading(false)

  }

  return (
    <Modal
      size='lg'
      show={showModal}
      onHide={() => {
        setFormatType('')
        setShowModal(false)
        setData([])
        setState( {
          startDate: trades && trades > 0 ? new Date(first) : new Date(),
          endDate: trades && trades > 0 ? new Date(last) : addDays(new Date(), 7),
          key: 'selection',
        })
      }}
      centered
    >
      <Modal.Header closeButton>Export Trades</Modal.Header>
      <Modal.Body>
        <div className={Classes.exportModalWrapper}>
          <Button onClick={() => setShowDateRangePicket(!showDateRangePicket)}>
            {showDateRangePicket
              ? 'Hide date range picker'
              : 'Show date Range picker'}
          </Button>
          {showDateRangePicket && (
            <div className={Classes.dateRangeWrapper}>
              <DateRangePicker
                onChange={handleDateChange}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                months={2}
                ranges={[state]}
                direction='horizontal'
              />
            </div>
          )}
          <p className='text-secondary d-flex align-items-center gap-2 mt-2'>
            <AiFillInfoCircle />
            <span className='text-secondary'>
              you can choose any length of time for export
            </span>
          </p>
        </div>
        <div>
          <h4 className='mb-3'>Report Format</h4>
          <div className={Classes.radioBtnWrapper}>
            <Form.Check
              type='radio'
              id='CSV'
              name='format'
              className='mb-1'
              label='CSV'
              onChange={changeHandler}

            />
            <Form.Check
              type='radio'
              id='XLSX'
              name='format'
              className='mb-1'
              label='XLSX'
              onChange={changeHandler}

            />
            <Form.Check type='radio' id='PDF' name='format' label='PDF'
              onChange={changeHandler}
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        {!data || data <= 0 && !loading && <div>
          <small className='text-danger'>No data to download</small>
        </div>}
        <button disabled={!data || data <= 0 || !formatType || loading} className='nextBtn' onClick={() => handleDownloads(formatType, data)}>{loading ? <Bars color='#fff' height={30} width={60} /> : 'Submit' }</button>
      </Modal.Footer>
    </Modal>
  )
}

export default ExportModal
