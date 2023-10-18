import React from 'react';
import { Link } from 'react-router-dom';

const ResultsPage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Quiz App!</h1>
      <Link to="/quiz">
        <button>Start Quiz</button>
      </Link>
    </div>
  );
};

export default ResultsPage;