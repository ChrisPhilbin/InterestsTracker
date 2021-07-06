import defaultFetchOptions, { prefix } from "../config/FetchDefault";
import { GET_PETS } from "./PetActions";

export const GET_SPORTS = "GET_SPORTS";
export const GET_SPORTS_SUCCESS = "GET_SPORTS_SUCCESS";
export const GET_SPORTS_FAILURE = "GET_SPORTS_FAILURE";

export const SPORT_CREATED_SUCCESS = "SPORT_CREATED_SUCCESS";
export const SPORT_CREATED_FAILURE = "SPORT_CREATED_FAILURE";

export const SPORT_DELETED_SUCCESS = "SPORT_DELETED_SUCCESS";
export const SPORT_DELETED_FAILURE = "SPORT_DELETED_FAILURE";

export const getSports = () => ({ type: GET_PETS });

export const getSportsSuccess = (sports) => ({
  type: GET_SPORTS_SUCCESS,
  payload: sports,
});

export const getSportsFailure = (error) => ({
  type: GET_SPORTS_FAILURE,
  payload: error,
});

export const fetchEmployeeSports = (employee_id) => {
  return async (dispatch) => {
    try {
      const success = await fetch(
        `${prefix}/employees/${employee_id}/sports`,
        defaultFetchOptions
      );
      const employeeSports = await success.json();
      dispatch(getSportsSuccess(employeeSports));
    } catch (error) {
      dispatch(getSportsFailure(error));
    }
  };
};

export const sportCreatedSuccess = (sport) => ({
  type: SPORT_CREATED_SUCCESS,
  payload: sport,
});

export const sportCreatedFailure = (error) => ({
  type: SPORT_CREATED_FAILURE,
  payload: error,
});

export const fetchPostNewSport = (sport) => {
  return async (dispatch) => {
    try {
      const success = await fetch(
        `${prefix}/employees/${sport.employee_id}/sports`,
        {
          ...defaultFetchOptions,
          method: "POST",
          body: JSON.stringify(sport),
        }
      );
      const newSport = await success.json();
      dispatch(sportCreatedSuccess(newSport));
    } catch (error) {
      dispatch(sportCreatedFailure(error));
    }
  };
};

export const sportDeletedSucess = (sport) => ({
  type: SPORT_DELETED_SUCCESS,
  payload: sport,
});

export const sportDeletedFailure = (error) => ({
  type: SPORT_DELETED_FAILURE,
  payload: error,
});

export const fetchDeleteSport = (employee_id, sport_id) => {
  return async (dispatch) => {
    try {
      const success = await fetch(
        `${prefix}/employees/${employee_id}/sports/${sport_id}`,
        {
          ...defaultFetchOptions,
          method: "DELETE",
        }
      );
      const deletedSport = await success.json();
      dispatch(sportDeletedSucess(deletedSport));
    } catch (error) {
      dispatch(sportDeletedFailure(error));
    }
  };
};
