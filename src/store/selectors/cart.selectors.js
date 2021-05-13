import { createSelector } from "reselect";

export const getCartItemById = () => {
  return createSelector(
    (state, itemId) => state.cart.products.find((product) => product && itemId && +product.id === +itemId),
    (item) => {
      if (item) {
        return item;
      }
      return {};
    }
  );
};
