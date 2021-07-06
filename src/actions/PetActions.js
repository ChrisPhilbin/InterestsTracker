import defaultFetchOptions, { prefix } from "../config/FetchDefault";

export const GET_PETS = "GET_PETS";
export const GET_PETS_SUCCESS = "GET_PETS_SUCCESS";
export const GET_PETS_FAILURE = "GET_PETS_FAILURE";

export const PET_CREATED_SUCCESS = "PET_CREATED_SUCCESS";
export const PET_CREATED_FAILURE = "PET_CREATED_FAILURE";

export const PET_DELETED_SUCCESS = "PET_DELETED_SUCCESS";
export const PET_DELETED_FAILURE = "PET_DELETED_FAILURE";

export const getPets = () => ({ type: GET_PETS });

export const getPetsSuccess = (pets) => ({
  type: GET_PETS_SUCCESS,
  payload: pets,
});

export const getPetsFailure = (error) => ({
  type: GET_PETS_FAILURE,
  payload: error,
});

export const fetchEmployeePets = (employee_id) => {
  return async (dispatch) => {
    try {
      dispatch(getPets);
      const success = await fetch(
        `${prefix}/employees/${employee_id}/pets`,
        defaultFetchOptions
      );
      const employeePets = await success.json();
      dispatch(getPetsSuccess(employeePets));
    } catch (error) {
      dispatch(getPetsFailure(error));
    }
  };
};

export const petCreatedSuccess = (pet) => ({
  type: PET_CREATED_SUCCESS,
  payload: pet,
});

export const petCreatedFailure = (error) => ({
  type: PET_CREATED_FAILURE,
  payload: error,
});

export const fetchPostNewPet = (pet) => {
  return async (dispatch) => {
    try {
      const success = await fetch(
        `${prefix}/employees/${pet.employee_id}/pets`,
        {
          ...defaultFetchOptions,
          method: "POST",
          body: JSON.stringify(pet),
        }
      );
      const newPet = await success.json();
      dispatch(petCreatedSuccess(newPet));
    } catch (error) {
      dispatch(petCreatedFailure(error));
    }
  };
};

export const petDeletedSuccess = (pet) => ({
  type: PET_DELETED_SUCCESS,
  payload: pet,
});

export const petDeletedFailure = (error) => ({
  type: PET_DELETED_FAILURE,
  payload: error,
});

export const fetchDeletePet = (employee_id, pet_id) => {
  return async (dispatch) => {
    try {
      const success = await fetch(
        `${prefix}/employees/${employee_id}/pets/${pet_id}`,
        {
          ...defaultFetchOptions,
          method: "DELETE",
        }
      );
      const deletedPet = success.json();
      dispatch(petDeletedSuccess(deletedPet));
    } catch (error) {
      dispatch(petDeletedFailure(error));
    }
  };
};
