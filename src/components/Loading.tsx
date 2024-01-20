import poro from "assets/poro.webp";
import { LoadingDots} from "./animation";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full mx-auto gap-10">
      <img className="lg:w-max w-52" src={poro} alt="로딩화면 포로" />
      {/* <AnimatedTextWord text={`질문들을 불러오고 있어요.`} /> */}
      <div className="loading-text-pulse lg:text-xl">질문들을 불러오고 있어요.</div>
      <LoadingDots />
    </div>
  )
}

export default Loading;