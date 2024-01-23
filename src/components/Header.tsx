import { useNavigate } from "react-router-dom";
import { RiArrowLeftLine, RiHome2Line } from "@remixicon/react";

interface HeaderProps {
	handleBackBtnClick?: () => void;
}

const Header = ({ handleBackBtnClick }: HeaderProps) => {
	const navigate = useNavigate();
	const handleHomeBtnClick = () => {
		const ok = window.confirm("정말 처음으로 돌아가시겠어요?");
		if (ok) navigate("/");
	};
	return (
		<header className="w-full py-5">
			<ul className="flex justify-between text-stone-400">
				{handleBackBtnClick && (
					<li
						onClick={handleBackBtnClick}
						className="cursor-pointer"
					>
						<RiArrowLeftLine />
					</li>
				)}
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
