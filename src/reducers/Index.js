import { combineReducers } from "redux";
import alertsReducer from "./AlertsReducer";
import employeesReducer from "./EmployeesReducer";
import interactionsReducer from "./InteractionsReducer";
import interestsReducer from "./InterestsReducer";
import newsfeedReducer from "./NewsfeedsReducer";
import petsReducer from "./PetsReducer";
import sportsReducer from "./SportsReducer";
import notesReducer from "./NotesReducer";

const rootReducer = combineReducers({
  alerts: alertsReducer,
  employees: employeesReducer,
  interactions: interactionsReducer,
  interests: interestsReducer,
  newsfeeds: newsfeedReducer,
  pets: petsReducer,
  sports: sportsReducer,
  notes: notesReducer,
});

export default rootReducer;
