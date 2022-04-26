import { combineReducers } from 'redux'
import {reducer} from "./reducer"
import {Authreducer} from "./Authreducer";
 const rootReducer = combineReducers({
  reducer,
  Authreducer


})
export default rootReducer;