import poro from "assets/images/poro.webp";
import { LoadingDots} from "./animation";
import { LOADING_TEXT, WAITING_TEXT } from "../constants";

interface LoadingProps {
  loading: boolean;
  waiting: boolean;
}

const Loading = ({loading, waiting}: LoadingProps) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full mx-auto gap-10">
      <img className="lg:w-max w-52" src={poro} alt="로딩화면 포로" />
      <div className="loading-text-pulse lg:text-xl">
        {loading ? LOADING_TEXT : WAITING_TEXT}
      </div>
      <LoadingDots />
    </div>
  )
}

export default Loading;