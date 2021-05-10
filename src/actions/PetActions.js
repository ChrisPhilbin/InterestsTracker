export const GET_PETS         = "GET_PETS"
export const GET_PETS_SUCCESS = "GET_PETS_SUCCESS"
export const GET_PETS_FAILURE = "GET_PETS_FAILURE"

export const getPets = () => (
    { type: GET_PETS }
)

export const getPetsSuccess = (pets) => (
    { type: GET_PETS_SUCCESS, payload: pets }
)

export const getPetsFailure = (error) => (
    { type: GET_PETS_FAILURE, payload: error }
)

export const fetchEmployeePets = (employee_id) => {
    return (dispatch) => {
        dispatch(getPets)
        fetch(`http://localhost:3001/employees/${employee_id}/pets`)
        .then(response => response.json())
        .then(data => {
            dispatch(getPetsSuccess(data))
        })
        .catch(error => {
            dispatch(getPetsFailure(error))
        })
    }
}