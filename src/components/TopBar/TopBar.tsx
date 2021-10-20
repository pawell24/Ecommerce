import React from "react";
import styled from "styled-components";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const NavBar: React.FC = () => {
  return (
    <>
      <StyledNavBar>
        <StyledMenuRoundedIcon color="primary" fontSize="large" />
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
  justify-content: space-between;
`;

const StyledMenuRoundedIcon = styled(MenuRoundedIcon)`
  margin: 0px 20px;
  cursor: pointer;
`;

export default NavBar;
