import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Product } from "../../models/models";

const CartProduct: React.FC<Product> = ({ title, price }) => {
  return (
    <>
      <StyledCartItem>
        <StyledParagraph>{title}</StyledParagraph>
        <StyledParagraph>{price}$</StyledParagraph>
        <Button>Remove</Button>
      </StyledCartItem>
    </>
  );
};

const StyledCartItem = styled.div`
  font-family: sans-serif;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const StyledParagraph = styled.h2`
  text-align: center;
  font-family: sans-serif;
  padding: 10px;
`;

export default CartProduct;
