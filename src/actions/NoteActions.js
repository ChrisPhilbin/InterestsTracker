import { EMPLOYEE_CREATED_SUCCESS } from "./EmployeeActions"

export const GET_NOTES          = "GET_NOTES"
export const GET_NOTES_SUCCESS  = "GET_NOTES_SUCCESS"
export const GET_NOTES_FAILUIRE = "GET_NOTES_FAILURE"

export const getNotes = () => (
    { type: GET_NOTES }
)

export const GetNotesSuccess = (notes) => (
    { type: GET_NOTES_SUCCESS, payload: notes }
)

export const getNotesFailure = (error) => (
    { type: GET_NOTES_FAILUIRE, payload: error }
)

export const fecthAllEmployeeNotes = (employee_id) => {
    return (disptach) => {
        dispatch(getNotes)
        fetch(`http://localhost:3001/employees/${employee_id}/notes`)
        .then(response => response.json())
        .then(data => {
            dispatch(GetNotesSuccess(data))
        })
        .catch(error => {
            dispatch(getNotesFailure(error))
        })
    }
}

export const noteCreatedSuccess = (note) => (
    { type: NOTE_CREATED_SUCCESS, payload: note }
)

export const notecreatedFailure = (error) => (
    { type: NOTE_CREATED_FAILURE, payload: error }
)

export const fetchPostNewNote = (note) => {
    return (dispatch) => {
        fetch(`http://localhost:3001/employees/${note.employee_id}/notes`, {
            method: 'POST',
            body: JSON.stringify(note),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then(data => {
            dispatch(noteCreatedSuccess(data))
        })
        .catch(error => {
            dispatch(notecreatedFailure(error))
        })
    }
}