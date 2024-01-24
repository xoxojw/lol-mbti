import { Helmet } from "react-helmet-async";

interface Props {
  title?: string;
}

const MetaData = ({ title }: Props) => {
  return (
    <Helmet>
      <meta property="og:title" content="롤 MBTI 테스트" />
      <title>{title ? `${title} - 롤 MBTI 테스트` : "롤 MBTI 테스트"}</title>
    </Helmet>
  );
};

export default MetaData