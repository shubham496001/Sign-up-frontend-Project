import React from "react";
import { motion } from "framer-motion";

const Home = () => (
  <motion.div className="text-center mt-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <h1 className="text-3xl font-bold mb-2">🏠 Home</h1>
    <p className="opacity-90">Welcome to the app.</p>
  </motion.div>
);
export default Home;