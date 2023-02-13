import axios from 'axios'
import {
  SECURITY_QUESTIONS_REQUEST,
  SECURITY_QUESTIONS_SUCCESS,
  SECURITY_QUESTIONS_FAIL,
  SECURITY_ANSWER_REQUEST,
  SECURITY_ANSWER_SUCCESS,
  SECURITY_ANSWER_FAIL,
} from '../constants/security-questions-constants'
import { error, success } from '../utils/toastr'
import store from './../store'

export const securityQuestionsAction = () => async (dispatch) => {
  dispatch({
    type: SECURITY_QUESTIONS_REQUEST,
  })
  const token = store?.getState()?.loggedInUser?.userInfo?.token

  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  }
  axios
    .get(`${process.env.REACT_APP_API_URL}/api/v1/security_questions`, config)
    .then((res) => {
      console.log('security questions Response: =>> ', res.data)
      dispatch({
        type: SECURITY_QUESTIONS_SUCCESS,
        payload: res.data,
      })
    })

    .catch((err) => {
      error(err.response.data.message, 'Error Question offer')
      dispatch({
        type: SECURITY_QUESTIONS_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      })
    })
}

export const securityAnswerAction = (data) => async (dispatch) => {
  dispatch({
    type: SECURITY_ANSWER_REQUEST,
  })
  const token = store?.getState()?.loggedInUser?.userInfo?.token

  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  }
  axios
    .post(
      `${process.env.REACT_APP_API_URL}/api/v1/security_answers`,
      data,
      config
    )
    .then((res) => {
      console.log('security questions Response: =>> ', res.data)
      dispatch({
        type: SECURITY_ANSWER_SUCCESS,
        payload: res.data,
      })
      success('Answers Submitted Successfully')
    })

    .catch((err) => {
      error(err.response.data.message, 'Post answers error')
      dispatch({
        type: SECURITY_ANSWER_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      })
    })
}
