import React from "react";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      category: "Web Development",
      tech: "HTML, CSS, JavaScript, React",
      desc: "A personal portfolio website built to showcase my skills, projects, and contact information with a fully responsive modern UI."
    },
    {
      title: "Ship Reservation System",
      category: "Frontend Project",
      tech: "HTML, CSS, JavaScript",
      desc: "An interactive ship reservation interface allowing users to explore ships and simulate booking functionality."
    },
    {
      title: "KIVO — Kids Integrated Value-Oriented Mobile",
      category: "Concept Web App",
      tech: "HTML, CSS, JavaScript",
      desc: "A value-oriented web platform designed for children focusing on structured learning and clean user interface."
    },
    {
      title: "Farmer Soil Testing Kit",
      category: "IoT Hardware",
      tech: "Arduino, Soil Sensors, Blynk, ThingSpeak",
      desc: "An IoT-based soil testing system measuring soil parameters and sending data to cloud platforms for visualization."
    }
  ];

  return (
    <section
      id="Projects"
      className="relative py-28 px-6 bg-black overflow-hidden"
    >
      {/* Neon Background Glow */}
      <div className="absolute w-96 h-96 bg-green-500 rounded-full blur-3xl opacity-10 top-0 right-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-400 tracking-wider drop-shadow-[0_0_12px_#00ff00]">
            My Projects
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            A collection of projects showcasing my frontend and IoT development skills.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-green-500 rounded-2xl p-8 bg-black
                         shadow-[0_0_15px_rgba(0,255,0,0.2)]
                         hover:shadow-[0_0_35px_rgba(0,255,0,0.6)]
                         hover:-translate-y-3
                         transition duration-500"
            >
              <p className="text-sm text-green-400 font-semibold mb-2">
                {project.category}
              </p>

              <h3 className="text-2xl font-bold text-white mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.desc}
              </p>

              <p className="text-sm text-green-500 font-medium">
                Tech Stack: {project.tech}
              </p>

              {/* Buttons */}
              <div className="mt-6 flex gap-4">
                <button className="px-4 py-2 border border-green-500 text-green-400 rounded-lg hover:bg-green-500 hover:text-black transition duration-300">
                  View
                </button>

                <button className="px-4 py-2 bg-green-500 text-black rounded-lg font-semibold hover:shadow-[0_0_15px_#00ff00] transition duration-300">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;