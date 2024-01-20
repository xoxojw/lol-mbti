export interface QuestionsListType {
  lists: QuestionType[];
}

export interface QuestionType {
  num: number;
  type: string;
  q: string;
  a: AnswerType[];
}

export interface AnswerType {
  option: string;
  dialogue: string;
  text: string;
}