import { ERROR_SEARCH, SUBMIT_SEARCH, CHANGE_SEARH, NEW_SEARCH_DATA } from "../action-types";

export const changeSearch = (evt) => ({
  type: CHANGE_SEARH,
  payload: { value: evt.target.value }
});

export const submitSearch = () => ({
  type: SUBMIT_SEARCH
});
