import { combineReducers } from 'redux'
import {reducer} from "./Reducer1"
import {Authreducer} from "./Reducer2";
 const rootReducer = combineReducers({
  reducer,
  Authreducer


})
export default rootReducer;