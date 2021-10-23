import { ActionProduct, Product } from "../models/models";
import { ADD_PRODUCTS } from "./constans";

export function addProduct(products: Product[]) {
  const action: ActionProduct = {
    type: ADD_PRODUCTS,
    payload: products,
  };

  return action;
}
