export const GET_NEWSFEED         = "GET_NEWSFEED"
export const GET_NEWSFEED_SUCCESS = "GET_NEWSFEED_SUCCESS"
export const GET_NEWSFEED_FAILURE = "GET_NEWSFEED_FAILURE"

export const getNewsfeed = () => (
    { type: GET_NEWSFEED }
)

export const getNewsfeedSuccess = (news) => (
    { type: GET_NEWSFEED_SUCCESS, payload: news }
)

export const getNewsfeedFailure = (error) => (
    { type: GET_NEWSFEED_FAILURE, payload: error }
)

export const fetchEmployeeNewsfeed = (employee_id) => {
    return (dispatch) => {
        fetch(`http://localhost:3001/employees/${employee_id}/newsfeed`)
        .then(response => response.json())
        .then(data => {
            dispatch(getNewsfeedSuccess(data))
        })
        .catch(error => {
            dispatch(getNewsfeedFailure(error))
        })
    }
}