import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// New styled-components
const SubjectsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const SubjectBox = styled.div`
  width: 244px;
  height: 254px;
  border: 1px solid #3873FF;
  border-radius: 8px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(0,0,0,0.2);
  }
  
  /* Adjust for mobile devices */
  @media (max-width: 768px) {
    width: 90%;
    margin: 10px auto;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

function HomePage() {
  return (
    <div>
      <h1>Subjects</h1>
      <SubjectsContainer>
        <StyledLink to="/quiz"><SubjectBox>Mathematics</SubjectBox></StyledLink>
        <StyledLink to="/quiz"><SubjectBox>Reading</SubjectBox></StyledLink>
        <StyledLink to="/quiz"><SubjectBox>Thinking Ability</SubjectBox></StyledLink>
        <StyledLink to="/quiz"><SubjectBox>Writing</SubjectBox></StyledLink>
      </SubjectsContainer>
    </div>
  );
}

export default HomePage;
