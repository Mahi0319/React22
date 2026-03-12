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
      className="relative py-36 px-6 bg-[#0a0a0a] overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-green-500/10 blur-[140px] rounded-full top-0 right-0"></div>


      <div className="max-w-7xl mx-auto relative z-10">


        {/* Heading */}

        <div className="text-center mb-24">

          <h2 className="text-5xl md:text-6xl font-bold mb-6">

            My <span className="text-green-400">Projects</span>

          </h2>


          <p className="text-gray-400 max-w-2xl mx-auto text-lg">

            Selected projects demonstrating my frontend development
            and IoT engineering skills.

          </p>

        </div>



        {/* Projects Grid */}

        <div className="grid md:grid-cols-2 gap-12">


          {projects.map((project, index) => (

            <div
              key={index}

              className="

              group
              bg-white/5
              backdrop-blur-lg
              border border-green-500/20
              rounded-3xl
              p-10

              hover:border-green-400
              hover:-translate-y-3
              hover:shadow-green-500/10

              transition duration-500

              "

            >


              {/* Category */}

              <p className="text-green-400 text-sm font-semibold mb-3">

                {project.category}

              </p>



              {/* Title */}

              <h3 className="text-3xl font-bold text-white mb-4">

                {project.title}

              </h3>



              {/* Description */}

              <p className="text-gray-400 leading-relaxed mb-6">

                {project.desc}

              </p>



              {/* Tech */}

              <div className="text-sm text-gray-500 mb-8">

                <span className="text-green-400 font-medium">
                  Tech:
                </span>{" "}

                {project.tech}

              </div>



              {/* Buttons */}

              <div className="flex gap-4">


             <button
className="
px-6 py-3
border border-green-400
rounded-xl
text-green-400

hover:bg-green-400
hover:text-black
hover:scale-105
hover:shadow-lg
hover:shadow-green-400/30

transition duration-300
"
>
Live Demo
</button>



                <button
                 className="
px-6 py-3
bg-green-400
text-black
rounded-xl
font-semibold

hover:scale-105
hover:shadow-lg
hover:shadow-green-400/30

transition duration-300
"

                >
                  Source Code
                </button>


              </div>


              {/* Bottom Glow Line */}

              <div className="mt-8 h-[2px] w-full bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-40"></div>


            </div>

          ))}


        </div>


      </div>

    </section>
  );
}

export default Projects;