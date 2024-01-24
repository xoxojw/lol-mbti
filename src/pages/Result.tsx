import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { MBTI, MbtiType, resultpage } from "../constants";
import { RiHome2Line, RiShareLine, RiDownload2Line } from "@remixicon/react";

import { motion } from "framer-motion";

import MetaData from "components/meta/MetaData";

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

	const handleDownloadImage = () => {
    if (resultImage) {
			const link = document.createElement("a");
      link.href = resultImage;
      link.download = `${result!.toLowerCase()}.png`;

      document.body.appendChild(link);
			link.click();
			
      document.body.removeChild(link);
		} else {
			window.alert(resultpage.FAIL_TO_SAVE_IMAGE)
		}
  };

	const handleCopyClibBoard = async (url: string) => {
		try {
			await navigator.clipboard.writeText(url);
			window.alert(resultpage.SUCCESS_TO_SAVE_URL);
		} catch (err) {
			console.log(err);
		}
  };

	return (
		<div className="px-5 flex flex-col relative mx-auto w-full max-w-[45rem] min-h-screen">
			<MetaData title={result} />
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
			<motion.div
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
				className="flex flex-grow mb-28 flex-col items-center justify-center w-full gap-10">
				<div className="flex flex-col items-center justify-center text-neutral-500">
					{resultImage && (
						<img
							src={resultImage}
							alt="결과 이미지"
							className="w-4/5"
						/>
					)}
				</div>
				<div className="flex flex-col items-center justify-center w-60 lg:w-80">
					<motion.div
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1 } }}
						className="flex flex-col gap-3 w-full">
						<div className="flex items-center justify-between">
							<p className="lg:text-sm text-xs text-neutral-400">
								결과 이미지 저장하기
							</p>
							<button onClick={handleDownloadImage}>
								<RiDownload2Line className="w-4 lg:w-5 text-stone-700" />
							</button>
						</div>
						<div className="flex items-center justify-between">
							<p className="lg:text-sm text-xs text-neutral-400">
								다른 사람에게 결과를 공유해보세요!
							</p>
							<button onClick={() => handleCopyClibBoard(window.location.href)}>
								<RiShareLine className="w-4 lg:w-5 text-stone-700" />
							</button>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</div>
	);
};

export default Result;
