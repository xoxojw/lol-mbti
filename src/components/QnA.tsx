import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { getQnAList } from "api";

import { motion } from "framer-motion";
import { RiArrowLeftLine, RiHome2Line } from "@remixicon/react";
import ProgressBar from "./ProgressBar";
import Loading from "./Loading";

import { QuestionType } from "types";

const QnA = () => {
	const navigate = useNavigate();
	const [num, setNum] = useState<number>(1);
	const [answers, setAnswers] = useState<string>("");
	const [result, setResult] = useState<string | null>(null);

	const {
		isLoading,
		isError,
		data: questionsList,
	} = useQuery<QuestionType[]>({
		queryKey: ["questions"],
		queryFn: getQnAList,
		staleTime: Infinity,
	});

	useEffect(() => {
		if (num > 12 && answers !== null) {
			// 결과를 수집하고 있어요 화면 보여주기

			let mbti = "";
			// 결과 계산
			// 1. I/E
			if (answers.split("I").length / answers.split("E").length > 1)
				mbti += "I";
			else mbti += "E";

			// 2. S/N
			if (answers.split("S").length / answers.split("N").length > 1)
				mbti += "S";
			else mbti += "N";

			// 3. T/F
			if (answers.split("T").length / answers.split("F").length > 1)
				mbti += "T";
			else mbti += "F";

			// 4. J/P
			if (answers.split("J").length / answers.split("P").length > 1)
				mbti += "J";
			else mbti += "P";

			setResult(mbti);
		}

		// `/result/${result}`로 쿼리 넘기기
	}, [num, answers]);

	const handleBackBtnClick = useCallback((currentNum: number) => {
		if (currentNum === 1) navigate("/");

		setAnswers((prevAnswers) => prevAnswers.slice(0, -1));

		setNum((prevNum) => prevNum - 1);
	}, [navigate]);

	const handleHomeBtnClick = () => {
		const ok = window.confirm("정말 처음으로 돌아가시겠어요?");
		if (ok) navigate("/");
	};

	const handleAnswerClick = useCallback((option: string) => {
		setAnswers((prevAnswers) => prevAnswers + option);

		// 다음 질문
		setNum((prevNum) => prevNum + 1);
	}, []);

	if (isLoading) return <Loading />;
	if (isError) return <h2>에러가 발생했습니다.</h2>;

	return (
		<div className="px-5 flex flex-col relative mx-auto w-full max-w-[45rem] min-h-screen justify-between">
			<nav className="w-full py-5">
				<ul className="flex justify-between text-stone-400">
					<li
						onClick={() => handleBackBtnClick(num)}
						className="cursor-pointer"
					>
						<RiArrowLeftLine />
					</li>
					<li
						onClick={handleHomeBtnClick}
						className="cursor-pointer"
					>
						<RiHome2Line />
					</li>
				</ul>
			</nav>
			<ProgressBar currentNum={num} listLength={questionsList?.length} />
			{questionsList?.map(
				(question: QuestionType) =>
					question.num === num && (
						<motion.div
							className="flex flex-col flex-grow w-full justify-center lg:gap-20 gap-10 mb-14 lg:mb-0"
							key={question.num}
						>
							<motion.div
								className="flex flex-col lg:gap-2 gap-1"
								initial={{ opacity: 0, y: -50 }}
								animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
							>
								<span className="text-2xl lg:text-4xl text-neutral-600">
									{question.num}.
								</span>
								<h2>{question.q}</h2>
							</motion.div>
							<motion.ul
								initial={{ opacity: 0, y: -50 }}
								animate={{
									opacity: 1,
									y: 0,
									transition: { duration: 1, delay: 0.5 },
								}}
								className="flex flex-col gap-5 lg:gap-8 w-full mb-20 lg:mb-32"
							>
								{question.a.map((answer, idx) => (
									<li
										key={`${answer.option}${idx}`}
										onClick={() => handleAnswerClick(answer.option)}
										className="cursor-pointer flex flex-col gap-2 border-solid border-2 rounded-lg border-neutral-500 py-3 lg:py-5 px-5 active:border-stone-300 active:border-2 active:bg-neutral-500 active:-translate-y-1 duration-200 ease-in-out"
									>
										<span className="italic lg:text-base text-sm text-neutral-400">
											{answer.dialogue}
										</span>
										<span className="lg:text-xl">{answer.text}</span>
									</li>
								))}
							</motion.ul>
						</motion.div>
					)
			)}
		</div>
	);
};

export default QnA;
