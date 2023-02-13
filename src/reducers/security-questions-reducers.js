import {
  SECURITY_QUESTIONS_REQUEST,
  SECURITY_QUESTIONS_SUCCESS,
  SECURITY_QUESTIONS_FAIL,
  SECURITY_ANSWER_REQUEST,
  SECURITY_ANSWER_SUCCESS,
  SECURITY_ANSWER_FAIL,
} from '../constants/security-questions-constants'
export const securityQuestionsReducer = (
  state = { securityQuesion: {} },
  action
) => {
  switch (action.type) {
    case SECURITY_QUESTIONS_REQUEST:
      return { loading: true }
    case SECURITY_QUESTIONS_SUCCESS:
      return { loading: false, securityQuesion: action.payload, error: '' }

    case SECURITY_QUESTIONS_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export const securityAnswersReducer = (
  state = { securityAnswer: {} },
  action
) => {
  switch (action.type) {
    case SECURITY_ANSWER_REQUEST:
      return { loading: true }
    case SECURITY_ANSWER_SUCCESS:
      return { loading: false, securityAnswer: action.payload, error: '' }
    case SECURITY_ANSWER_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
