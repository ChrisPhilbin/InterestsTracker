import { combineReducers } from 'redux'
import employeesReducer from './EmployeesReducer'
import interestsReducer from './InterestsReducer'
import petsReducer from './PetsReducer'
import sportsReducer from './SportsReducer'

const rootReducer = combineReducers({
    employees: employeesReducer,
    interests: interestsReducer,
    pets:      petsReducer,
    sports:    sportsReducer
})

export default rootReducer