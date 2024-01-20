import { QuestionsListType } from "types";
import api from "../libs/axios";

const getQnAList = async (): Promise<QuestionsListType> => {
  const res = await api.get(`/question-list`);
  return res.data;
};

export { getQnAList };