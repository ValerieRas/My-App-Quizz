import React, { useEffect, useState } from 'react';
import { Question } from "../Models/QuestionModel";
import {getQuestions} from '../Services/QuestionService';

const QuestionList =() => {

    const [questions, setQuestions] = useState<Question[]>([]);
  
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

    return questions;
  };
  
  export default QuestionList;
