export interface Question {
    _id: string;
    question: string;
    answer: string;
    badAnswers: string[];
    category:string;
    difficulty: string;
  };
  

// Interface for the API response
export interface ApiResponse {
  count: number;
  quizzes: Question[];
} 
