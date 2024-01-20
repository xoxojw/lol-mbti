import { motion } from "framer-motion";

interface Props {
  currentNum: number;
  listLength?: number;
}

const ProgressBar = ({ currentNum, listLength = 12 }: Props) => {
  const progressBarWidth = `${(currentNum / listLength) * 100}%`;

  return (
    <div className="bg-white rounded-md shadow-sm overflow-hidden">
      <div className="relative h-3 flex items-center justify-center">
        <motion.div
          initial={{ width: progressBarWidth }}
          animate={{ width: progressBarWidth }}
          transition={{ duration: 0.5, type: 'tween' }}
          className={`absolute top-0 bottom-0 left-0 rounded-md bg-neutral-600`}
        ></motion.div>
      </div>
    </div>
  );
};

export default ProgressBar;
