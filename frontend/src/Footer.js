import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledFooter = styled.footer`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background-colour);
  position: fixed;
  bottom: 0;
  left: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--primary-colour);
  &:hover {
    color: var(--secondary-colour));
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledLink to="/contact">Get Support</StyledLink>
    </StyledFooter>
  );
};

export default Footer;
