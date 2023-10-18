export interface Question {
    _id: string;
    question: string;
    answer: string;
    badAnswers: string[];
    category:string;
    difficulty: string;
  }
  

export  interface Choice {
    _id: number;
    text: string;
  }