import { motion } from "framer-motion";
import { DynamicIcon } from "lucide-react/dynamic";
import { useState } from "react";

const CorouselNavigation = ({ cb }: { cb: Function }) => {
  const [active, setActive] = useState(0);

  const clickHandler = (mode: "left" | "right") => {
    mode == "left" &&
      active > 0 &&
      setActive((prev) => {
        cb(prev - 1);
        return prev - 1;
      });
    mode == "right" &&
      active < 2 &&
      setActive((prev) => {
        cb(prev + 1);
        return prev + 1;
      });
  };

  return (
    <motion.div className="mt-8 flex gap-8 justify-center items-center">
      <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={() => clickHandler("left")}
        className="bg-blue-50/10 p-3 rounded-full border-white/20 border cursor-pointer hover:border-blue-400 "
      >
        <DynamicIcon name="chevron-left" />
      </motion.button>

      <ul className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <motion.li
            key={i}
            animate={{
              width: active === i ? 32 : 8,
              backgroundColor:
                active === i ? "#60a5fa" : "rgba(255,255,255,0.2)",
              scale: active === i ? 1.2 : 1,
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className="h-2 rounded-full"
          />
        ))}
      </ul>

      <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={() => clickHandler("right")}
        className="bg-blue-50/10 p-3 rounded-full border-white/20 border cursor-pointer hover:border-blue-400 "
      >
        <DynamicIcon name="chevron-right" />
      </motion.button>
    </motion.div>
  );
};

export default CorouselNavigation;
