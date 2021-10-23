export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}
export type ProductState = {
  products: Product[];
};

export interface ActionProduct {
  type: string;
  payload: Array<Product>;
}

export type DispatchType = (args: ActionProduct) => ActionProduct;
