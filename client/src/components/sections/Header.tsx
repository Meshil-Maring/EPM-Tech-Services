import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { DynamicIcon } from "lucide-react/dynamic";

import { server_url } from "../../utils/url";
import Logo from "../../assets/logo.png";

interface HeaderProps {
  onHome: () => void;
  onServices: () => void;
  onPricing: () => void;
  onContact: () => void;
}

const Header = ({ onHome, onServices, onPricing, onContact }: HeaderProps) => {
  const [openNav, setOpenNav] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);

  const navigate = useNavigate();

  // ✅ CHECK AUTH ONLY ONCE
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch(`${server_url}/api/check-auth`, {
          credentials: "include",
        });

        setIsAuth(res.status === 200);
      } catch {
        setIsAuth(false);
      } finally {
        setAuthChecked(true);
      }
    };

    checkAuth();
  }, []);

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

  const signupHandler = () => {
    navigate("/auth/sign-up");
  };

  const logoutHandler = async () => {
    try {
      const res = await fetch(`${server_url}/auth/log-out`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status === 200) {
        const data = await res.json();
        toast.success(data.message);
      }
    } catch {
      toast.error("Logout failed");
    } finally {
      setIsAuth(false);
      navigate("/");
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-xl border-b border-white/10 px-6 py-3 flex justify-between items-center">
      {/* Logo */}
      <div className="flex gap-3 items-center">
        <img src={Logo} className="w-10" />
        <h1 className="text-white font-semibold hidden sm:block">
          EPM Tech Service
        </h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex gap-6 text-white items-center">
        {navItems.map((item, i) => (
          <li
            key={i}
            onClick={item.action}
            className="cursor-pointer hover:text-blue-400"
          >
            {item.label}
          </li>
        ))}

        {/* ✅ SHOW ONLY AFTER AUTH CHECK */}
        {authChecked && isAuth && (
          <Link to="/transaction" className="hover:text-blue-400">
            Transaction
          </Link>
        )}

        <button
          onClick={isAuth ? logoutHandler : signupHandler}
          className={`${
            isAuth ? "bg-red-700" : "bg-blue-500"
          } py-2 px-4 rounded-full`}
        >
          {isAuth ? "Log out" : "Sign up"}
        </button>
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
            className="absolute top-16 left-0 w-full bg-black px-8 py-10 flex flex-col items-center gap-8"
          >
            <ul className="flex flex-col items-center space-y-5">
              {navItems.map((item, i) => (
                <li
                  key={i}
                  onClick={() => handleClick(item.action)}
                  className="text-xl text-white cursor-pointer"
                >
                  {item.label}
                </li>
              ))}
            </ul>

            {authChecked && isAuth && (
              <Link
                to="/transaction"
                className="text-xl text-white"
                onClick={() => setOpenNav(false)}
              >
                Transaction
              </Link>
            )}

            <button
              onClick={isAuth ? logoutHandler : signupHandler}
              className={`${
                isAuth ? "bg-red-700" : "bg-blue-500"
              } p-3 w-48 rounded-full`}
            >
              {isAuth ? "Log out" : "Sign up"}
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
