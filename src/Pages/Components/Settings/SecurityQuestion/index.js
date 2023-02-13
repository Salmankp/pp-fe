import React, { useEffect } from 'react'
import styles from './styles.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { Bars } from 'react-loader-spinner'
import {
  securityQuestionsAction,
  securityAnswerAction,
} from '../../../../actions/security-questions-actions'

const SecurityQuestion = () => {
  const dispatch = useDispatch()
  const {
    error: errorSecurityQuestions,
    loading: loadingSecurityQuestions,
    securityQuesion,
  } = useSelector((state) => state.securityQuestions)
  const { loading: loadingSecurityAnswers } = useSelector(
    (state) => state.securityAnswers
  )

  useEffect(() => {
    dispatch(securityQuestionsAction())
  }, [dispatch])

  let answers = []
  const answerHandler = (e, data, index) => {
    answers[index] = {
      questionId: data?._id,
      question: data.Question,
      answer: e.target.value,
    }
  }
  const submitData = (e) => {
    e.preventDefault()
    dispatch(securityAnswerAction(answers))
    e.target.reset()
  }
  return (
    <div className={styles.wrap}>
      <ToastContainer />
      <h1 className={styles.title}>Security Questions</h1>
      <p className={styles.description}>
        Remember these answers as they’ll help us confirm your identity.
      </p>
      {loadingSecurityQuestions ? (
        <div className='d-flex justify-content-center'>
          <Bars color='#1FC28F' height={40} width={40} />
        </div>
      ) : errorSecurityQuestions ? (
        <h1>errorSecurityQuestions</h1>
      ) : (
        <>
          <form onSubmit={submitData}>
            {securityQuesion?.data?.map((item, index) => (
              <div key={item._id} className={styles.fieldWrap}>
                <div className={styles.label}>Question {index + 1}</div>
                <div className={styles.field}>{item?.Question}</div>
                <div>
                  <div className={styles.label}>Answer</div>
                  <input
                    onChange={(e) => answerHandler(e, item, index)}
                    name={item.question}
                    className={styles.answerInput}
                    type='text'
                    required
                  />
                </div>
              </div>
            ))}
            <input
              type='submit'
              disabled={loadingSecurityAnswers}
              className={styles.saveBtn}
              value='Save'
            ></input>
          </form>
        </>
      )}
    </div>
  )
}
export default SecurityQuestion
