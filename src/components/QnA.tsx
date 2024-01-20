import { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { getQnAList } from "api";
import { QuestionType, QuestionsListType } from "types";

const QnA = () => {
	const [num, setNum] = useState<number>(1);

	const {
		isLoading,
		isError,
		data: questionsList,
	} = useQuery<QuestionsListType>({
		queryKey: ["questions"],
		queryFn: getQnAList,
	});

	if (isLoading) return <h2>로딩 중 입니다.</h2>;
	if (isError) return <h2>에러가 발생했습니다.</h2>;

	console.log(questionsList);

	return (
		<div>
			{Array.isArray(questionsList) &&
				questionsList.map((question: QuestionType) => (
					<div key={question.num}>{question.q}</div>
				))}
		</div>
	);
};

export default QnA;
