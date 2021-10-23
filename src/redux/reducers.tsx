import { ActionProduct, ProductState } from "../models/models";
import { ADD_PRODUCTS } from "./constans";

const initialState = {
  products: [],
};

export const productReducer = (
  state: ProductState = initialState,
  { type, payload }: ActionProduct
) => {
  switch (type) {
    case ADD_PRODUCTS:
      return { products: [...payload] };

    default:
      return state;
  }
};
