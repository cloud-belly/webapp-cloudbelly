import { produce } from "immer";
import _ from "lodash";

export default function UserStateReducer(state = {}, action) {
  switch (action.type) {
    case "ADD_ITEM_TO_APP_STATE": {
      return produce(state, (draftState) => {
        draftState.data[action.key] = action.value;
      });
    }
    default:
      return state;
  }
}
