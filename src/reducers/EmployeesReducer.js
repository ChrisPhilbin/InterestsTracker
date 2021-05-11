import * as actions from '../actions/EmployeeActions'

export const initialEmployeesState = {
    employees: [],
    employee: {},
    loading: false,
    hasErrors: false
}

export default function employeesReducer(state = initialEmployeesState, action) {
    switch (action.type) {
        case actions.GET_EMPLOYEES: 
            return { ...state, loading: true }
        case actions.GET_EMPLOYEES_SUCCESS:
            return { ...state, loading: false, employees: action.payload }
        case actions.GET_EMPLOYEES_FAILURE:
            return { ...state, loading: false, hasErrors: true }
        case actions.GET_ONE_EMPLOYEE:
            return { ...state, loading: true }
        case actions.GET_ONE_EMPLOYEE_SUCCESS:
            return { ...state, loading: false, employee: action.payload }
        case actions.GET_ONE_EMPLOYEE_FAILURE:
            return { ...state, loading: false, hasErrors: true }
        case actions.EMPLOYEE_CREATED_SUCCESS:
            return { ...state, loading: false, employee: action.payload }
        case actions.EMPLOYEE_CREATED_FAILURE:
            return { ...state, loading: false, hasErrors: true }
        case actions.EMPLOYEE_DELETED_SUCCESS:
            return { employees: state.employees.filter(employee => employee.name !== action.payload.name) }
        default:
            return state
    }
}
