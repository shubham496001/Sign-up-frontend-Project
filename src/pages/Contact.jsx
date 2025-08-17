import React from "react";
import { motion } from "framer-motion";

const Contact = () => (
  <motion.div className="text-center mt-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <h1 className="text-3xl font-bold mb-2">📞 Contact</h1>
    <p className="opacity-90">Drop us a message.</p>
  </motion.div>
);
export default Contact;