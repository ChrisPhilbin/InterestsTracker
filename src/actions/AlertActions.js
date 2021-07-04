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
  return (dispatch) => {
    dispatch(getAlerts);
    fetch(`${prefix}/employees/dashboard`, defaultFetchOptions)
      .then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            dispatch(getAlertsSuccess(data));
          });
        } else {
          window.location.replace("/sign_in");
        }
      })
      .catch((error) => {
        dispatch(getAlertsFailure(error));
      });
  };
};
