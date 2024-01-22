import poro from "assets/poro.webp";
import { LoadingDots} from "./animation";
import { LOADING_TEXT } from "../constants";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full mx-auto gap-10">
      <img className="lg:w-max w-52" src={poro} alt="로딩화면 포로" />
      <div className="loading-text-pulse lg:text-xl">
        {LOADING_TEXT}
      </div>
      <LoadingDots />
    </div>
  )
}

export default Loading;