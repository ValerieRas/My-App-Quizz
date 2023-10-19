import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Question } from '../Models/QuestionModel';




const ResultsPage: React.FC = () => {

  const location = useLocation();
  const selectedAnswer: string[] = location.state.selectedAnswer;
  console.log(selectedAnswer);

  const questionlist: Question[] = location.state.questions;
  console.log(questionlist);

  const calculateScore = (): number => {

    let score = 0;

    for (let i = 0; i < selectedAnswer.length; i++) {
      if (selectedAnswer[i] === questionlist[i].answer) {
        score++;
      }
    }
    return score;
  };


  return (
    <div className="bg-image">
      <div className="container">
        <h1>Résultats</h1>

        <div className='resultats-container'>
          <p>Score: {calculateScore()} / {questionlist.length}</p>
        </div>

        <Link to="/Quizz">
          <button className="Restart-btn">🌵 ReStart 🌵</button>
        </Link>


      </div>
    </div>
  );
};

export default ResultsPage;