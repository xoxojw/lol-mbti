import { MAIN_TITLE } from "../../constants";
import { Helmet } from "react-helmet-async";

interface Props {
	title?: string;
	description?: string;
}

const MetaData = ({ title, description }: Props) => {
	return (
		<Helmet>
			<meta
				property="og:title"
				content={title ? `${title} - ${MAIN_TITLE}` : MAIN_TITLE}
			/>
			<meta
				name="description"
				content={
					description
						? `${description} - 롤 MBTI 테스트`
						: "나와 같은 MBTI를 가진 리그 오브 레전드 챔피언은 누가 있을까? - 롤 MBTI 테스트"
				}
			/>
			<title>{title ? `${title} - ${MAIN_TITLE}` : MAIN_TITLE}</title>
		</Helmet>
	);
};

export default MetaData;
