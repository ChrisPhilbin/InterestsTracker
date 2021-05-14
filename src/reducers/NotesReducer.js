import * as actions from '../actions/NoteActions'

export const initialNotesState = {
    notes: [],
    note: {},
    loading: false,
    hasErrors: false
}

export default function notesReducer(state = initialNotesState, action) {
    switch(action.type) {
        case actions.GET_NOTES:
            return { ...state, loading: true }
        case actions.GET_NOTES_SUCCESS:
            return { ...state, loading: false, notes: action.payload }
        case actions.GET_NOTES_FAILURE:
            return { ...state, loading: false, hasErrors: true }
        default:
            return state
    }
}