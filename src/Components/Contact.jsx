import React from "react";
function Contact(){
    return(
        <>
        <section id="Contact" className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">

    {/* Heading */}
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        Contact Me
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        Feel free to reach out for collaboration, project discussions, or opportunities.
      </p>
    </div>

    {/* Form */}
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <form className="flex flex-wrap -m-2">

        {/* Name */}
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3"
            />
          </div>
        </div>

        {/* Email */}
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3"
            />
          </div>
        </div>

        {/* Message */}
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message..."
              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none"
            ></textarea>
          </div>
        </div>

        {/* Button */}
        <div className="p-2 w-full">
          <a
            href="mailto:24jr1a05p9@gmail.com"
            className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 hover:bg-blue-600 rounded text-lg"
          >
            Send Message
          </a>
        </div>

      </form>

      {/* Footer Info */}
      <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
        <a className="text-blue-500">
          24jr1a05p9@gmail.com
        </a>

        <p className="leading-normal my-5">
        Guntur
          <br />
          Guntur, Andhra pradesh,India.
        </p>

        {/* Social Icons Placeholder */}
        <span className="inline-flex">
          <a href="#" className="text-gray-500">Facebook</a>
          <a href="#" className="ml-4 text-gray-500">Twitter</a>
          <a href="#" className="ml-4 text-gray-500">Instagram</a>
          <a href="#" className="ml-4 text-gray-500">WhatsApp</a>
        </span>

      </div>
    </div>
  </div>
</section>

        </>
    )
}
export default Contact;