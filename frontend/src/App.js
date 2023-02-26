import React from 'react';
import Quiz from './quiz';
import { QuizProvider } from './QuizProvider';
import questions from './questions';



function App() {

  return (
    <div>

      {/* <Quiz questions={questions} /> */}
      <QuizProvider>
        <Quiz questions={questions} />
      </QuizProvider>
    </div>
  );
}


export default App;
