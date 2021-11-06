import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../models/models";
import CartProduct from "./CartProduct";

const CartComponent: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <div>
      <header>
        <StyledHeader>Cart</StyledHeader>
      </header>
      <StyledSection>
        {cart.length > 0 ? (
          cart.map((item) => <CartProduct {...item} />)
        ) : (
          <StyledHeader>Cart is empty</StyledHeader>
        )}
      </StyledSection>
      <StyledButton>Proceed to Checkout</StyledButton>
    </div>
  );
};
const StyledHeader = styled.h2`
  font-family: sans-serif;
  text-align: center;
  font-size: 40px;
  margin: 20px;
`;
const StyledSection = styled.section`
  width: 50vw;
  height: auto;
  margin: 20px auto;
  border: 2px solid #4467fc;
`;

const StyledButton = styled.button`
  padding: 12px;
  color: white;
  border: none;
  background-color: #182ac3;
  cursor: pointer;
  margin-left: 75%;
`;

export default CartComponent;
