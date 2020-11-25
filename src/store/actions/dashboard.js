import { LOAD_USER_DASHBOARD, LOAD_MORE_USER_DASHBOARD } from "../action-types";

export const loadData = () => ({ type: LOAD_USER_DASHBOARD });
export const loadMoreData = (param) => ({ type: LOAD_MORE_USER_DASHBOARD });
