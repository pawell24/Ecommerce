import { ActionProduct, RootState } from "../models/models";
import { PRODUCT } from "./enum";

const initialState = {
  products: [],
  cart: [],
};

export const productReducer = (
  state: RootState = initialState,
  { type, payload }: ActionProduct
) => {
  switch (type) {
    case PRODUCT.ADD:
      return { ...state, products: payload };
    case PRODUCT.ADD_TO_CART:
      return { ...state, cart: [...state.cart, payload] };
    case PRODUCT.REMOVE_FROM_CART:
      return {
        ...state,
        cart: [...state.cart.filter((item) => item.id !== payload)],
      };
    default:
      return state;
  }
};
