import { combineReducers } from "redux";
import user from "./user";
import search from "./search";

const reducers = combineReducers({
  user,
  search
});

export default reducers;
