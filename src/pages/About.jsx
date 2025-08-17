import React from "react";
import { motion } from "framer-motion";

const About = () => (
  <motion.div className="text-center mt-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <h1 className="text-3xl font-bold mb-2">ℹ️ About</h1>
    <p className="opacity-90">Built with React + Vite + Tailwind.</p>
  </motion.div>
);
export default About;