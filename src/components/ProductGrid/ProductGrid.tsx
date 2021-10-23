import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../models/models";
import ProductItem from "./ProductItem/ProductItem";

const ProductGrid: React.FC = () => {
  const products = useSelector((state: RootState) => state.products);
  useEffect(() => {
    console.log(products);
  }, [products]);
  const productTemplate: Array<JSX.Element> = products.map((product) => (
    <ProductItem {...product} />
  ));
  return <section>{productTemplate}</section>;
};

export default ProductGrid;
