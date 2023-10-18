import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Question } from '../Models/QuestionModel';
import { getQuestions } from '../Services/QuestionService';

const QuizPage: React.FC = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await getQuestions();
        setQuestions(response.data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  const handleNextQuestion = () => {
    if (selectedAnswer !== '') {
      if (currentQuestionIndex + 1 < questions.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer('');
      } else {
        // End of the quiz, navigate to the results page
        navigate('./Results');
      }
    } else {
      alert('Veuillez choisir une réponse');
    }
  };

  const handleAnswerSelect = (answer: string) => {
    // Handle user answer selection
    setSelectedAnswer(answer);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <h2>Question {currentQuestionIndex + 1}</h2>
      <h3>{currentQuestion?.question}</h3>
      <ul>
        {currentQuestion?.badAnswers.concat(currentQuestion?.answer).map((answer, index) => (
          <li
            key={index}
            onClick={() => handleAnswerSelect(answer)}
            style={{ cursor: 'pointer', backgroundColor: selectedAnswer === answer ? 'lightgray' : 'white' }}
          >
            {answer}
          </li>
        ))}
      </ul>
      <button onClick={handleNextQuestion} disabled={selectedAnswer === ''}>
        Next Question
      </button>
    </div>
  );
};

export default QuizPage;
