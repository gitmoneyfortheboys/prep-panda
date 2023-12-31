import React, { useContext } from 'react';
import styled from 'styled-components';
import { QuizContext } from './QuizProvider';
import './styles.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 20px;
  border: 1px solid var(--primary-colour);
  border-radius: 8px;
  /* Apply vertical layout for mobile devices */
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

/* Question */
const Question = styled.h2`
  margin-bottom: 10px;
  /* Adjust the typography for mobile devices */
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

/* Button */
const Button = styled.button`
  padding: 10px;
  background-color: ${(props) => (props.selected ? '#0077cc' : '#fff')};
  color: black; // Text color always black
  border: 1px solid lightgrey; // Changed border color to lightgrey
  border-radius: 2px; // Reduced border radius
  margin: 5px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;

  &:hover {
    border-color: var(--primary-colour); // Change the border color on hover
    // No background color change on hover
  }

  &:active {
    background-color: var(--secondary-colour); // Use secondary color on active
    border-color: var(--secondary-colour); // Change the border color on active
  }

  &:focus {
    outline: none;  // Removes the outline
    border-color: var(--primary-colour); // Change the border color on focus
  }

  &:disabled {
    background-color: #ccc; // Grayed out when disabled
    color: #888;
    border: 1px solid #aaa;
    cursor: not-allowed;
  }

  /* Adjust the typography for mobile devices */
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;



const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: var(--background-colour);
  padding-top: 59px; // This offsets your content below the header
  padding-bottom: 59px; // Add bottom padding to account for footer
`;


const QuizButton = styled(Button)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 12px 16px;
  min-width: 538px;
  min-height: 50px;
  text-align: left;
  font-size: 16px;

  &:hover,
  &:focus,

  /* Adjust the typography for mobile devices */
  @media (max-width: 768px) {
    min-width: auto;
    width: 100%;
  }
`;


export { Wrapper, Button , QuizButton};

const Feedback = styled.div`
  margin-top: 20px;
  font-size: 1rem;
`;

const AnswerButton = ({
  answerText,
  answerKey,
  selectedAnswer,
  handleAnswerSelection,
  isAnswered,
}) => {
  const isSelected = selectedAnswer === answerKey;

  return (
    <QuizButton
      type="button"
      onClick={(e) => handleAnswerSelection(e, answerKey)}
      selected={isSelected}
      disabled={isAnswered}
    >
      <span>{answerKey}:</span> <span>{answerText}</span>
    </QuizButton>
  );
};  

function Quiz() {
    const { quizState, dispatch } = useContext(QuizContext);
    const { currentQuestion, answers, score } = quizState;
    const question = quizState.questions[currentQuestion];

    const handleAnswerSelection = (e, answer) => {
        dispatch({ type: 'SELECT_ANSWER', payload: { id: question.id, answer } });
        handleSubmit(e, answer);
    };

    const handleSubmit = (e, selectedAnswer) => {
        e.preventDefault();
        const isCorrect = selectedAnswer === question.correctAnswer
        dispatch({ type: 'SET_ANSWER_FEEDBACK', payload: { id: question.id, isCorrect } });
        dispatch({ type: 'SET_ANSWERED', payload: true})
      };

    const handleNextQuestion = () => {
      const nextQuestionIndex = currentQuestion + 1 < quizState.questions.length ? currentQuestion + 1 : 0;
        dispatch({ type: 'SET_CURRENT_QUESTION', payload: nextQuestionIndex });
        dispatch({ type: 'SET_ANSWERED', payload: false });
        dispatch({ type: 'REMOVE_ANSWER', payload: quizState.questions[currentQuestion].id });
    };
    
    if (quizState.questions.length === 0) {
        return <div>Loading questions...</div>;
    }

    return (
        <Container>
            <div>Score: {score}</div>
            {question ? (
                <div>
                    <Question>{question.questionText}</Question>
                    <form onSubmit={handleSubmit}>
                        {Object.entries(question.answers).map(([key, value]) => (
                            <AnswerButton
                                key={key}
                                answerKey={key}
                                answerText={value}
                                selectedAnswer={answers[question.id]}
                                handleAnswerSelection={handleAnswerSelection}
                                isAnswered={quizState.answered}
                            />
                        ))}
                    </form>
                    {answers[question.id] && (
                        <Feedback>
                            {answers[question.id].answer === question.correctAnswer ? (
                                <div>
                                    <p>Correct!</p>
                                    {currentQuestion < quizState.questions.length ? (
                                        <Button onClick={handleNextQuestion}>Next question</Button>
                                    ) : (
                                        <p>You've finished the quiz!</p>
                                    )}
                                </div>
                            ) : (
                                <div>
                                    <p>Incorrect.</p>
                                    <p>{question.explanation}</p>
                                    <Button onClick={handleNextQuestion}>Next question</Button>
                                </div>
                            )}
                        </Feedback>
                    )}
                </div>
            ) : (
                <div>Quiz complete!</div>
            )}
        </Container>
    );
}

export default Quiz;
