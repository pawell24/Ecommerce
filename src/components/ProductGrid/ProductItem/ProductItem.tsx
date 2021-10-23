import React from "react";
import styled from "styled-components";
import { Product } from "../../../models/models";

const ProductItem: React.FC<Product> = ({ title, image, price }) => {
  return (
    <StyledProductContainer>
      <StyledImg src={image} alt={title} width={150} />
      <div>
        <h2>{title}</h2>
        <p>Price:{price}$</p>
        <a href="/">See more</a>
      </div>
    </StyledProductContainer>
  );
};

const StyledProductContainer = styled.div`
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 2px 6px 0 rgba(0, 0, 0, 0.2);
  margin: 20px;
  padding: 15px;
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-height: 400px;
`;
const StyledImg = styled.img`
  max-height: 200px;
  width: 150px;
`;

export default ProductItem;
