import React from "react";

function Skills() {
  const skills = [
    { name: "HTML", desc: "Structure and semantic layout of web pages." },
    { name: "CSS / Tailwind", desc: "Responsive styling and modern UI design." },
    { name: "JavaScript", desc: "Interactive and dynamic web functionality." },
    { name: "React.js", desc: "Component-based frontend development." },
    { name: "C", desc: "Programming fundamentals and logic building." },
    { name: "Java & Python", desc: "OOP concepts and problem solving." },
  ];

  return (
    <section
      id="Skills"
      className="relative py-28 px-6 bg-black overflow-hidden"
    >
      {/* Neon Background Glow */}
      <div className="absolute w-96 h-96 bg-green-500 rounded-full blur-3xl opacity-10 bottom-0 right-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-400 tracking-wider drop-shadow-[0_0_12px_#00ff00]">
            My Skills
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Technologies and programming languages I use to build modern,
            scalable and interactive applications.
          </p>
        </div>

        {/* Skill Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-green-500 rounded-2xl p-8 
                         bg-black 
                         shadow-[0_0_15px_rgba(0,255,0,0.2)]
                         hover:shadow-[0_0_30px_rgba(0,255,0,0.6)]
                         hover:-translate-y-2
                         transition duration-500"
            >
              <h3 className="text-xl font-semibold text-green-400 mb-4">
                {skill.name}
              </h3>

              <p className="text-gray-400">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;