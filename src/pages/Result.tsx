import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { RiHome2Line } from "@remixicon/react";

import { MBTI, MbtiType } from "../constants";

const Result = () => {
  const navigate = useNavigate();
  const { result } = useParams<MbtiType>();

  // Check if the received result is a valid MBTI type
  const isValidMbti = MBTI.includes(result!.toLocaleLowerCase());

  useEffect(() => {
    // Redirect to "/" if the result is not a valid MBTI type
    if (!isValidMbti) {
      navigate("/");
    }
  }, [isValidMbti, navigate]);

  return (
    <div className="flex flex-col items-center justify-center">
      <nav className="my-2">
        <ul className="flex justify-between text-stone-400">
          <li onClick={() => navigate("/")} className="cursor-pointer">
            <RiHome2Line />
          </li>
        </ul>
      </nav>
      <div className="flex flex-col my-10 gap-5 items-center justify-center">
        <span>당신의 MBTI는</span>
        <h1>{result}</h1>
        <h2>친구들에게 공유해보세요!</h2>
      </div>
    </div>
  );
};

export default Result;
