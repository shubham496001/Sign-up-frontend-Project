import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="backdrop-blur-md bg-white/10 text-white px-6 py-3 flex justify-between items-center shadow-md sticky top-0 z-50">
      <motion.div
        className="text-xl font-bold cursor-pointer"
        whileHover={{ scale: 1.05 }}
      >
        MyApp
      </motion.div>
      <ul className="hidden md:flex space-x-6 items-center">
        {navItems.map((item) => {
          const active = location.pathname === item.path;
          return (
            <motion.li
              key={item.name}
              whileTap={{ scale: 0.92 }}
              whileHover={{ scale: 1.08 }}
              className="relative"
            >
              <Link className="hover:opacity-90" to={item.path}>
                {item.name}
              </Link>
              {active && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 h-0.5 w-full bg-white"
                />
              )}
            </motion.li>
          );
        })}
      </ul>
      <button className="md:hidden border border-white/30 px-2 py-1 rounded">☰</button>
    </nav>
  );
};

export default Navbar;
