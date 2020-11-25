import { produce } from "immer";
import _ from "lodash";

import {
  ERROR_LOAD_DASHBOARD,
  ERROR_LOAD_MORE_DASHOARD,
  LOAD_USER_DASHBOARD,
  LOAD_MORE_USER_DASHBOARD,
  RECEIVED_DASHBOARD_DATA
} from "../action-types";

const initialState = {
  data: [
    {
      seller: {
        name: "KFC",
        logo: "http://logo.kfc"
      },
      picture: "http://meal.img",
      name: "Big burger",
      price: 250,
      discount: "GET 10% CASHBACK UPTO Rs 50",
      likesNumber: 528,
      commentsNumber: 498
    }
  ],
  request: {
    isLoading: false,
    isLoadingMore: false,
    error: null,
    errorLoadMore: null
  }
};

export default function DashboardStateReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USER_DASHBOARD: {
      return produce(state, (draftState) => {
        draftState.request.isLoading = true;
      });
    }
    case LOAD_MORE_USER_DASHBOARD: {
      return produce(state, (draftState) => {
        draftState.request.isLoadingMore = true;
        draftState.request.error = null;
        draftState.request.errorLoadMore = null;
      });
    }
    case RECEIVED_DASHBOARD_DATA: {
      return produce(state, (draftState) => {
        draftState.data = [ ...draftState.data, ...action.payload.data ];
        draftState.request = {
          isLoading: false,
          isLoadingMore: false,
          error: null,
          errorLoadMore: null
        };
      });
    }
    case ERROR_LOAD_DASHBOARD: {
      return produce(state, (draftState) => {
        draftState.request = {
          isLoading: false,
          error: action.error
        };
      });
    }
    case ERROR_LOAD_MORE_DASHOARD: {
      return produce(state, (draftState) => {
        draftState.request = {
          isLoadingMore: false,
          errorLoadMore: action.error
        };
      });
    }
    default:
      return state;
  }
}
