import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DynamicIcon } from "lucide-react/dynamic";
import Logo from "../../assets/EMP_logo.png";

interface HeaderProps {
  onHome: () => void;
  onServices: () => void;
  onPricing: () => void;
  onContact: () => void;
}

const Header = ({ onHome, onServices, onPricing, onContact }: HeaderProps) => {
  const [openNav, setOpenNav] = useState(false);

  const navItems = [
    { label: "Home", action: onHome },
    { label: "Services", action: onServices },
    { label: "Pricing", action: onPricing },
    { label: "Contact", action: onContact },
  ];

  const handleClick = (action: () => void) => {
    action();
    setOpenNav(false);
  };

  const authHandler = () => {
    console.log("Hello");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-xl border-b border-white/10 px-6 py-3 flex justify-between items-center">
      {/* Logo */}
      <div className="flex gap-3 items-center">
        <img src={Logo} className="w-10" />
        <p className="text-white font-semibold hidden sm:block">
          EMP Tech Services
        </p>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex gap-6 text-white">
        {navItems.map((item, i) => (
          <li
            key={i}
            onClick={item.action}
            className="cursor-pointer hover:text-blue-400"
          >
            {item.label}
          </li>
        ))}
      </ul>

      {/* Mobile Button */}
      <button
        className="sm:hidden text-white"
        onClick={() => setOpenNav(!openNav)}
      >
        <DynamicIcon name={openNav ? "x" : "menu"} size={28} />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {openNav && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 w-full bg-black px-8 py-10"
          >
            <ul className="flex flex-col items-center space-y-5">
              {navItems.map((item, i) => (
                <li
                  key={i}
                  onClick={() => handleClick(item.action)}
                  className="text-xl text-center w-full text-white cursor-pointer"
                >
                  {item.label}
                </li>
              ))}

              <button
                onClick={authHandler}
                className="bg-blue-600 p-3 w-48 rounded-full"
              >
                Login
              </button>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
