import { all } from "redux-saga/effects";
import searchSaga from "./searchSaga";

export default function* rootSaga(getState) {
  yield all([searchSaga()]);
}
