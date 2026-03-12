// Hero.jsx
import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-black overflow-hidden px-4">
      {/* Animated Gradient Background */}
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-purple-900 to-black bg-[length:200%_200%]"
      />

      {/* Glow */}
      <div className="absolute w-80 h-80 bg-purple-600 rounded-full blur-3xl opacity-20 top-20 right-10"></div>

      <div className="relative z-10 max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-8 items-center">
        {/* LEFT SIDE TEXT */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-purple-400 uppercase tracking-widest text-sm mb-4"
          >
            Frontend Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            Hi, I'm <span className="text-yellow-300">Mahesh</span> <br />
            Crafting Modern Digital Experiences
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 mt-6 max-w-md"
          >
            I build high-performance, visually refined web applications
            using React and Tailwind CSS with a focus on user experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex gap-4"
          >
            <motion.a
              href="#Projects"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition inline-block"
            >
              View Projects
            </motion.a>

            <motion.a
              href="#Contact"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition inline-block"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>

        {/* RIGHT SIDE PHOTO */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <motion.img
            src="/MYIMAGE.jpg"
            alt="Mahesh"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="w-56 md:w-72 rounded-3xl shadow-2xl border border-white/20"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;