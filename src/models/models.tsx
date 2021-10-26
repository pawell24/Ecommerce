export interface Product {
  id: number;
  title: string;
  price: number;
  description?: string;
  category?: string;
  image?: string;
}
export interface RootState {
  products: Product[];
  cart: Product[];
}

export interface ActionProduct {
  type: String;
  payload: any;
}

export type DispatchType = (args: ActionProduct) => ActionProduct;
