import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { MBTI, MbtiType } from "../constants";
import { RiHome2Line, RiShareLine } from "@remixicon/react";

import poro from "assets/images/poro.webp";

const Result = () => {
  const navigate = useNavigate();
  const { result } = useParams<MbtiType>();

  const isValidMbti = MBTI.includes(result!.toLocaleLowerCase());

  useEffect(() => {
    if (!isValidMbti) {
      navigate("/");
    }
  }, [isValidMbti, navigate]);

  const handleCopyClibBoard = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      window.alert("결과 주소가 복사되었어요!");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="px-5 flex flex-col relative mx-auto w-full max-w-[45rem] min-h-screen">
      <nav className="w-full py-5">
        <ul className="flex justify-end text-stone-400">
          <li onClick={() => navigate("/")} className="cursor-pointer">
            <RiHome2Line />
          </li>
        </ul>
      </nav>
      <div className="flex flex-col my-10 gap-5 items-center justify-center">
        <h2>당신의 MBTI는</h2>
        <h1>{result?.toUpperCase()}</h1>
        <div className="flex flex-col items-center justify-center w-full gap-3">
          <div className="flex flex-col items-center justify-center text-neutral-500">
            <img src={poro} alt="귀여운 포로 움짤" />
            <h3>이미지 준비 중</h3>
          </div>
          <div className="flex items-center justify-center w-full gap-3 text-neutral-300">
            <p>다른 사람들과 결과를 공유해보세요!</p>
            <button
              onClick={() => handleCopyClibBoard(window.location.href)}
            >
              <RiShareLine className="w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;