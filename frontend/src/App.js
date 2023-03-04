import React from 'react';
import Quiz from './quiz';
import { QuizProvider } from './QuizProvider';



function App() {

  return (
    <div>

      {/* <Quiz questions={questions} /> */}
      <QuizProvider>
        <Quiz />
      </QuizProvider>
    </div>
  );
}


export default App;
