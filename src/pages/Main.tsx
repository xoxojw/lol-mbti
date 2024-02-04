import Introduce from "components/Introduce";
import MetaData from "components/meta/MetaData";

const Main = () => {
	return (
		<div className="flex flex-col justify-center items-center w-screen h-screen bg-summonersRift bg-no-repeat bg-center" role="img">
			<MetaData />
			<Introduce />
		</div>
	);
};

export default Main;
