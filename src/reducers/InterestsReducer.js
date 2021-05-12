import * as actions from '../actions/InterestActions'

export const initialInterestsState = {
    interests: [],
    loading: false,
    hasErrors: false
}

export default function interestsReducer(state = initialInterestsState, action) {
    switch (action.type) {
        case actions.GET_INTERESTS: {
            return {...state, loading: true }
        }
        case actions.GET_INTERESTS_SUCCESS: {
            return {...state, loading: false, interests: action.payload }
        }
        case actions.GET_INTERESTS_FAILURE: {
            return {...state, loading: false, hasErrors: true }
        }
        case actions.CREATE_INTEREST_SUCCESS: {
            return {...state, loading: false, interest: state.interests.concat(action.payload) }
        }
        case actions.CREATE_INTEREST_FAILURE: {
            return {...state, loading: false, hasErrors: true }
        }
        default:
            return state
    }
}
