import styled from "styled-components";
import React from "react";
import { Subsite } from "../TopBar/TopBar";
import { NavLink } from "react-router-dom";

interface MenuProps {
  subsites: Array<Subsite>;
}

const Menu: React.FC<MenuProps> = ({ subsites }) => {
  const links: Array<JSX.Element> = subsites.map((subsite) => (
    <StyledLink
      activeStyle={{
        fontWeight: "bold",
        color: "#1876d1",
      }}
      to={subsite.routes}
    >
      {subsite.name}
    </StyledLink>
  ));
  return (
    <StyledMenu>
      <StyledDivLinkContainer>{links}</StyledDivLinkContainer>
    </StyledMenu>
  );
};

const StyledMenu = styled.aside`
  width: 30%;
  height: 90vh;
  position: fixed;
  bottom: 0;
  border-right: 4px solid #1876d1;
  background-color: white;
  @media (max-width: 1024px) {
    width: 100%;
    border-right: 5px solid #1876d1;
  } ;
`;

const StyledDivLinkContainer = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20%;
`;

const StyledLink = styled(NavLink)`
  font-family: sans-serif;
  text-decoration: none;
  color: gray;
  font-size: 25px;
  margin-top: 10px;
  outline: none;
`;
export default Menu;
