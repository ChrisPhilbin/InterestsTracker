export const GET_ALERTS = "GET_ALERTS"
export const GET_ALERTS_SUCCESS = "GET_ALERTS_SUCCESS"
export const GET_ALERTS_FAILURE = "GET_ALERTS_FAILURE"

export const getAlerts = () => (
    { type: GET_ALERTS }
)

export const getAlertsSuccess = (alerts) => (
    { type: GET_ALERTS_SUCCESS, payload: alerts }
)

export const getAlertsFailure = (error) => (
    { type: GET_ALERTS_FAILURE, payload: error }
)

export const fetchEmployeeAlerts = () => {
    return (dispatch) => {
        dispatch(getAlerts)
        fetch('http://localhost:3000/v1/employees/dashboard')
        .then(response => response.json())
        .then(data => {
            dispatch(getAlertsSuccess(data))
        })
        .catch(error => {
            dispatch(getAlertsFailure(error))
        })
    }
}