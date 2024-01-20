import { QuestionType } from "types";
import api from "../libs/axios";

const getQnAList = async (): Promise<QuestionType[]> => {
  const res = await api.get(`/question-list`);
  return res.data;
};

export { getQnAList };