import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../models/models";
import ProductItem from "./ProductItem/ProductItem";

const ProductGrid: React.FC = () => {
  const products = useSelector((state: RootState) => state.products);
  useEffect(() => {
    console.log(products);
  }, [products]);
  const productTemplate: Array<JSX.Element> = products!.map((product) => (
    <ProductItem {...product} />
  ));
  return <StyledProductContainer>{productTemplate}</StyledProductContainer>;
};

const StyledProductContainer = styled.section`
  margin-top: 12vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
`;
export default ProductGrid;
