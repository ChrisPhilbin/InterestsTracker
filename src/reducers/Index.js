import { combineReducers } from 'redux'
import employeesReducer from './EmployeesReducer'
import interestsReducer from './InterestsReducer'
import newsfeedReducer from './NewsfeedsReducer'
import petsReducer from './PetsReducer'
import sportsReducer from './SportsReducer'
import notesReducer from './NotesReducer'

const rootReducer = combineReducers({
    employees: employeesReducer,
    interests: interestsReducer,
    newsfeeds: newsfeedReducer,
    pets:      petsReducer,
    sports:    sportsReducer,
    notes:     notesReducer
})

export default rootReducer