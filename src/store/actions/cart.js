import { INCREMENT_CART_ITEM, DECREMENT_CART_ITEM, DROP_CART_ITEM } from "../action-types";

export const IncrementItem = (id) => ({
  type: INCREMENT_CART_ITEM,
  payload: {
    id
  }
});

export const DecrementItem = (id) => ({
  type: DECREMENT_CART_ITEM,
  payload: {
    id
  }
});
export const DropItem = (id) => ({
  type: DROP_CART_ITEM,
  payload: {
    id
  }
});
