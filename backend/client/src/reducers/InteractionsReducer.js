import * as actions from '../actions/InteractionActions'

export const initialInteractionsState = {
    interactions: [],
    loading: false,
    hasErrors: false
}

export default function interactionsReducer(state =initialInteractionsState, action) {
    switch(action.type) {
        case actions.GET_INTERACTIONS:
            return { ...state, loading: true }
        case actions.GET_INTERACTIONS_SUCCESS:
            return { ...state, loading: false, interactions: action.payload }
        case actions.GET_INTERACTIONS_FAILURE:
            return { ...state, loading: false, hasErrors: true }
        case actions.INTERACTION_DELETED_SUCCESS:
            return { interactions: state.interactions.filter(interaction => interaction.id !== action.payload.id) }
        default:
            return state
    }
}