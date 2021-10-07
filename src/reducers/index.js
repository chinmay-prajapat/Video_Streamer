import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import AuthReducer from "./AuthReducer";
import StreamReducer from "./StreamReducer";
export default combineReducers({
  auth: AuthReducer,
  form: formReducer,
  streams: StreamReducer,
});
