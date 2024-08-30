import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { creatorReducer } from "./creator";

export default combineReducers({
  auth: authReducer,
  creator: creatorReducer,
});
