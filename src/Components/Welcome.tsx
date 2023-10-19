import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const WelcomePage: React.FC = () => {
  return (

    <div className="bg-image">
      <div className="container">
        <div className="title-container">
          <h1> 🦎 🌴 QUIZ 🌴 🦎</h1>
        </div>
        <div className="btn-container">

          <Link to="/Quizz">
            <button className="start-btn">🌵 Start 🌵</button>
          </Link>

         <div className="text-container">
            <ul>
              <li>Le quiz est composé de 5 questions aléatoires.</li>
              <li>Vous devez sélectionner une réponse. </li>
              <li>cliquez sur suivant pour passez à la question suivante</li>
              <li>Votre score s'affiche à la fin des 5 questions. </li>
            </ul>
          <p>
            Appuyez sur Start pour commencer.
          </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WelcomePage;

