import defaultFetchOptions, { prefix } from "../config/FetchDefault";

export const GET_NOTES = "GET_NOTES";
export const GET_NOTES_SUCCESS = "GET_NOTES_SUCCESS";
export const GET_NOTES_FAILURE = "GET_NOTES_FAILURE";

export const NOTE_CREATED_SUCCESS = "NOTE_CREATED_SUCCESS";
export const NOTE_CREATED_FAILURE = "NOTE_CREATED_FAILURE";

export const NOTE_DELETED_SUCCESS = "NOTE_DELETED_SUCCESS";
export const NOTE_DELETED_FAILURE = "NOTE_DELETED_FAILURE";

export const getNotes = () => ({ type: GET_NOTES });

export const GetNotesSuccess = (notes) => ({
  type: GET_NOTES_SUCCESS,
  payload: notes,
});

export const getNotesFailure = (error) => ({
  type: GET_NOTES_FAILURE,
  payload: error,
});

export const fetchEmployeeNotes = (employee_id) => {
  return async (dispatch) => {
    try {
      dispatch(getNotes);
      const success = await fetch(
        `${prefix}/employees/${employee_id}/notes`,
        defaultFetchOptions
      );
      const employeeNotes = await success.json();
      dispatch(GetNotesSuccess(employeeNotes));
    } catch (error) {
      getNotesFailure(error);
    }
  };
};

export const noteCreatedSuccess = (note) => ({
  type: NOTE_CREATED_SUCCESS,
  payload: note,
});

export const notecreatedFailure = (error) => ({
  type: NOTE_CREATED_FAILURE,
  payload: error,
});

export const fetchPostNewNote = (note) => {
  return async (dispatch) => {
    try {
      const success = await fetch(
        `${prefix}/employees/${note.employee_id}/notes`,
        {
          ...defaultFetchOptions,
          method: "POST",
          body: JSON.stringify(note),
        }
      );
      const newNote = await success.json();
      dispatch(noteCreatedSuccess(newNote));
    } catch (error) {
      dispatch(notecreatedFailure(error));
    }
  };
};

export const noteDeletedSuccess = (note) => ({
  type: NOTE_DELETED_SUCCESS,
  payload: note,
});

export const noteDeletedFailure = (error) => ({
  type: NOTE_DELETED_FAILURE,
  payload: error,
});

export const fetchDeleteNote = (employee_id, note_id) => {
  return async (dispatch) => {
    try {
      const success = await fetch(
        `${prefix}/employees/${employee_id}/notes/${note_id}`,
        {
          ...defaultFetchOptions,
          method: "DELETE",
        }
      );
      const deletedNote = await success.json();
      dispatch(noteDeletedSuccess(deletedNote));
    } catch (error) {
      dispatch(noteDeletedFailure(error));
    }
  };
};
