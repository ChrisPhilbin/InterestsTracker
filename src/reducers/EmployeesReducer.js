import * as actions from '../actions/EmplyeeActions'

export const initialEmployeesState = {
    employees: [],
    loading: false,
    hasErrors: false
}

export default function employeesReducer(state = initialEmployeesState, action) {
    switch (action.type) {
        case actions.GET_EMPLOYEESS: {
            return {...state, loading: true }
        }
        case actions.GET_EMPLOYEES_SUCCESS: {
            return {...state, loading: false, employees: [action.payload] }
        }
        case actions.GET_EMPLOYEES_FAILURE: {
            return {...state, loading: false, hasErrors: true }
        }
        default:
            return state
    }
}
