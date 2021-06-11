import * as actions from "../actions/PetActions";

export const initialInterestsState = {
  pets: [],
  loading: false,
  hasErrors: false,
};

export default function petssReducer(state = initialInterestsState, action) {
  switch (action.type) {
    case actions.GET_PETS: {
      return { ...state, loading: true };
    }
    case actions.GET_PETS_SUCCESS: {
      return { ...state, loading: false, pets: action.payload };
    }
    case actions.GET_PETS_FAILURE: {
      return { ...state, loading: false, hasErrors: true };
    }
    case actions.PET_CREATED_SUCCESS: {
      return {
        ...state,
        loading: false,
        pets: state.pets.concat(action.payload),
      };
    }
    case actions.PET_CREATED_FAILURE: {
      return { ...state, loading: false, hasErrors: true };
    }
    case actions.PET_DELETED_SUCCESS: {
      return {
        pets: state.pets.filter((pet) => pet.name !== action.payload.name),
      };
    }
    default:
      return state;
  }
}
