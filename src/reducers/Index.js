import { combineReducers } from 'redux'
import employeesReducer from './EmployeesReducer'
import interestsReducer from './InterestsReducer'

const rootReducer = combineReducers({
    employees: employeesReducer,
    interests: interestsReducer
})

export default rootReducer