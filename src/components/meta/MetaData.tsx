import { MAIN_TITLE } from "../../constants";
import { Helmet } from "react-helmet-async";

interface Props {
  title?: string;
}

const MetaData = ({ title }: Props) => {
  return (
    <Helmet>
      <meta property="og:title" content={title ? `${title} - ${MAIN_TITLE}` : MAIN_TITLE} />
      <title>{title ? `${title} - ${MAIN_TITLE}` : MAIN_TITLE}</title>
    </Helmet>
  );
};

export default MetaData