import { produce } from "immer";
import _ from "lodash";

import { INCREMENT_CART_ITEM, DROP_CART_ITEM, DECREMENT_CART_ITEM } from "../action-types";

const initialState = {
  products: [
    {
      id: 0,
      name: "Icecream",
      rating: 3,
      image: "",
      number: 1,
      price: 10,
      description: "lorem Ipsum ufia nuih iuhfu hfsiu",
      url: "https://images-na.ssl-images-amazon.com/images/I/816fOeamMBL._AC_SX522_.jpg"
    },
    {
      id: 1,
      name: "Choclate",
      rating: 4,
      image: "",
      number: 1,
      price: 15,
      description: "lorem Ipsum ufia nuih iuhfu hfsiu",
      url: "https://images-na.ssl-images-amazon.com/images/I/816fOeamMBL._AC_SX522_.jpg"
    },
    {
      id: 2,
      name: "Green Salad",
      rating: 4,
      image: "",
      number: 1,
      price: 20,
      description: "lorem Ipsum ufia nuih iuhfu hfsiu",
      url: "https://images-na.ssl-images-amazon.com/images/I/816fOeamMBL._AC_SX522_.jpg"
    },
    {
      id: 3,
      name: "Pastry",
      rating: 5,
      image: "",
      number: 1,
      price: 25,
      description: "lorem Ipsum ufia nuih iuhfu hfsiu",
      url: "https://images-na.ssl-images-amazon.com/images/I/816fOeamMBL._AC_SX522_.jpg"
    }
  ]
};

export default function CartReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_CART_ITEM:
      return produce(state, (draftState) => {
        const productIndex = draftState.products.findIndex((product) => product.id === action.payload.id);
        draftState.products[productIndex].number += 1;
      });
    case DECREMENT_CART_ITEM:
      return produce(state, (draftState) => {
        const productIndex = draftState.products.findIndex((product) => product.id === action.payload.id);
        draftState.products[productIndex].number -= 1;
      });

    case DROP_CART_ITEM:
      return produce(state, (draftState) => {
        const productIndex = draftState.products.findIndex((product) => product.id === action.payload.id);
        draftState.products.splice(productIndex, 1);
      });

    default:
      return state;
  }
}
