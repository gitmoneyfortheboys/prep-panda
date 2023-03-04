import React, { useContext } from 'react';
import styled from 'styled-components';
import { QuizContext } from './QuizProvider';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Question = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 1rem;
  background-color: ${(props) => (props.selected ? '#0077cc' : '#fff')};
  color: ${(props) => (props.selected ? '#fff' : '#0077cc')};
  border: 1px solid #0077cc;
  border-radius: 8px;
  margin: 5px;
  cursor: pointer;
`;

const Feedback = styled.div`
  margin-top: 20px;
  font-size: 1rem;
`;

const AnswerButton = ({ answerText, answerKey, selectedAnswer, handleAnswerSelection }) => {
    const isSelected = selectedAnswer === answerKey;

    return (
        <Button
            type="button"
            onClick={(e) => handleAnswerSelection(e, answerKey)}
            selected={isSelected}
        >
            {answerKey}: {answerText}
        </Button>
    );
};

function Quiz({ questions }) {
    const { quizState, dispatch } = useContext(QuizContext);
    const { currentQuestion, answers, score } = quizState;
    const question = questions[currentQuestion];

    const handleAnswerSelection = (e, answer) => {
        dispatch({ type: 'SELECT_ANSWER', payload: { id: question.id, answer } });
        handleSubmit(e, answer);
    };

    const handleSubmit = (e, selectedAnswer) => {
        e.preventDefault();
        const isCorrect = selectedAnswer === question.correctAnswer
        dispatch({ type: 'SET_ANSWER_FEEDBACK', payload: { id: question.id, isCorrect } });
      };

    const handleNextQuestion = () => {
        dispatch({ type: 'SET_CURRENT_QUESTION', payload: currentQuestion + 1 });
    };

    return (
        <Container>
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
                            />
                        ))}
                    </form>
                    {answers[question.id] && (
                        <Feedback>
                            {answers[question.id].answer === question.correctAnswer ? (
                                <div>
                                    <p>Correct!</p>
                                    {currentQuestion < questions.length - 1 ? (
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
                <div>
                    <p>You've finished the quiz!</p>
                    <p>Your score: {score} out of {questions.length}</p>
                </div>
            )}
        </Container>
    );
}

export default Quiz;
