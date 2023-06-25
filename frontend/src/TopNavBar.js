import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from './resources/logo.png'; // Replace with actual logo file path

const NavBarContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 59px;
  background-color: var(--background-color);
  border-bottom: 1px solid lightgray;
  padding: 0 10px; // Padding around the content
  box-sizing: border-box;
`;

const NavButtonContainer = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%; // Take up the full height of the NavBar
  color: #333; // Text color
  font-size: 1rem;
  font-weight: 400; // Setting a lighter font weight
  font-family: 'Roboto', sans-serif; // Setting the font family to regular Roboto
  margin-left: 40px; // Left margin for creating space between items
  text-decoration: none;
  
  &:first-child {
    margin-left: 50px; // Increase left margin for the first item
  }

  &:hover {
    color: var(--primary-colour);
  }
`;


const LogoContainer = styled.div`
  width: 82px;
  height: 59px;
  background-image: url(${Logo});
  background-size: cover;
  background-position: center;
`;

function TopNavBar() {
  return (
    <NavBarContainer>
      <LogoContainer />
      <NavButtonContainer to="/">Subjects</NavButtonContainer>
      <NavButtonContainer to="/progress">Progress</NavButtonContainer>
    </NavBarContainer>
  );
}

export default TopNavBar;
