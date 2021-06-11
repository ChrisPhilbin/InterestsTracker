import * as actions from "../actions/SportActions";

export const initialInterestsState = {
  sports: [],
  loading: false,
  hasErrors: false,
};

export default function sportsReducer(state = initialInterestsState, action) {
  switch (action.type) {
    case actions.GET_SPORTS: {
      return { ...state, loading: true };
    }
    case actions.GET_SPORTS_SUCCESS: {
      return { ...state, loading: false, sports: action.payload };
    }
    case actions.GET_SPORTS_FAILURE: {
      return { ...state, loading: false, hasErrors: true };
    }
    case actions.SPORT_CREATED_SUCCESS: {
      return {
        ...state,
        loading: false,
        sports: state.sports.concat(action.payload),
      };
    }
    case actions.SPORT_CREATED_FAILURE: {
      return { ...state, loading: false, hasErrors: true };
    }
    case actions.SPORT_DELETED_SUCCESS: {
      return {
        sports: state.sports.filter(
          (sport) => sport.teamname !== action.payload.teamname
        ),
      };
    }
    default:
      return state;
  }
}
