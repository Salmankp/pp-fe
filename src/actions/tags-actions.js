import {
  TAGS_REQUEST,
  TAGS_SUCCESS,
  TAGS_FAIL
} from "../constants/tags-constants";
import { error } from "../utils/toastr";
import { get } from "../utils/ajax";
export const getTags = () => async dispatch => {
  try {
    dispatch({
      type: TAGS_REQUEST
    });

    const { data } = await get(
      `${process.env.REACT_APP_API_URL}/api/v1/offer_tags/getTags`
    );

    dispatch({
      type: TAGS_SUCCESS,
      payload: data
    });
  } catch (er) {
    error(er.response.data.message);

    dispatch({
      type: TAGS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
