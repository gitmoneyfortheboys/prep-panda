import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './quiz';
import styled from 'styled-components';

const StartButton = styled(Button)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link to="/quiz">
        <StartButton as="div">Start Quiz</StartButton>
      </Link>
    </div>
  );
}

export default HomePage;
