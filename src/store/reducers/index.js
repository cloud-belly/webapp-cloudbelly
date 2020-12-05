import { combineReducers } from "redux";
import user from "./user";
import search from "./search";
import cart from "./cart";

const reducers = combineReducers({
  user,
  search,
  cart
});

export default reducers;
