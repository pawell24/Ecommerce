import { createStore, Store } from "redux";
import { ActionProduct, DispatchType, RootState } from "../models/models";
import { productReducer } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

export const store: Store<RootState, ActionProduct> & {
  dispatch: DispatchType;
} = createStore(productReducer, composeWithDevTools());
