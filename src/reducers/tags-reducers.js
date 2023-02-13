import {
  TAGS_REQUEST,
  TAGS_SUCCESS,
  TAGS_FAIL
} from "../constants/tags-constants";

// import { filterData } from "../utils/helper.js";
export const tagsReducer = (state = { tags: [] }, action) => {
  switch (action.type) {
    case TAGS_REQUEST:
      return { ...state, loading: true };
    case TAGS_SUCCESS:
      return {
        ...state,
        tags: [action.payload.data],
        loading: false
      };
    case TAGS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
