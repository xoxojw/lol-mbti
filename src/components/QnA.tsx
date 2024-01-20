import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { getQnAList } from "api";

import { motion } from "framer-motion";
import { RiArrowLeftLine, RiHome2Line } from "@remixicon/react";
import ProgressBar from "./ProgressBar";
import Loading from "./Loading";

import { QuestionType, UserAnswerDataType } from "types";

const QnA = () => {
	const navigate = useNavigate();
	const [num, setNum] = useState<number>(1);

	const [answerData, setAnswerData] = useState<UserAnswerDataType[]>([
		{ category: "IE", answerOption: { "I": 0, "E": 0 } },
		{ category: "SN", answerOption: { "S": 0, "N": 0 } },
		{ category: "TF", answerOption: { "T": 0, "F": 0 } },
		{ category: "JP", answerOption: { "J": 0, "P": 0 } },
	]);

	const {
		isLoading,
		isError,
		data: questionsList,
	} = useQuery<QuestionType[]>({
		queryKey: ["questions"],
		queryFn: getQnAList,
		staleTime: Infinity,
	});

	if (isLoading) return <Loading />;
	if (isError) return <h2>에러가 발생했습니다.</h2>;

	const handleBackBtnClick = (num: number) => {
		if (num === 1) navigate("/");
		
		// 결과수집 데이터 롤백 로직

		setNum((currentNum) => currentNum - 1);
	};

	const handleHomeBtnClick = () => {
		const ok = window.confirm("정말 처음으로 돌아가시겠어요?");
		if (ok) navigate("/");
	};

	const handleAnswerClick = (category: "IE" | "SN" | "TF" | "JP", option: string) => {
		// 결과를 위한 옵션 계산 처리
		console.log(category, option, answerData);

		// 현재 질문이 12번이면 -> 결과를 수집중이에요 -> 결과 페이지로 이동
		if (num === 12) navigate("/result");

		// 다음 질문
		setNum((prevNum) => prevNum + 1);
	};

	// console.log(questionsList![num-1])

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
										className="cursor-pointer flex flex-col gap-2 border-solid border-2 rounded-lg border-neutral-500 py-3 lg:py-5 px-5 hover:border-stone-300 hover:border-2 hover:bg-neutral-500 hover:-translate-y-1 duration-200 ease-in-out"
										key={`${answer.option}${idx}`}
										onClick={() => handleAnswerClick(question.type, answer.option)}
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
