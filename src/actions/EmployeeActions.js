export const GET_EMPLOYEES         = "GET_EMPLOYEES"
export const GET_EMPLOYEES_SUCCESS = "GET_EMPLOYEES_SUCCESS"
export const GET_EMPLOYEES_FAILURE = "GET_EMPLOYEES_FAILURE"

export const getEmployees = () => (
    { type: GET_EMPLOYEES }
)

export const getEmployeesSuccess = (employees) => (
    { type: GET_EMPLOYEES_SUCCESS, payload: employees }
)

export const getEmployeesFailure = (error) => (
    { type: GET_EMPLOYEES_FAILURE, payload: error }
)

export const fetchAllEmployees = () => {
    return (dispatch) => {
        dispatch(getEmployees())
        fetch('http://localhost:3001/employees')
        .then(response => response.json())
        .then(data => {
            dispatch(getEmployeesSuccess(data))
        })
        .catch(error => {
            dispatch(getEmployeesFailure(error))
        })
    }
}