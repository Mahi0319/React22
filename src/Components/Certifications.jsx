import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certs = [
    {
      title: "Vibe Coding – Top Performer",
      desc: "Recognized for strong problem-solving and coding performance.",
      file: "/public/VIBE CODING.jpeg",
    },
    {
      title: "2nd Prize – Web Architect",
      desc: "Secured second place in CSI Mahotsav technical competition.",
      file: "/public/Web architect 2 prize.jpeg",
    },
    {
      title: "Full Stack Development",
      desc: "Completed structured full stack training program.",
      file: "/public/Full stack 2-1.jpeg",
    },
    {
      title: "Wiser Qubitech",
      desc: "Industry-focused technical certification.",
      file: "/public/WISER .jpeg",
    },
    {
      title: "Innovarsity Workshop",
      desc: "Hands-on development workshop.",
      file: "/public/INNOVARSITY workshop.jpeg",
    },
  ];

  return (
    <section className="relative py-28 px-6 bg-black overflow-hidden">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl text-center font-bold text-green-400 mb-16">
          Certifications
        </h2>

        <div className="space-y-10">
          {certs.map((c, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="border border-green-500 rounded-2xl p-8 bg-black
                         shadow-[0_0_15px_rgba(0,255,0,0.2)]
                         hover:shadow-[0_0_35px_rgba(0,255,0,0.6)]
                         transition duration-500"
            >
              <h3 className="text-xl text-green-400 mb-3">
                {c.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {c.desc}
              </p>

              <button
                onClick={() => setSelectedCert(c.file)}
                className="px-4 py-2 bg-green-500 text-black rounded-full font-semibold hover:bg-green-400 transition"
              >
                View Certificate
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white p-4 rounded-xl max-w-3xl w-full"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-3 right-3 text-black font-bold text-xl"
              >
                ✕
              </button>

              <img
                src={selectedCert}
                alt="Certificate"
                className="w-full rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

export default Certificates;