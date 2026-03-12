import React from "react";
import { motion } from "framer-motion";
function About() {
  return (
    <section
      id="About"
      className="relative py-32 px-6 bg-black overflow-hidden"
    >

      {/* Glow Background */}
      <div className="absolute w-72 h-72 bg-green-500 opacity-10 blur-3xl rounded-full top-20 left-10"></div>
      <div className="absolute w-72 h-72 bg-green-500 opacity-10 blur-3xl rounded-full bottom-10 right-10"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">

        {/* LEFT SIDE */}
        <div>

          <h2 className="text-5xl font-bold mb-8">
            About <span className="text-green-400">Me</span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            I am a passionate Frontend Developer focused on building
            modern and responsive web applications using React and Tailwind CSS.
          </p>

          <p className="text-gray-500 leading-relaxed mb-10">
            My goal is to create beautiful UI designs with smooth user
            experience and clean architecture. I constantly learn new
            technologies to improve my development skills.
          </p>

          {/* Stats */}
          <div className="flex gap-10">

            <div>
              <h3 className="text-3xl font-bold text-green-400">5+</h3>
              <p className="text-gray-500">Projects</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-green-400">1+</h3>
              <p className="text-gray-500">Years Learning</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-green-400">5+</h3>
              <p className="text-gray-500">Technologies</p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE CARD */}
        <div
          className="
          bg-white/5
          backdrop-blur-lg
          border border-green-500/20
          rounded-3xl
          p-10
          shadow-xl
          hover:shadow-green-500/20
          transition duration-500
          "
        >

          <h3 className="text-2xl font-semibold text-green-400 mb-8">
            Skills
          </h3>

          <div className="space-y-6">

            {[
              { name: "HTML", width: "90%" },
              { name: "CSS", width: "85%" },
              { name: "JavaScript", width: "80%" },
              { name: "React", width: "65%" },
              { name: "Tailwind CSS", width: "60%" },
            ].map((skill) => (
              <div key={skill.name}>

                <div className="flex justify-between text-gray-400 mb-2">
                  <span>{skill.name}</span>
                  <span>{skill.width}</span>
                </div>

                <div className="w-full bg-gray-800 h-2 rounded-full">

                  <div
                    className="bg-green-400 h-2 rounded-full transition-all duration-700"
                    style={{ width: skill.width }}
                  ></div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;