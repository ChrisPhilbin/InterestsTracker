import { combineReducers } from 'redux'
import interestsReducer from './InterestsReducer'

const rootReducer = combineReducers({
    interests: interestsReducer
})

export default rootReducer