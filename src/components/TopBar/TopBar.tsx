import React, { useState } from "react";
import styled from "styled-components";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Menu from "../Menu/Menu";
import { NavLink } from "react-router-dom";

export interface Subsite {
  name: string;
  routes: string;
}

const NavBar: React.FC = () => {
  const [isVisble, setVisble] = useState(false);

  const subSites: Array<Subsite> = [
    { name: "Shop", routes: "/shop" },
    { name: "Cart", routes: "/cart" },
    { name: "My Orders", routes: "/my-orders" },
  ];

  const setVisibleHandler = (): void => {
    setVisble(!isVisble);
  };

  return (
    <>
      <StyledNavBar>
        <StyledMenuRoundedIcon
          color="primary"
          fontSize="large"
          onClick={setVisibleHandler}
        />
        <NavLink to="/cart">
          <StyledShoppingCartIcon color="primary" fontSize="large" />
        </NavLink>
        {isVisble && <Menu subsites={subSites} />}
      </StyledNavBar>
    </>
  );
};

const StyledNavBar = styled.header`
  width: 100%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  height: 10vh;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  justify-content: space-between;
  z-index: 10;
  background-color: white;
`;

const StyledMenuRoundedIcon = styled(MenuRoundedIcon)`
  margin: 0px 20px;
  cursor: pointer;
`;

const StyledShoppingCartIcon = styled(ShoppingCartIcon)`
  margin: 0px 20px;
  cursor: pointer;
`;

export default NavBar;
