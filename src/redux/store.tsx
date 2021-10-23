import { createStore, Store } from "redux";
import { ActionProduct, ProductState, DispatchType } from "../models/models";
import { productReducer } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

export const store: Store<ProductState, ActionProduct> & {
  dispatch: DispatchType;
} = createStore(productReducer, composeWithDevTools());
