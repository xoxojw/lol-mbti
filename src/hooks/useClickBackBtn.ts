import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

interface UseClickBackBtnProps {
  setAnswers: React.Dispatch<React.SetStateAction<string>>;
  setNum: React.Dispatch<React.SetStateAction<number>>;
}

const useClickBackBtn = ({ setAnswers, setNum }: UseClickBackBtnProps) => {
  const navigate = useNavigate();
  return useCallback(
    (currentNum: number) => {
      if (currentNum === 1) navigate("/");

      setAnswers((prevAnswers) => prevAnswers.slice(0, -1));
      setNum((prevNum) => prevNum - 1);
    },
    [setAnswers, setNum, navigate]
  );
};

export default useClickBackBtn;