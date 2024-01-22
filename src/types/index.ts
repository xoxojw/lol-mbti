export interface QuestionType {
  num: number;
  type: "IE" | "SN" | "TF" | "JP";
  q: string;
  a: AnswerType[];
}

export interface AnswerType {
  option: string;
  dialogue: string;
  text: string;
}