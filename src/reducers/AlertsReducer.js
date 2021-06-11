import * as actions from "../actions/AlertActions";

export const initialAlertsState = {
  alerts: {},
  loading: false,
  hasErrors: false,
};

export default function alertsReducer(state = initialAlertsState, action) {
  switch (action.type) {
    case actions.GET_ALERTS:
      return { ...state, loading: true };
    case actions.GET_ALERTS_SUCCESS:
      return { ...state, loading: false, alerts: action.payload };
    case actions.GET_ALERTS_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
}
