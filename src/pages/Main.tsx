import Introduce from "components/Introduce";
import Footer from "components/Footer";

const Main = () => {
	return (
		<div className="flex flex-col justify-center items-center w-screen h-screen bg-summonersRift bg-no-repeat bg-center">
			<Introduce />
			<Footer />
		</div>
	);
};

export default Main;
