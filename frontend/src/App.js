import React from 'react';
import Quiz from './quiz';
import { QuizProvider } from './QuizProvider';
import { Wrapper } from './quiz'; // Import the Wrapper styled component

function App() {
  return (
    <Wrapper>
      <QuizProvider>
        {/* <Quiz questions={questions} /> */}
        <Quiz />
      </QuizProvider>
    </Wrapper>
  );
}

export default App;
