import React, { useState, useRef, useMemo } from 'react'
import styles from './styles.module.scss'
import exportIcon from '../../../../assets/images/export.svg'
import copyIcon from '../../../../assets/images/copy.svg'
import displayPic from '../../../../assets/images/displayPic.svg'
import bitcoin from '../../../../assets/images/bitcoin.svg'
import tether from '../../../../assets/images/tether.svg'
import { Bars } from 'react-loader-spinner'
import ethereum from '../../../../assets/images/ethereum.svg'
import caretBtn from '../../../../assets/images/caretBtn.svg'
import smexportIcon from '../../../../assets/images/smExport.svg'
import smcopyIcon from '../../../../assets/images/vector.png'
import { useDispatch, useSelector } from 'react-redux'
import { CSVLink, CSVDownload } from 'react-csv'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Pagination from '../../Common/Pagination'
import { FaDownload } from 'react-icons/fa'
import ExportModal from './ExportModal'
import DropDown from '../../Common/DropDown'
import xlsx from "json-as-xlsx"
import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'
import moment from 'moment'



const xlsxCol = [
  { label: 'Type', value: 'type' },
  { label: 'Preferred Currency', value: 'preferredCurrency' },
  { label: 'Fiat Amount', value: 'fiatAmount' },
  { label: 'Currency Type', value: 'cryptoCurrencyType' },
  { label: 'Crypto Amount', value: 'cryptoAmount' },
  { label: 'Payment Method', value: 'paymentMethod' },
  { label: 'User', value: 'user' },
  { label: 'Transaction Id', value: 'transactionId' },
  { label: 'Status', value: 'status' },
  { label: 'Created', value: 'created' },
]

