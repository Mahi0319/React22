import React from "react";

function About() {
  return (
    <section
      id="About"
      className="relative py-28 px-6 bg-black overflow-hidden"
    >
      {/* Neon Background Glow */}
      <div className="absolute w-96 h-96 bg-green-500 rounded-full blur-3xl opacity-10 top-10 left-10"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-400 tracking-wider drop-shadow-[0_0_12px_#00ff00] mb-6">
            About Me
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            I am a passionate Frontend Developer focused on building
            modern, responsive, and interactive web applications using
            React and Tailwind CSS.
          </p>

          <p className="text-gray-500 leading-relaxed">
            My goal is to create futuristic UI designs with smooth user
            experience and clean structure. I continuously improve my
            skills and explore new technologies.
          </p>
        </div>

        {/* Right Neon Card */}
        <div className="border border-green-500 rounded-2xl p-10 
                        shadow-[0_0_20px_rgba(0,255,0,0.3)] 
                        hover:shadow-[0_0_35px_rgba(0,255,0,0.6)] 
                        transition duration-500">

          <h3 className="text-2xl font-semibold text-green-400 mb-6">
            My Skills
          </h3>

          <div className="space-y-6">

            {[
              { name: "HTML", width: "90%" },
              { name: "CSS", width: "85%" },
              { name: "JavaScript", width: "80%" },
              { name: "React", width: "75%" },
              { name: "Tailwind CSS", width: "85%" },
            ].map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1 text-gray-400">
                  <span>{skill.name}</span>
                  <span>{skill.width}</span>
                </div>

                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full shadow-[0_0_10px_#00ff00]"
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