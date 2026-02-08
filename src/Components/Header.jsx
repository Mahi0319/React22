import React from "react";
function Header(){
    return(
        <>
        <section className="">
            <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">Portfolio</span>
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <a href="#About" className="mr-5 hover:text-gray-900">About Me</a>
      <a href="#Skills" className="mr-5 hover:text-gray-900">Skills</a>
      <a href="#Projects" className="mr-5 hover:text-gray-900">Projects</a>
      <a href="#Certifications" className="mr-5 hover:text-gray-900">Certifications</a>
      <a href="#Contact" className="mr-5 hover:text-gray-900">Contact me</a>
    </nav>
  </div>
</header>
        </section>
        </>
    )
}
export default Header;