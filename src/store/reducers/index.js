import { combineReducers } from "redux";
import user from "./user";
import search from "./search";
import cart from "./cart";
import dashboard from "./dashboard";

const reducers = combineReducers({
  user,
  search,
  cart
  dashboard
});

export default reducers;
