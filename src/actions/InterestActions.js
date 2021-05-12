export const GET_INTERESTS         = "GET_INTERESTS"
export const GET_INTERESTS_SUCCESS = "GET_INTERESTS_SUCCESS"
export const GET_INTERESTS_FAILURE = "GET_INTERESTS_FAILURE"

export const CREATE_INTEREST_FAILURE = "CREATE_INTEREST_FAILURE"
export const CREATE_INTEREST_SUCCESS = "CREATE_INTEREST_SUCCESS"

export const getInterests = () => (
    { type: GET_INTERESTS }
)

export const getInterestsSuccess = (interests) => (
    { type: GET_INTERESTS_SUCCESS, payload: interests }
)

export const getInterestsFailure = (error) => (
    { type: GET_INTERESTS_FAILURE, payload: error }
)

export const fetchEmployeeInterests = (employee_id) => {
    return (dispatch) => {
        dispatch(getInterests)
        fetch(`http://localhost:3001/employees/${employee_id}/interests`)
        .then(response => response.json())
        .then(data => {
            dispatch(getInterestsSuccess(data))
        })
        .catch(error => {
            dispatch(getInterestsFailure(error))
        })
    }
}

export const interestCreatedSuccess = (interest) => (
    { type: CREATE_INTEREST_SUCCESS, payload: interest }
)

export const interestCreatedFailure = (error) => (
    { type: CREATE_INTEREST_FAILURE, payload: error }
)

export const fetchPostNewInterest = (interest) => {
    return (dispatch) => {
        fetch(`http://localhost:3001/employees/${interest.employee_id}/interests`, {
            method: 'POST',
            body: JSON.stringify(interest),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data, "data coming back")
            dispatch(interestCreatedSuccess(data))
        })
        .catch(error => {
            dispatch(interestCreatedFailure(error))
        })
    }
}