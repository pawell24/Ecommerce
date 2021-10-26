import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Product } from "../../../models/models";
import { addProductToCart } from "../../../redux/actionCreators";

const ProductItem: React.FC<Product> = ({ id, title, image, price }) => {
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    dispatch(addProductToCart({ id, title, price }));
  };
  return (
    <StyledProductContainer>
      <StyledImg src={image} alt={title} width={150} />
      <div>
        <StyledHeader>{title}</StyledHeader>
        <p>Price:{price}$</p>
        <Button color="secondary" onClick={handleButtonClick}>
          Buy
        </Button>
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
  width: 26%;
`;
const StyledImg = styled.img`
  max-height: 200px;
  min-width: 150px;
  padding: 10px;
  margin-bottom: 10px;
`;

const StyledHeader = styled.h2`
  font-size: 15px;
`;

export default ProductItem;
