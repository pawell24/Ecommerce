import { ActionProduct, RootState } from "../models/models";
import { ADD_PRODUCTS } from "./constans";

const initialState = {
  products: [],
};

export const productReducer = (
  state: RootState = initialState,
  { type, payload }: ActionProduct
) => {
  switch (type) {
    case ADD_PRODUCTS:
      return { products: [...payload] };

    default:
      return state;
  }
};
