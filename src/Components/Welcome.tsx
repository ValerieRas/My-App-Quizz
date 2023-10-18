import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage: React.FC = () => {
  return (
    <div>

      <h1>Come test yourself !</h1>

      <h1>{process.env.REACT_APP_API_BASE_URL}</h1>

      <Link to="/Quizz">
        <button>Start Quiz</button>
      </Link>
    </div>
  );
};

export default WelcomePage;