import { SUBMIT_SEARCH, NEW_SEARCH_DATA, ERROR_SEARCH } from "../action-types";
import { takeLatest, call, put, select } from "redux-saga/effects";
import * as api from "../server";

export default function* watchGetItems() {
  yield takeLatest(SUBMIT_SEARCH, searchItems);
}
// worker saga
export function* searchItems() {
  try {
    const searchValue = yield select((state) => state.search.inputValue);
    const items = yield call(api.query, "meal", { name: searchValue });
    yield put({
      type: NEW_SEARCH_DATA,
      payload: items
    });
  } catch (e) {
    yield put({
      type: ERROR_SEARCH,
      error: e
    });
  }
}
