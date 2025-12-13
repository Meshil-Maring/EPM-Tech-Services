import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DynamicIcon } from "lucide-react/dynamic";
import Logo from "../../assets/EMP_logo.png";

const Header = () => {
  const navList = ["Home", "Services", "Portfolio", "Pricing", "Contact"];
  const [openNav, setOpenNav] = useState(false);

  return (
    <header
      className="
      fixed top-0 left-0 w-full z-50
      bg-white/10 backdrop-blur-xl
      border-b border-white/10
      flex items-center justify-between
      px-6 py-3
    "
    >
      {/* Logo */}
      <div className="flex gap-3 items-center">
        <img src={Logo} className="w-10 drop-shadow-md" />
        <p className="text-white text-lg font-semibold hidden sm:block">
          EMP Tech Services
        </p>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden sm:flex gap-6 text-white text-sm tracking-wide">
        {navList.map((item, i) => (
          <motion.li
            key={i}
            whileHover={{ scale: 1.1, x: 3 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="cursor-pointer hover:text-blue-400"
          >
            {item}
          </motion.li>
        ))}
      </ul>

      {/* Hamburger Button */}
      <button
        className="sm:hidden text-white cursor-pointer"
        onClick={() => setOpenNav(!openNav)}
      >
        <motion.div
          initial={false}
          animate={{ rotate: openNav ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <DynamicIcon name={openNav ? "x" : "menu"} size={28} />
        </motion.div>
      </button>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {openNav && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="
              absolute top-16 left-0 w-full
              bg-black/90 backdrop-blur-3xl
              px-8 py-10 flex flex-col items-end
              border-b border-white/10
            "
          >
            <ul className="flex flex-col w-full text-right space-y-5">
              {navList.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="
                    cursor-pointer text-xl text-gray-200
                    hover:text-white hover:translate-x-3
                    transition-all
                  "
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
