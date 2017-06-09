import { combineReducers } from "redux"

import tweets from "./tweetsReducer"
import user from "./userReducer"
import nameReducer from "./nameReducer"
import loginReducer from "./loginReducer"
import chatReducer from "./chatReducer"

export default combineReducers({
  tweets,
  user,
  nameReducer,
  loginReducer,
  chatReducer
})
