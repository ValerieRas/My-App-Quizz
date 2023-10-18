import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResultsPage from './Components/Results';
import QuizPage from './Components/Quizz';
import WelcomePage from './Components/Welcome';
import QuestionList from './Components/QuestionList';
import { Question } from "./Models/QuestionModel";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/Quizz" element={<QuizPage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
