import React from "react";

function Certificates() {
  const certs = [
    {
      title: "Vibe Coding – Top Performer",
      desc: "Recognized as a top performer for demonstrating strong problem-solving and coding skills during the Vibe Coding event.",
      img: "/VIBE CODING.jpeg",
    },
    {
      title: "2nd Prize – Web Architect (CSI Mahotsav)",
      desc: "Awarded second prize for designing and presenting a web architecture solution in a competitive technical event.",
      img: "/Web architect 2 prize.jpeg",
    },
    {
      title: "Full Stack Development Completion",
      desc: "Successfully completed full stack training covering frontend and backend fundamentals and project development.",
      img: "/Full stack 2-1.jpeg",
    },
    {
      title: "Wiser Qubitech – Course Completion",
      desc: "Completed industry-focused technical training program enhancing practical development skills.",
      img: "/WISER .jpeg",
    },
    {
      title: "Innovarsity – Workshop Certificate",
      desc: "Participated in hands-on technical workshop focused on modern development tools and practices.",
      img: "/INNOVARSITY workshop.jpeg",
    },
  ];

  return (
    <section id="Certifications" className="text-gray-600 body-font bg-gray-50">
      <div className="container px-5 py-24 mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Certifications
          </h1>

          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            These certifications highlight my achievements and active
            participation in technical learning, workshops, and development
            programs that strengthened my practical skills.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-8">

          {certs.map((c, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              {/* Image */}
              <img
                src={c.img}
                alt="certificate"
                className="md:w-64 w-full h-48 object-cover"
              />

              {/* Text */}
              <div className="p-6 flex-1">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {c.title}
                </h2>

                <p className="leading-relaxed mb-4">{c.desc}</p>

                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition">
                  View Certificate
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Certificates;
