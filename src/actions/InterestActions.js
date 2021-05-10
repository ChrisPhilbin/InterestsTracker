export const GET_INTERESTS         = "GET_INTERESTS"
export const GET_INTERESTS_SUCCESS = "GET_INTERESTS_SUCCESS"
export const GET_INTERESTS_FAILURE = "GET_INTERESTS_FAILURE"

export const getInterests = () => (
    { type: GET_INTERESTS }
)

export const getInterestsSuccess = (interests) => (
    { type: GET_INTERESTS_SUCCESS, payload: interests }
)

export const getInterestsFailure = (error) => (
    { type: GET_INTERESTS, payload: error }
)

export const fetchEmployeeInterests = (employee_id) => {
    return (dispatch) => {
        dispatch(getInterests)
        fetch()
        .then(response => response.json())
        .then(data => {
            dispatch(getInterestsSuccess(data))
        })
        .catch(error => {
            dispatch(getInterestsFailure(error))
        })
    }
}