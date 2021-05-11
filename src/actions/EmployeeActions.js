export const GET_EMPLOYEES            = "GET_EMPLOYEES"
export const GET_EMPLOYEES_SUCCESS    = "GET_EMPLOYEES_SUCCESS"
export const GET_EMPLOYEES_FAILURE    = "GET_EMPLOYEES_FAILURE"

export const GET_ONE_EMPLOYEE         = "GET_ONE_EMPLOYEE"
export const GET_ONE_EMPLOYEE_SUCCESS = "GET_ONE_EMPLOYEE_SUCCESS"
export const GET_ONE_EMPLOYEE_FAILURE = "GET_ONE_EMPLOYEE_FAILURE"

export const EMPLOYEE_CREATED_SUCCESS = "EMPLOYEE_CREATED_SUCCESS"
export const EMPLOYEE_CREATED_FAILURE = "EMPLOYEE_CREATED_FAILURE"

export const EMPLOYEE_DELETED_SUCCESS = "EMPLOYEE_DELETED_SUCCESS"
export const EMPLOYEE_DELETED_FAILURE = "EMPLOYEE_DELETED_FAILURE"

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

export const getOneEmployee = () => (
    { type: GET_ONE_EMPLOYEE }
)

export const getOneEmployeeSuccess = (employee) => (
    { type: GET_ONE_EMPLOYEE_SUCCESS, payload: employee }
)

export const GetOneEmployeeFailure = (error) => (
    { type: GET_ONE_EMPLOYEE_FAILURE, payload: error }
)

export const fetchOneEmployee = (employee_id) => {
    return (dispatch) => {
        dispatch(getOneEmployee())
        fetch(`http://localhost:3001/employees/${employee_id}`)
        .then(response => response.json())
        .then(data => {
            dispatch(getOneEmployeeSuccess(data))
        })
        .catch(error => {
            dispatch(GetOneEmployeeFailure(error))
        })
    }
}

export const employeeCreatedSuccess = (employee) => (
    { type: EMPLOYEE_CREATED_SUCCESS, payload: employee }
)

export const employeeCreatedFailure = (error) => (
    { type: EMPLOYEE_CREATED_FAILURE, payload: error }
)

export const fetchPostNewEmployee = (employee) => {
    return (dispatch) => {
        fetch('http://localhost:3001/employees', {
            method: 'POST',
            body: JSON.stringify(employee),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then(data => {
            dispatch(employeeCreatedSuccess(data))
        })
        .catch(error => {
            dispatch(employeeCreatedFailure(error))
        })
    }
}

export const employeeDeletedSuccess = (employee) => (
    { type: EMPLOYEE_DELETED_SUCCESS, payload: employee }
)

export const employeeDeletedFailure = (error) => (
    { type: EMPLOYEE_DELETED_FAILURE, payload: error }
)

export const deleteOneEmployee = (employee_id) => {
    return (dispatch) => {
        fetch(`http://localhost:3001/employees/${employee_id}`, {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then(data => dispatch(employeeDeletedSuccess(data)))
    }
}