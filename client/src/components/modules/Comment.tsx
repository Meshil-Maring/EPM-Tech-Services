import { DynamicIcon } from "lucide-react/dynamic";
import { motion } from "framer-motion";

type CommentType = {
  name: string;
  comment: string;
  profession: string;
};

const Comment = ({ data }: { data: CommentType }) => {
  return (
    <motion.div
      initial={{ x: 120, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -120, opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-8 flex text-center flex-col bg-white/10 p-6 rounded-xl border border-white/20 max-w-[800px] md:px-20"
    >
      <div>
        <div className="flex justify-center items-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <DynamicIcon key={i} name="star" color="blue" fill="blue" />
          ))}
        </div>

        <p className="text-justify relative mt-8">
          <span className="rotate-180 w-fit self-start text-blue-400/20 absolute -left-2 -top-6">
            <DynamicIcon name="quote" size={48} />
          </span>
          {data.comment}
          <span className="self-end text-blue-400/20 absolute right-0">
            <DynamicIcon name="quote" size={48} />
          </span>
        </p>
      </div>

      <p className="text-2xl text-blue-500 mt-8">{data.name}</p>
      <p>{data.profession}</p>
    </motion.div>
  );
};

export default Comment;
