import defaultFetchOptions, { prefix } from "../config/FetchDefault";

export const GET_ALERTS = "GET_ALERTS";
export const GET_ALERTS_SUCCESS = "GET_ALERTS_SUCCESS";
export const GET_ALERTS_FAILURE = "GET_ALERTS_FAILURE";

export const getAlerts = () => ({ type: GET_ALERTS });

export const getAlertsSuccess = (alerts) => ({
  type: GET_ALERTS_SUCCESS,
  payload: alerts,
});

export const getAlertsFailure = (error) => ({
  type: GET_ALERTS_FAILURE,
  payload: error,
});

export const fetchEmployeeAlerts = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${prefix}/employees/dashboard`,
        defaultFetchOptions
      );
      if (response.status === 200) {
        const alerts = await response.json();
        dispatch(getAlertsSuccess(alerts));
      } else {
        dispatch(getAlertsFailure(response.statusText));
      }
    } catch (error) {
      dispatch(getAlertsFailure(error));
    }
  };
};
