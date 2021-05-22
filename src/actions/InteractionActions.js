export const GET_INTERACTIONS         = "GET_INTERACTIONS"
export const GET_INTERACTIONS_SUCCESS = "GET_INTERACTIONS_SUCCESS"
export const GET_INTERACTIONS_FAILURE = "GET_INTERACTIONS_FAILURE"

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