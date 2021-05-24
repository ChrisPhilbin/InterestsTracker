export const GET_INTERACTIONS         = "GET_INTERACTIONS"
export const GET_INTERACTIONS_SUCCESS = "GET_INTERACTIONS_SUCCESS"
export const GET_INTERACTIONS_FAILURE = "GET_INTERACTIONS_FAILURE"

export const INTERACTION_CREATED_SUCCESS = "INTERACTION_CREATED_SUCCESS"
export const INTERACTION_CREATED_FAILURE = "INTERACTION_CREATED_FAILURE"

export const getInteractions = () => (
    { type: GET_INTERACTIONS }
)

export const getInteractionsSucess = (interaction) => (
    { type: GET_INTERACTIONS_SUCCESS, payload: interaction}
)

export const getInteractionsFailure = (error) => (
    { type: GET_INTERACTIONS_FAILURE, payload: error }
)

export const fetchEmployeeInteractions = (employee_id) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`http://localhost:3001/employees/${employee_id}/interactions`)
            const interactions = await response.json()
            dispatch(getInteractionsSucess(interactions))
        } catch (error) {
            dispatch(getInteractionsFailure(error))
        }
    }
}

export const interactionCreatedSuccess = (interaction) => (
    { type: INTERACTION_CREATED_SUCCESS, payload: interaction }
)

export const interactionCreatedFailure = (error) => (
    { type: INTERACTION_CREATED_FAILURE, payload: error }
)

export const fetchPostNewInteraction = (interaction) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`http://localhost:3001/employees/${interaction.employee_id}/interactions`, {
                method: 'POST',
                body: JSON.stringify(interaction),
                headers: { 'Content-Type':'application/json'}
            })
            const newInteraction = await response.json()
            dispatch(interactionCreatedSuccess(newInteraction))
        } catch (error) {
            dispatch(interactionCreatedFailure(error))
        }
    }
}