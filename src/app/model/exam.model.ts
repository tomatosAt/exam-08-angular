export interface Choice {
  id: string;
  choice_text: string;
  is_correct: boolean;
}

export interface Question {
  id: string;
  number: number;
  question: string;
  choices: Choice[];
  selectedOptionId?: string;
  isCorrect?: boolean;
}

export interface ApiResponse<T> {
  status: string;
  data: T;
  status_code: number;
}