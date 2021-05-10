import { combineReducers } from 'redux'
import employeesReducer from './EmployeesReducer'
import interestsReducer from './InterestsReducer'
import petsReducer from './PetsReducer'

const rootReducer = combineReducers({
    employees: employeesReducer,
    interests: interestsReducer,
    pets:      petsReducer
})

export default rootReducer