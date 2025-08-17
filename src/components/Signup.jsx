import React, { useState } from "react";
import { motion } from "framer-motion";

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      setError("⚠️ All fields are required");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError("⚠️ Enter a valid email address");
      return;
    }
    setError("");
    alert("✅ Form Submitted!");
  };

  return (
    <motion.div
      className="max-w-md mx-auto bg-white/20 backdrop-blur-xl border border-white/30 p-6 rounded-2xl shadow-2xl mt-10"
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      {error && <p className="text-red-200 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-white/20 placeholder-white/70 text-white outline-none focus:ring-2 ring-white/60"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-white/20 placeholder-white/70 text-white outline-none focus:ring-2 ring-white/60"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-white/20 placeholder-white/70 text-white outline-none focus:ring-2 ring-white/60"
        />
        <motion.button
          type="submit"
          className="w-full py-3 rounded-lg bg-white/30 hover:bg-white/40 text-white font-semibold"
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          Sign Up
        </motion.button>
      </form>
    </motion.div>
  );
};

export default Signup;
