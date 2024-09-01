import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { productReducer } from "./product";
// import { creatorReducer } from "./creator";

export default combineReducers({
  auth: authReducer,
  productReducer
  // creator: creatorReducer,
});
