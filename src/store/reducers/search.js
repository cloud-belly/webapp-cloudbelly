import { produce } from "immer";
import _ from "lodash";

import { ERROR_SEARCH, CHANGE_SEARH, NEW_SEARCH_DATA } from "../action-types";

const initialState = {
  data: [],
  inputValue: "",
  request: {
    isLoading: false,
    error: null
  }
};

// return {
//...state,
//  inputValue: action.value
//}consumer, producer

export default function SearchStateReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SEARH: {
      return produce(state, (draftState) => {
        draftState.inputValue = action.payload.value;
      });
    }
    case NEW_SEARCH_DATA: {
      return produce(state, (draftState) => {
        draftState.data = action.payload.data;
        draftState.request = {
          isLoading: false,
          error: null
        };
      });
    }
    case ERROR_SEARCH: {
      return produce(state, (draftState) => {
        draftState.request = {
          isLoading: false,
          error: action.error
        };
      });
    }
    default:
      return state;
  }
}
