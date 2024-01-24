import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import MetaData from "components/meta/MetaData";

const NotFound = () => {
	const navigate = useNavigate();
	useEffect(() => navigate("/"));
	return (
		<>
			<MetaData />
		</>
	);
};

export default NotFound;
