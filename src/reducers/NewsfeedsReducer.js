import * as actions from "../actions/NewsfeedActions";

export const initialNewsfeedState = {
  news: [],
  loading: false,
  hasErrors: false,
};

export default function newsfeedReducer(state = initialNewsfeedState, action) {
  switch (action.type) {
    case actions.GET_NEWSFEED:
      return { ...state, loading: true };
    case actions.GET_NEWSFEED_SUCCESS:
      return { ...state, loading: false, news: action.payload };
    case actions.GET_NEWSFEED_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
}
