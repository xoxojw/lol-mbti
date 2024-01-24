import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { MBTI, MbtiType } from "../constants";
import { RiHome2Line, RiShareLine, RiSave3Line } from "@remixicon/react";

const Result = () => {
	const navigate = useNavigate();
	const { result } = useParams<MbtiType>();
	const [resultImage, setResultImage] = useState<string | null>(null);

	const isValidMbti = MBTI.includes(result!.toLowerCase());

	useEffect(() => {
		if (!isValidMbti) {
			navigate("/");
		} else {
			import(`assets/images/result-images/${result!.toLowerCase()}.png`)
				.then((imageModule) => setResultImage(imageModule.default))
				.catch(() => setResultImage(null));
		}
	}, [isValidMbti, navigate, result]);

	const handleCopyClibBoard = async (url: string) => {
		try {
			await navigator.clipboard.writeText(url);
			window.alert("결과 주소가 복사되었어요!");
		} catch (err) {
			console.log(err);
		}
  };  

	return (
		<div className="px-5 flex flex-col relative mx-auto w-full max-w-[45rem] min-h-screen">
			<nav className="w-full py-5">
				<ul className="flex justify-end text-stone-400">
					<li
						onClick={() => navigate("/")}
						className="cursor-pointer"
					>
						<RiHome2Line />
					</li>
				</ul>
			</nav>
			<div className="flex flex-grow mb-10 flex-col items-center justify-center w-full gap-10">
				<div className="flex flex-col items-center justify-center text-neutral-500">
					{resultImage ? (
						<img
							src={resultImage}
							alt="결과 이미지"
							className="w-4/5"
						/>
					) : (
						"이미지를 찾을 수 없습니다."
					)}
				</div>
				<div className="flex flex-col items-center justify-center w-4/5 gap-5">
					<div className="flex mx-auto items-center gap-x-4">
						<p className="lg:text-sm text-xs text-neutral-400">
							다른 사람들과 결과를 공유해보세요!
						</p>
						<button onClick={() => handleCopyClibBoard(window.location.href)}>
							<RiShareLine className="w-4 lg:w-5 text-stone-700" />
						</button>
					</div>
					{/* <div className="w-2/5 flex justify-between">
						<p className="text-sm text-neutral-400">
							이미지를 저장할 수 있습니다!
						</p>
						<button onClick={handleSaveImage}>
							<RiSave3Line className="w-4 lg:w-5 text-stone-700" />
						</button>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Result;
