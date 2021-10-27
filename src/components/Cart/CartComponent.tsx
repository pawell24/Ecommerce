import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../models/models";

const CartComponent: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <div>
      <header>
        <StyledHeader>Cart</StyledHeader>
      </header>
      <StyledSection>
        {cart.length > 0 ? (
          cart.map((item) => (
            <StyledCartItem>
              <h2>{item.title}</h2>
              <p>{item.price}$</p>
            </StyledCartItem>
          ))
        ) : (
          <StyledParagraph>Cart is Empty</StyledParagraph>
        )}
      </StyledSection>
    </div>
  );
};

const StyledHeader = styled.h2`
  font-family: sans-serif;
  text-align: center;
  font-size: 40px;
  margin-top: 20px;
`;

const StyledSection = styled.section`
  width: 50vw;
  height: auto;
  margin: 20px auto;
  border: 2px solid #4467fc;
`;

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
export default CartComponent;
