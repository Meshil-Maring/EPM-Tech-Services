import { forwardRef, useMemo } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const CODE_ITEMS = [
  "<div>",
  "{...}",
  "<html/>",
  "const",
  "function",
  "return",
  "{ }, </>",
];

interface Position {
  left: string;
  top: string;
  x: number;
}

interface Stat {
  value: string;
  label: string;
}

const Hero = forwardRef<HTMLDivElement>((_, ref) => {
  const positions = useMemo<Position[]>(
    () =>
      Array.from({ length: 2 }).map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        x: Math.random() * 100 - 50,
      })),
    []
  );

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-black"
    >
      {/* ===== Background Glows ===== */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#6C48FF] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse" />
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-[#00D4FF] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse delay-700" />
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-[#8F00FF] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse delay-1000" />
      </div>

      {/* ===== Floating Code ===== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {positions.map((pos, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              y: [100, -100],
              x: [0, pos.x],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "linear",
            }}
            className="absolute rounded-lg p-3 text-[#00D4FF] text-sm"
            style={{ left: pos.left, top: pos.top }}
          >
            {CODE_ITEMS[i]}
          </motion.div>
        ))}
      </div>

      {/* ===== HERO CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
        >
          <Sparkles className="w-4 h-4 text-[#00D4FF]" />
          <span className="text-sm">Award-Winning Development Agency</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 px-4 leading-tight"
        >
          We Build{" "}
          <span
            style={{
              backgroundImage: "var(--gradient)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Modern Websites
          </span>
          <br />
          for Your Business
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-white/70 mb-12 max-w-3xl mx-auto px-4"
        >
          Custom development, responsive UI, fast performance, modern
          technologies
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
        ></motion.div>

        {/* ===== STATS (UNCHANGED) ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 px-4"
        >
          {(
            [
              { value: "50+", label: "Projects Completed" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "10+", label: "Team Members" },
              { value: "24/7", label: "Support Available" },
            ] as Stat[]
          ).map((stat, index) => (
            <div
              key={index}
              className="border bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl p-6"
            >
              <div
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{
                  backgroundImage: "var(--gradient)",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {stat.value}
              </div>
              <p className="text-white/60 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* ================= Extra Floating Glow ================= */}
        <motion.div
          className="absolute -top-20 right-20 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
});

Hero.displayName = "Hero";
export default Hero;
