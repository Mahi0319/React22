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
      className="relative py-36 px-6 bg-black overflow-hidden"
    >

      {/* Glow Background */}
      <div className="absolute w-[400px] h-[400px] bg-green-500/10 blur-[140px] rounded-full bottom-0 right-0"></div>


      <div className="max-w-6xl mx-auto relative z-10">


        {/* Heading */}

        <div className="text-center mb-20">

          <h2 className="text-5xl md:text-6xl font-bold mb-6">

            My <span className="text-green-400">Skills</span>

          </h2>


          <p className="text-gray-400 max-w-2xl mx-auto text-lg">

            Technologies and programming languages I use to build modern,
            scalable and interactive applications.

          </p>

        </div>



        {/* Skill Grid */}

        <div className="grid md:grid-cols-3 gap-10">


          {skills.map((skill, index) => (
            <div
              key={index}
              className="

              bg-white/5
              border border-green-500/20
              backdrop-blur-lg
              rounded-3xl
              p-10

              hover:border-green-400
              hover:-translate-y-3
              hover:shadow-green-500/10

              transition duration-500

              "
            >

              <h3 className="text-2xl font-semibold text-green-400 mb-4">

                {skill.name}

              </h3>


              <p className="text-gray-400 leading-relaxed">

                {skill.desc}

              </p>


              {/* Bottom Line Glow */}

              <div className="mt-6 h-[2px] w-full bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-40"></div>
            </div>
          ))}


        </div>


      </div>

    </section>
  );
}

export default Skills;