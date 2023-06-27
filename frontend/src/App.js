import React from 'react';
import Quiz from './quiz';
import { QuizProvider } from './QuizProvider';
import { Wrapper } from './quiz';
import TopNavBar from './TopNavBar';
import HomePage from './HomePage';
import ProgressPage from './ProgressPage';
import AccountPage from './AccountPage';
import Footer from './Footer'; // Don't forget to import Footer here
import ContactPage from './ContactPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles.css';

function App() {
  return (
    <Router>
      <TopNavBar />
      <Wrapper>
        <QuizProvider>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/progress" element={<ProgressPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </QuizProvider>
      </Wrapper>
      <Footer />
    </Router>
  );
}

export default App;
