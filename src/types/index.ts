export interface QuestionsListType {
  questions: QuestionType[]
}

export interface QuestionType {
  num: number;
  type: string;
  q: string;
  a: [
    {
      option: string;
      dialogue: string;
      text: string;
    }
  ]
}