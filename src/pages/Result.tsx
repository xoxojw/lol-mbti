import { RiHome2Line } from "@remixicon/react";
import { useNavigate } from "react-router-dom";

const Result = () => {
	const navigate = useNavigate();
	return (
		<div className="flex flex-col items-center justify-center">
			<nav className="my-2">
				<ul className="flex justify-between text-stone-400">
					{/* <li onClick={() => handleBackBtnClick(num)} className="cursor-pointer"><RiArrowLeftLine /></li> */}
					<li
						onClick={() => navigate("/")}
						className="cursor-pointer"
					>
						<RiHome2Line />
					</li>
				</ul>
			</nav>
			<div className="flex flex-col my-10 gap-5 items-center justify-center">
				<h1>Result</h1>
				<h2>친구들에게 공유해보세요!</h2>
			</div>
		</div>
	);
};

export default Result;
