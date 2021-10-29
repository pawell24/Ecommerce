import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Product } from "../../models/models";
import { removeProductFromCart } from "../../redux/actionCreators";

const CartProduct: React.FC<Product> = ({ id, title, price }) => {
  const dispatch = useDispatch();
  const handleButtonRemove = () => {
    dispatch(removeProductFromCart(id));
  };
  return (
    <>
      <StyledCartItem>
        <StyledParagraph>{title}</StyledParagraph>
        <StyledParagraph>{price}$</StyledParagraph>
        <Button onClick={handleButtonRemove}>Remove</Button>
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
