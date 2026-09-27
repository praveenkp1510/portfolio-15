import React from "react";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="flex flex-col items-center justify-center min-h-screen text-center bg-black"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-4">
        Contact
      </h2>
      <p className="text-cyan-100 mb-6">
        Interested in working together? Let's connect!
      </p>
      <a
        href="mailto:praveen1510kp@gmail.com"
        className="bg-cyan-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-cyan-600 hover:text-white transition"
      >
        praveen1510kp@gmail.com
      </a>
      <a
        href="https://www.linkedin.com/in/kppraveen/"
        className="mt-5 border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </motion.div>
  );
};
