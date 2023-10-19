import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Question, ApiResponse } from '../Models/QuestionModel';
import { getQuestions } from '../Services/QuestionService';
import '../styles.css';

const QuizPage: React.FC = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string[]>([]);

  useEffect(() => {

    const fetchQuestions = async () => {

      try {

        const response = await getQuestions();

        const ApiQuestion: ApiResponse = response.data;

        setQuestions(ApiQuestion.quizzes);

        setSelectedAnswer(new Array(ApiQuestion.quizzes.length).fill(''));

      } catch (error) {

        console.error('Error fetching questions:', error);

      }
    };

    fetchQuestions();
  }, []);



  const handleNextQuestion = () => {

    const currentAnswer = selectedAnswer[currentQuestionIndex];

    if ( currentAnswer !== undefined && currentAnswer !== '') {

      if (currentQuestionIndex + 1 < questions.length) {

        setCurrentQuestionIndex(currentQuestionIndex + 1);

      }
      else {
        // End of the quiz, navigate to the results page
        navigate('../Results', { state: { selectedAnswer, questions } });
      }

    }
    else {
      alert('Veuillez choisir une réponse');
    }
  };



  const handleAnswerSelect = (answer: string) => {
    // Handle user answer selection
    setSelectedAnswer(prevAnswers => {

      const updatedSelectedAnswers = [...prevAnswers];

      updatedSelectedAnswers[currentQuestionIndex] = answer;
   
      return updatedSelectedAnswers;

    });
    
  };

  const currentQuestion = questions[currentQuestionIndex];


  return (
    <div className="bg-image">
      <div className="container">
        <h2>Question {currentQuestionIndex + 1}</h2>
        <div className="question-container">
          <h3>{currentQuestion?.question}</h3>
          <ul>
            {currentQuestion?.badAnswers.concat(currentQuestion?.answer).map((answer, index) => (
              <li
                key={index}
                onClick={() => handleAnswerSelect(answer)}
                style={{ cursor: 'pointer', backgroundColor: selectedAnswer[currentQuestionIndex] === answer ? 'rgba(89, 146, 83, 0.8)' : '' }}
              >
                {answer}
              </li>
            ))}
          </ul>
        </div>
        <button className="Next-btn" onClick={handleNextQuestion}>
          Suivant
        </button>
      </div>
    </div>
  );
};

export default QuizPage;
