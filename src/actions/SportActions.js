import { GET_PETS } from "./PetActions"

export const GET_SPORTS         = "GET_SPORTS"
export const GET_SPORTS_SUCCESS = "GET_SPORTS_SUCCESS"
export const GET_SPORTS_FAILURE = "GET_SPORTS_FAILURE"

export const SPORT_CREATED_SUCCESS = "SPORT_CREATED_SUCCESS"
export const SPORT_CREATED_FAILURE = "SPORT_CREATED_FAILURE"

export const SPORT_DELETED_SUCCESS = "SPORT_DELETED_SUCCESS"
export const SPORT_DELETED_FAILURE = "SPORT_DELETED_FAILURE"

export const getSports = () => (
    { type: GET_PETS }
)

export const getSportsSuccess = (sports) => (
    { type: GET_SPORTS_SUCCESS, payload: sports }
)

export const getSportsFailure = (error) => (
    { type: GET_SPORTS_FAILURE, payload: error }
)

export const fetchEmployeeSports = (employee_id) => {
    return (dispatch) => {
        fetch (`http://localhost:3001/employees/${employee_id}/sports`)
        .then(response => response.json())
        .then(data => {
            dispatch(getSportsSuccess(data))
        })
        .catch(error => {
            dispatch(getSportsFailure(error))
        })
    }
}

export const sportCreatedSuccess = (sport) => (
    { type: SPORT_CREATED_SUCCESS, payload: sport }
)

export const sportCreatedFailure = (error) => (
    { type: SPORT_CREATED_FAILURE, payload: error }
)

export const fetchPostNewSport = (sport) => {
    return (dispatch) => {
        fetch(`http://localhost:3001/employees/${sport.employee_id}/sports`, {
            method: 'POST',
            body: JSON.stringify(sport),
            headers: {'Content-Type':'application/json'}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(sportCreatedSuccess(data))
        })
        .catch(error => {
            dispatch(sportCreatedFailure(error))
        })
    }
}

export const sportDeletedSucess = (sport) => (
    { type: SPORT_DELETED_SUCCESS, payload: sport }
)

export const sportDeletedFailure = (error) => (
    { type: SPORT_DELETED_FAILURE, payload: error}
)

export const fetchDeleteSport = (employee_id, sport_id) => {
    return (dispatch) => {
        fetch(`http://localhost:3001/employees/${employee_id}/sports/${sport_id}`, {
            method: 'DELETE',
            headers: {'Content-Type':'application/json'}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(sportDeletedSucess(data))
        })
        .catch(error => {
            dispatch(sportDeletedFailure(error))
        })
    }
}