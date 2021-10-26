import { ActionProduct, Product } from "../models/models";
import { PRODUCT } from "./enum";

export function addProduct(products: Product[]) {
  const action: ActionProduct = {
    type: PRODUCT.ADD,
    payload: products,
  };
  return action;
}

export function addProductToCart(product: Product) {
  const action: ActionProduct = {
    type: PRODUCT.ADD_TO_CART,
    payload: product,
  };
  return action;
}
