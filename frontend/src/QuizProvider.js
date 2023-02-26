import React, { createContext, useReducer, useEffect } from 'react';

const QuizContext = createContext();

const quizReducer = (state, action) => {
  switch (action.type) {
    case 'SET_QUESTIONS':
      return { ...state, questions: action.payload, score: 0 };
    case 'SELECT_ANSWER':
      return {
        ...state,
        answers: { ...state.answers, [action.payload.id]: action.payload.answer },
      };
    case 'SET_ANSWER_FEEDBACK':
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.payload.id]: {
            answer: state.answers[action.payload.id],
            isCorrect: action.payload.isCorrect,
          },
        },
        score: action.payload.isCorrect ? state.score + 1 : state.score,
      };
    case 'SET_CURRENT_QUESTION':
      return { ...state, currentQuestion: action.payload };
    case 'RESET_QUIZ':
      return { ...state, questions: [], currentQuestion: 0, answers: {}, score: 0 };
    case 'RESET_SCORE':
      return { ...state, score: 0 };
    case 'RESET_ANSWERS':
      return { ...state, answers: {} };
    default:
      return state;
  }
};

const QuizProvider = ({ children }) => {
  const [quizState, dispatch] = useReducer(quizReducer, {
    questions: [],
    currentQuestion: 0,
    answers: {},
    score: 0,
  });

  useEffect(() => {
    const storedState = JSON.parse(localStorage.getItem('quizState'));
    if (storedState) {
      dispatch({ type: 'SET_QUESTIONS', payload: storedState.questions });
      dispatch({ type: 'SET_SCORE', payload: storedState.score });
      dispatch({ type: 'SET_ANSWERS', payload: storedState.answers });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('quizState', JSON.stringify(quizState));
  }, [quizState]);

  return (
    <QuizContext.Provider value={{ quizState, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export { QuizContext, QuizProvider };
