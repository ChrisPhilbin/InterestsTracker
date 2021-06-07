import defaultFetchOptions from "../config/FetchDefault"

export const GET_NOTES            = "GET_NOTES"
export const GET_NOTES_SUCCESS    = "GET_NOTES_SUCCESS"
export const GET_NOTES_FAILURE    = "GET_NOTES_FAILURE"

export const NOTE_CREATED_SUCCESS = "NOTE_CREATED_SUCCESS"
export const NOTE_CREATED_FAILURE = "NOTE_CREATED_FAILURE"

export const NOTE_DELETED_SUCCESS = "NOTE_DELETED_SUCCESS"
export const NOTE_DELETED_FAILURE = "NOTE_DELETED_FAILURE"

export const getNotes = () => (
    { type: GET_NOTES }
)

export const GetNotesSuccess = (notes) => (
    { type: GET_NOTES_SUCCESS, payload: notes }
)

export const getNotesFailure = (error) => (
    { type: GET_NOTES_FAILURE, payload: error }
)

export const fetchEmployeeNotes = (employee_id) => {
    return (dispatch) => {
        dispatch(getNotes)
        fetch(`http://localhost:3001/employees/${employee_id}/notes`, defaultFetchOptions)
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
            ...defaultFetchOptions,
            method: 'POST',
            body: JSON.stringify(note),
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

export const noteDeletedSuccess = (note) => (
    { type: NOTE_DELETED_SUCCESS, payload: note }
)

export const noteDeletedFailure = (error) => (
    { type: NOTE_DELETED_FAILURE, payload: error }
)

export const fetchDeleteNote = (employee_id, note_id) => {
    return (dispatch) => {
        fetch(`http://localhost:3001/employees/${employee_id}/notes/${note_id}`, {
            ...defaultFetchOptions,
            method: 'DELETE',
        })
        .then(response => response.json())
        .then(data => {
            dispatch(noteDeletedSuccess(data))
        })
        .catch(error => {
            dispatch(noteDeletedFailure(error))
        })
    }
}