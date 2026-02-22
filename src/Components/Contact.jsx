import React from "react";

function Contact() {
  return (
    <section
      id="Contact"
      className="relative py-28 px-6 bg-black overflow-hidden"
    >
      {/* Neon Background Glow */}
      <div className="absolute w-96 h-96 bg-green-500 rounded-full blur-3xl opacity-10 top-0 left-0"></div>

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-400 tracking-wider drop-shadow-[0_0_12px_#00ff00]">
            Contact Me
          </h2>

          <p className="text-gray-500 mt-4">
            Feel free to reach out for collaboration or opportunities.
          </p>
        </div>

        {/* Form Card */}
        <div className="border border-green-500 rounded-2xl p-10 bg-black
                        shadow-[0_0_20px_rgba(0,255,0,0.2)]
                        hover:shadow-[0_0_35px_rgba(0,255,0,0.5)]
                        transition duration-500">

          <form className="grid md:grid-cols-2 gap-6">

            {/* Name */}
            <input
              type="text"
              placeholder="Your Name"
              className="bg-black border border-green-500 rounded-lg px-4 py-3 
                         text-gray-300 outline-none
                         focus:shadow-[0_0_15px_#00ff00]"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Your Email"
              className="bg-black border border-green-500 rounded-lg px-4 py-3 
                         text-gray-300 outline-none
                         focus:shadow-[0_0_15px_#00ff00]"
            />

            {/* Message */}
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="md:col-span-2 bg-black border border-green-500 
                         rounded-lg px-4 py-3 text-gray-300 outline-none
                         focus:shadow-[0_0_15px_#00ff00]"
            ></textarea>

            {/* Button */}
            <div className="md:col-span-2 text-center">
              <a
                href="mailto:24jr1a05p9@gmail.com"
                className="inline-block px-8 py-3 bg-green-500 text-black 
                           font-semibold rounded-lg
                           hover:shadow-[0_0_20px_#00ff00]
                           transition duration-300"
              >
                Send Message
              </a>
            </div>

          </form>

        </div>

        {/* Contact Info */}
        <div className="text-center mt-16 text-gray-500">
          <p className="text-green-400 font-semibold">
            24jr1a05p9@gmail.com
          </p>

          <p className="mt-4">
            Guntur <br />
            Andhra Pradesh, India
          </p>
        </div>

      </div>
    </section>
  );
}

export default Contact;