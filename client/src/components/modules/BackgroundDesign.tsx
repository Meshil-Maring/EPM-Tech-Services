import { motion } from "framer-motion";

const BackgroundDesign = () => {
  return (
    <div>
      <motion.div
        className="
      absolute top-[900px] left-[120px]
      h-80 w-80 rounded-full
      bg-blue-600/20 blur-[100px]
      z-0
    "
        animate={{
          x: [0, 30, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="
      absolute top-[1400px] left-[50px]
      h-[450px] w-[450px] rounded-full
      bg-linear-to-br from-blue-500/20 to-purple-600/20
      blur-[150px]
      z-0
    "
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="
      absolute top-[2300px] right-[100px]
      h-96 w-96 rounded-full
      bg-purple-500/20 blur-[110px]
      z-0
    "
        animate={{
          x: [0, -30, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="
      absolute top-10/12 right-[150px]
      h-[550px] w-[550px] rounded-full
      bg-blue-400/10 blur-[190px]
      z-0
    "
        animate={{
          scale: [1, 1.25, 1],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default BackgroundDesign;
