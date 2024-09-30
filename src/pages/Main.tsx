import Introduce from "components/Introduce";
import MetaData from "components/meta/MetaData";
import summonersRift from "assets/images/summoners_rift.webp";

const Main = () => {
	return (
		<main className="w-screen h-screen flex flex-col">
			<img
				src={summonersRift}
				alt="소환사의 협곡 배경 이미지"
				className="fixed -z-10 w-screen h-screen md:object-contain object-cover"
				loading="eager"
			/>
			<div className="flex flex-col justify-center items-center w-screen h-screen">
				<MetaData />
				<Introduce />
			</div>
		</main>
	);
};

export default Main;
