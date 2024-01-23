import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { RiArrowLeftLine, RiHome2Line } from "@remixicon/react";

interface HeaderProps {
	setAnswers: React.Dispatch<React.SetStateAction<string>>;
	currentNum: number;
	setNum: React.Dispatch<React.SetStateAction<number>>
}

const Header = ({setAnswers, currentNum, setNum}: HeaderProps) => {
	const navigate = useNavigate();
	const handleHomeBtnClick = () => {
		const ok = window.confirm("정말 처음으로 돌아가시겠어요?");
		if (ok) navigate("/");
	};

	const handleBackBtnClick = useCallback(
		(currentNum: number) => {
			if (currentNum === 1) navigate("/");

			setAnswers((prevAnswers) => prevAnswers.slice(0, -1));

			setNum((prevNum) => prevNum - 1);
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[setAnswers, setNum]
	);
	
	return (
		<header className="w-full py-5">
			<ul className="flex justify-between text-stone-400">
				<li
					onClick={() => handleBackBtnClick(currentNum)}
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
		</header>
	);
};

export default Header;
