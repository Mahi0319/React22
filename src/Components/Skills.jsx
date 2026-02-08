import React from "react";

function Skills() {
  return (
    <section id="Skills" className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">

        {/* Heading */}
        <div className="flex flex-wrap w-full mb-12 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            My Skills
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Technologies and programming languages I work with while building
            modern web applications.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap -m-4">

          {/* HTML */}
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <h2 className="text-lg text-gray-900 font-medium mb-2">HTML</h2>
              <p>Structure and semantic layout of web pages.</p>
            </div>
          </div>

          {/* CSS */}
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <h2 className="text-lg text-gray-900 font-medium mb-2">CSS / Tailwind</h2>
              <p>Responsive styling and modern UI design.</p>
            </div>
          </div>

          {/* JavaScript */}
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <h2 className="text-lg text-gray-900 font-medium mb-2">JavaScript</h2>
              <p>Interactive and dynamic web functionality.</p>
            </div>
          </div>

          {/* React */}
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <h2 className="text-lg text-gray-900 font-medium mb-2">React.js</h2>
              <p>Component-based frontend development.</p>
            </div>
          </div>

          {/* C */}
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <h2 className="text-lg text-gray-900 font-medium mb-2">C</h2>
              <p>Programming fundamentals and logic building.</p>
            </div>
          </div>

          {/* Java / Python */}
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <h2 className="text-lg text-gray-900 font-medium mb-2">Java & Python</h2>
              <p>Object-oriented concepts and problem solving.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;
