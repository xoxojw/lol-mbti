import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/images/logo.png";
import { TITLE } from "../constants";

const Introduce = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-y-12 mb-10 lg:mb-0 select-none">
      <motion.header
        className="flex flex-col items-center gap-5"
      >
        <motion.img
          src={logo}
          className="w-44 lg:h-full"
          alt="리그 오브 레전드 로고"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        />
        <motion.h1
          className="bg-gradient-to-r from-neutral-200 via-stone-400 to-neutral-200 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        >
          {TITLE}
        </motion.h1>
      </motion.header>
      <motion.button
        onClick={() => navigate("/test")}
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } }}
        className="lg:text-xl bg-neutral-400 px-6 py-3 rounded-lg hover:bg-neutral-500 cursor-pointer"
      >
        시작하기
      </motion.button>
    </div>
  );
};

export default Introduce;
