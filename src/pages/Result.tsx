import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { MBTI, MbtiType } from "../constants";
import Header from "components/Header";

const Result = () => {
  const navigate = useNavigate();
  const { result } = useParams<MbtiType>();

  const isValidMbti = MBTI.includes(result!.toLocaleLowerCase());

  useEffect(() => {
    if (!isValidMbti) {
      navigate("/");
    }
  }, [isValidMbti, navigate]);

  return (
    <div className="px-5 flex flex-col relative mx-auto w-full max-w-[45rem] min-h-screen">
      <Header />
      <div className="flex flex-col my-10 gap-5 items-center justify-center">
        <span>당신의 MBTI는</span>
        <h1>{result}</h1>
        <h2>나와 잘 맞을 것 같은 챔피언들을 공유해보세요!</h2>
      </div>
    </div>
  );
};

export default Result;
