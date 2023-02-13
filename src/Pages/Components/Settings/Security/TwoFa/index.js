import React, { useState } from 'react'
import Classes from './style.module.scss'
import ReactCodeInput from 'react-code-input';
import { Bars } from 'react-loader-spinner'
import { useDispatch } from 'react-redux';
import { verifyOpTP } from '../../../../../actions/user-actions';
import { CopyToClipboard } from 'react-copy-to-clipboard';


const TwoFa = ({ data, setShowActivate2FA }) => {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const [copied, setCopied] = useState(false);
  const [code, setCode] = useState('');


  const handleSubmit = async () => {
    setLoader(true)
    await dispatch(verifyOpTP({ code, optpLoginToken: data?.optpLoginToken }));
    setShowActivate2FA()
    setLoader(false)
    setCopied(false)
    setLoader(false)

  }

  return (
    <div className={`p-3 mb-3 ${Classes.twofaWrapper}`}>
      <h6 className='mb-2'>
        Use <span className='text-primary'>Google Authenticator</span> or{' '}
        <span className='text-primary'>Authy</span> to generate verification
        codes for additional protection.
      </h6>
      <div
        className={`${Classes.scanCodeWrapper} d-flex gap-3 align-items-center`}
      >
        <div className={`p-2 ${Classes.qrParent}`}>
          <img
            src={data?.url}
            className={Classes.qrCodeImg}
          />
        </div>
        <div>
          <h6 className='mb-2'>
            Scan this QR code or copy it for manual setup.
          </h6>
          <div className='text-primary'>
            <CopyToClipboard text={data?.secret}
            disabled={copied}
              onCopy={() => setCopied(true)}>
              <button className='text-primary'>{copied ?  'Copied' : 'Copy Code'}</button>
            </CopyToClipboard>
            
          </div>
        </div>
      </div>
      <div className={`${Classes.qrCodeInputWrapper} mt-4`}>
        <h6 className='mb-2'>2FA Code</h6>
        <div className='d-flex gap-4'>
          <ReactCodeInput type='text' fields={6} onChange={setCode} disabled={loader} />
          {/* <div
            className={`${Classes.codeItem} d-flex justify-content-center align-items-center`}
          >
            <span>1</span>
          </div>
          <div
            className={`${Classes.codeItem} d-flex justify-content-center align-items-center`}
          >
            <span>1</span>
          </div>
          <div
            className={`${Classes.codeItem} d-flex justify-content-center align-items-center`}
          >
            <span>1</span>
          </div>
          <div
            className={`${Classes.codeItem} d-flex justify-content-center align-items-center`}
          >
            <span>1</span>
          </div>
          <div
            className={`${Classes.codeItem} d-flex justify-content-center align-items-center`}
          >
            <span>1</span>
          </div>
          <div
            className={`${Classes.codeItem} d-flex justify-content-center align-items-center`}
          >
            <span>1</span>
          </div> */}

        </div>
        <button type='button' className={Classes.successBtn} onClick={handleSubmit} disabled={loader} style={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
          {loader ? <Bars color='#1FC28F' height={40} width={40} />
            : 'Enable 2FA'}
        </button>
      </div>
    </div>
  )
}

export default TwoFa
