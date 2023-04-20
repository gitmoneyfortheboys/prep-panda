import React from 'react';
import Quiz from './quiz';
import { QuizProvider } from './QuizProvider';
import { Wrapper } from './quiz';
import BottomNavBar from './BottomNavBar';

function App() {
  return (
    <Wrapper>
      <QuizProvider>
        <Quiz />
      </QuizProvider>
      <BottomNavBar />
    </Wrapper>
  );
}

export default App;