const PastTrades = ({
  trades,
  userId,
  count,
  limit,
  currentPage,
  setCurrentPage,
  userName
}) => {
  const csvLink = useRef();
  const doc = new jsPDF()
  const [open, setOpen] = useState(true)
  const [copy, setCopy] = useState(false)
  const [showExportModal, setShowExportModal] = useState(false)
  const [csvReport, setCsvReport] = useState({
    data: [],
    filename: 'Trading History Report',
  })
  const [openVal2, setOpenVal2] = useState(false)
  const last = trades && trades.length && trades[0] && trades[0].created
  const first = trades && trades.length && trades[trades.length - 1].created
  const data =
    trades &&
    trades.length &&
    trades.map((index) => ({
      Bank_name: index?.offerId?.subPaymentMethodId?.name,
      User_name: index?.offerId?.user?.name,
      Offer_label: index?.offerId?.offerLabel,
      Amount: index?.cryptoAmount,
      Currency: index?.cryptoCurrencyType,
      Created: index?.created,
      Status: index?.status,
      Transaction_id: index?.transactionId,
    }))


  const extractCopyData = () => {
    let copData = '';
    trades?.forEach(el => {
      copData = copData + `${el?.buyerId?._id === userId ? 'BUY' : 'SELL'} ${el?.cryptoCurrencyType} ${el?.cryptoAmount} ${el?.preferredCurrency} ${el?.offerId?.subPaymentMethodId?.name} ${el?.offerId?.user?.name} ${el?.status} ${el?.created} ${el?.transactionId} \n`
    });
    setCsvReport({
      data: data,
      filename: 'Trading History Report',
    })
    return copData;
  }

  const copiedData = useMemo(() => trades?.length > 0 && extractCopyData(), [trades]);

  const handleCopy = () => {
    if (!trades || trades?.length <= 0)
      return
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 3000)
  }

  const downloadXlsx = (data) => {
    let settings = {
      fileName: "Trading History Report",
      extraLength: 3,
      writeMode: 'writeFile'
    }
    xlsx(data, settings)
  }

  const downloadPdfDocument = (_data) => {
    doc.text('P2P', 10, 10)
    doc.text(userName ?? '', 200, 10, null, null, "right")
    doc.setFontSize(12)
    doc.text('Trading History', 10, 30)
    doc.text(`Dates: ${moment(_data[0]?.created).format('DD-MM-YY')} - ${moment().format('DD-MM-YY')}`, 200, 30, null, null, "right")

    autoTable(doc, {
      head: [['Partner', 'Type', 'Amount', 'Payment Method', 'Status', 'Created']],
      body: _data.map((el, ind) => [
        el?.buyerId?._id === userId ? el?.sellerId?.name : el?.buyerId?.name,
        el?.buyerId?._id === userId ? 'BUY' : 'SELL',
        el?.cryptoAmount + ' ' + el?.cryptoCurrencyType,
        el?.offerId?.subPaymentMethodId?.name,
        el?.status,
        el?.created,
      ]
      ),
      margin: { top: 35 }
    },
    )

    doc.save('report.pdf')
  }

  const handleDownloads = (e, _data) => {
    if (e === 'CSV') {
      setCsvReport({
        data: _data,
        filename: 'Trading History Report',
      })
      setTimeout(()=>{
        csvLink.current.link.click();
        setCsvReport({
          data: data,
          filename: 'Trading History Report',
        })
      }, 500)
    } else if (e === 'XLSX') {
      const xlxsdata = _data?.map(el => ({ ...el, type: el?.buyerId === userId ? 'BUY' : 'SELL', paymentMethod: el?.offerId?.subPaymentMethodId?.name, user: el?.offerId?.user?.name }))
      downloadXlsx([{
        columns: xlsxCol,
        content: xlxsdata
      }])
    } else if (e === 'PDF') {
      downloadPdfDocument(_data);
    }

  }

  return (
    <>
      <div className={styles.rightBar}>
        <h1 className={styles.title}>My Past Trades </h1>
        {trades && trades?.length > 0 ? (
          <span className={styles.date}>
            {first} - {last}
          </span>
        ) : (
          ''
        )}

        <div className={styles.btnContainer}>
          <button
            type='button'
            onClick={() => setShowExportModal(true)}
            className={styles.btn}
          >
            <span>Export</span>
            <FaDownload color='#1FC28F' />
          </button>
          <button type='button' className={styles.btn}>
            {csvReport && csvReport?.data?.length ? (
              <CSVLink {...csvReport} ref={csvLink}>
                <span style={{ color: 'black' }}>Export</span>
              </CSVLink>
            ) : (
              ''
            )}
            <img src={exportIcon} alt='icon' />
          </button>
          {/* <button type='button' className={styles.btn}> */}

          <CopyToClipboard text={copiedData || ''}
            onCopy={handleCopy}>
            <button type='button' className={styles.btn}>
              <span>{copy ? 'Copied' : 'Copy'}</span>
              <img src={copyIcon} alt='icon' />
            </button>
          </CopyToClipboard>


          {/* </button> */}
        </div>
        {trades && trades.length > 0 ? (
          <div className={styles.outer}>
            <table className={styles.table}>
              <tbody>
                {trades.map((index, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        <div className={styles.tableouter}>
                          <div className={styles.alignment}>
                            {index?.offerId?.user?.profilePic ? (
                              <img
                                className={styles.displayPic}
                                src={`data:image/jpeg;base64,${index?.offerId?.user?.profilePic}`}
                                alt='image'
                              />
                            ) : (
                              <img
                                className={styles.displayPic}
                                src={displayPic}
                                alt='image'
                              />
                            )}

                            <div>
                              <h4 className={styles.subtitle}>
                                {index?.offerId?.subPaymentMethodId?.name}
                              </h4>
                              <div className={styles.setWidth}>
                                {index?.cryptoCurrencyType === 'bitcoin' ? (
                                  <img
                                    className={styles.icon}
                                    src={bitcoin}
                                    alt='icon'
                                  />
                                ) : index?.cryptoCurrencyType === 'tether' ? (
                                  <img
                                    className={styles.icon}
                                    src={tether}
                                    alt='icon'
                                  />
                                ) : (
                                  <img
                                    className={styles.icon}
                                    src={ethereum}
                                    alt='icon'
                                  />
                                )}
                                {index?.buyerId === userId ? (
                                  <span className={styles.txt}>Buy</span>
                                ) : (
                                  <span className={styles.txt}>Sell</span>
                                )}

                                <span className={styles.txt}>
                                  {index?.offerId?.user?.name}
                                </span>
                                <span className={styles.txt}>
                                  {index?.created}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <p className={styles.txt}>
                              <b className={styles.boldTxt}>
                                {index?.cryptoAmount}{' '}
                                {index?.cryptoCurrencyType}{' '}
                              </b>
                            </p>
                            {/* <p className={styles.txt}>
                             Rate: 6,279,580.73 PKR/BTC
                           </p> */}
                          </div>
                          <div className={styles.btnOuter}>
                            <button type='button' className={styles.smBtn}>
                              {index?.status}
                            </button>
                            <button
                              onClick={() => setOpen(!open)}
                              type='button'
                              key={index}
                            >
                              <img src={caretBtn} alt='icon' />
                            </button>
                          </div>
                        </div>
                        {open && (
                          <div>
                            <div className={styles.subInfo}>
                              <div className={styles.alignment}>
                                <div className={styles.directionRow}>
                                  <div className={styles.mg}>
                                    <b className={styles.greyTxt}>Trade:</b>{' '}
                                    <span className={styles.link}>
                                      {index?.transactionId}
                                    </span>
                                  </div>
                                  <div>
                                    <b className={styles.greyTxt}>Offer: </b>
                                    <span className={styles.link}>
                                      {index?.offerId?.offerLabel}
                                    </span>
                                  </div>
                                </div>
                                <div>
                                  <p className={styles.greyTxt}>
                                    Fee:{' '}
                                    <span>
                                      Total: {index?.cryptoAmount}{' '}
                                      {index?.cryptoCurrencyType}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className={styles.iconContainer}>
                              <button type='button'>
                                {trades ? (
                                  <CSVLink
                                    data={[
                                      {
                                        Bank_name:
                                          index?.offerId?.subPaymentMethodId
                                            ?.name,
                                        User_name: index?.offerId?.user?.name,
                                        Offer_label: index?.offerId?.offerLabel,
                                        Amount: index?.cryptoAmount,
                                        Currency: index?.cryptoCurrencyType,
                                        Created: index?.created,
                                        Status: index?.status,
                                        Transaction_id: index?.transactionId,
                                      },
                                    ]}
                                    filename='Trading History Report'

                                  >
                                    <span>
                                      <img src={smexportIcon} alt='icon' />
                                    </span>
                                  </CSVLink>
                                ) : (
                                  ''
                                )}
                              </button>
                              <CopyToClipboard text={`${index?.buyerId === userId ? 'BUY' : 'SELL'} ${index?.cryptoCurrencyType} ${index?.cryptoAmount} ${index?.preferredCurrency} ${index?.offerId?.subPaymentMethodId?.name} ${index?.offerId?.user?.name} ${index?.status} ${index?.created} ${index?.transactionId} \n` || ''}>
                                <button type='button' className={styles.btn}>
                                  <img src={smcopyIcon} alt='icon' />
                                </button>
                              </CopyToClipboard>
                              {/* <button type='button'>
                                <img src={smcopyIcon} alt='icon' />
                              </button> */}
                              <DropDown>
                                <ul className={styles.dropdownList}>
                                  <li className='d-flex align-items-center gap-2 text-secondary' onClick={() => downloadXlsx([{
                                    columns: xlsxCol,
                                    content: [{ ...index, type: index?.buyerId === userId ? 'BUY' : 'SELL', paymentMethod: index?.offerId?.subPaymentMethodId?.name, user: index?.offerId?.user?.name }]
                                  }])}>
                                    <FaDownload /> XLSX
                                  </li>
                                  <li>
                                    <CSVLink
                                      className='text-decoration-none'
                                      data={[
                                        {
                                          Bank_name:
                                            index?.offerId?.subPaymentMethodId
                                              ?.name,
                                          User_name: index?.offerId?.user?.name,
                                          Offer_label: index?.offerId?.offerLabel,
                                          Amount: index?.cryptoAmount,
                                          Currency: index?.cryptoCurrencyType,
                                          Created: index?.created,
                                          Status: index?.status,
                                          Transaction_id: index?.transactionId,
                                        },
                                      ]}
                                      filename='Trading History Report'
                                    >
                                      <span className='d-flex align-items-center gap-2 text-secondary'>
                                        <FaDownload /> CSV
                                      </span>
                                    </CSVLink>
                                  </li>
                                  <li className='d-flex align-items-center gap-2 text-secondary' onClick={() => downloadPdfDocument([index])}>
                                    <FaDownload /> PDF
                                  </li>
                                </ul>
                              </DropDown>
                            </div>
                          </div>
                        )}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        ) : trades && trades.length === 0 ? (
          <div className={styles.loader}>
            <span>No Trades</span>
          </div>
        ) : (
          <div className={styles.loader}>
            <Bars color='#1FC28F' height={40} width={40} />
          </div>
        )}
        <Pagination
          pages={Math.ceil(count / limit)}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <ExportModal
        first={first}
        last={last}
        tradesData={trades ?? []}
        trades={trades && trades?.length}
        handleDownloads={handleDownloads}
        showModal={showExportModal}
        setShowModal={() => setShowExportModal(false)}
      />
    </>
  )
}
export default PastTrades
