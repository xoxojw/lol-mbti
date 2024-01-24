import { Helmet } from "react-helmet-async";

interface Props {
  title?: string;
}

const MetaData = ({ title }: Props) => {
  return (
    <Helmet>
      <meta property="og:title" content="롤 MBTI 테스트" />
      <meta property="og:url" content="https://www.lolmbti.site/" />
      <meta property="og:description" content="나와 같은 MBTI를 가진 리그 오브 레전드 챔피언은 누가 있을까?" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:image" content="assets/images/og-images/og-kakaotalk.png" />
      <meta property="og:image" content="assets/images/og-images/og-instagram.png" />
      <title>{title ? `${title} - 롤 MBTI 테스트` : "롤 MBTI 테스트"}</title>
    </Helmet>
  );
};

export default MetaData