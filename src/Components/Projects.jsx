import React from "react";

function Projects() {
  return (
    <section id="Projects" className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">

        <h1 className="text-3xl font-bold text-center mb-12 text-gray-900">
          My Projects
        </h1>

        <div className="-my-8 divide-y-2 divide-gray-200">

          {/* Project 1 */}
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold text-gray-700">Web Development</span>
              <span className="mt-1 text-gray-500 text-sm">React Project</span>
            </div>

            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 mb-2">
                Portfolio Website
              </h2>
              <p className="leading-relaxed">
                A personal portfolio website built to showcase my skills,
                projects, and contact information. Fully responsive and built
                using modern frontend technologies.
              </p>
              <p className="mt-2 text-sm text-blue-500 font-semibold">
                Tech: HTML, CSS, JavaScript, React
              </p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold text-gray-700">Frontend</span>
              <span className="mt-1 text-gray-500 text-sm">Workshop Project</span>
            </div>

            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 mb-2">
                Ship Reservation System
              </h2>
              <p className="leading-relaxed">
                A frontend ship reservation system where users can view ship
                details and make reservations using a clean and interactive UI.
              </p>
              <p className="mt-2 text-sm text-blue-500 font-semibold">
                Tech: HTML, CSS, JavaScript
              </p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold text-gray-700">Concept Web App</span>
              <span className="mt-1 text-gray-500 text-sm">UI Focused</span>
            </div>

            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 mb-2">
                KIVO — Kids Integrated Value-Oriented Mobile
              </h2>
              <p className="leading-relaxed">
                A value-oriented website concept designed for kids combining
                learning and technology in a simple and user-friendly interface.
                Focused on clean UI, responsiveness, and structured content.
              </p>
              <p className="mt-2 text-sm text-blue-500 font-semibold">
                Tech: HTML, CSS, JavaScript
              </p>
            </div>
          </div>

          {/* Project 4 */}
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold text-gray-700">IoT Hardware</span>
              <span className="mt-1 text-gray-500 text-sm">Arduino Based</span>
            </div>

            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 mb-2">
                Farmer Soil Testing Kit
              </h2>
              <p className="leading-relaxed">
                Implemented a hardware-based soil testing kit using Arduino and
                sensors to measure soil parameters. Data was sent to the cloud
                using Blynk and stored/visualized via ThingSpeak graphs.
                Helped me understand IoT data acquisition and cloud integration.
              </p>
              <p className="mt-2 text-sm text-blue-500 font-semibold">
                Tech: Arduino, Soil Sensors, Blynk, ThingSpeak
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;
