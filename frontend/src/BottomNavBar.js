import React from 'react';
import styled from 'styled-components';

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #D7F2F3; // Change this to your desired background color
  border-top: 1px solid #3873FF;
`;

const NavItem = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 1rem;
  font-weight: bold;
`;

function BottomNavBar() {
  return (
    <NavBarContainer>
      <NavItem href="#">Home</NavItem>
      <NavItem href="#">Progress</NavItem>
      <NavItem href="#">Account</NavItem>
    </NavBarContainer>
  );
}

export default BottomNavBar;
