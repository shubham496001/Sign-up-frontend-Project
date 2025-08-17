import React, { useState } from "react";
import { motion } from "framer-motion";

const UserCard = ({ name, email }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      onClick={() => setFlipped(!flipped)}
      className="bg-white/15 backdrop-blur-lg shadow-lg rounded-xl p-6 border border-white/25 w-64 cursor-pointer text-white"
      whileHover={{ scale: 1.05 }}
      whileTap={{ rotateY: 180 }}
      transition={{ duration: 0.5 }}
    >
      {flipped ? (
        <p className="text-center text-sm">📩 {email}</p>
      ) : (
        <h3 className="text-lg font-semibold text-center">{name}</h3>
      )}
    </motion.div>
  );
};

export default UserCard;
