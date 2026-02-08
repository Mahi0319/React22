import React from "react";
function Header(){
    return(
        <>
        <section className="">
            <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span className="ml-3 text-xl">Portfolio</span>
    </a>
    <nav className="flex flex-wrap justify-center gap-2md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400">

      <a href="#About" className="mr-5 px-4 py-2 border rounded-lg shadow-sm hover:bg-blue-500 hover:text-white transition duration-300"
>About me</a>
      <a href="#Skills" className="mr-5 px-4 py-2 border rounded-lg shadow-sm hover:bg-blue-500 hover:text-white transition duration-300"
>Skills</a>
      <a href="#Projects" className="mr-5 px-4 py-2 border rounded-lg shadow-sm hover:bg-blue-500 hover:text-white transition duration-300"
>Projects</a>
      <a href="#Certifications" className="mr-5 px-4 py-2 border rounded-lg shadow-sm hover:bg-blue-500 hover:text-white transition duration-300"
>Certifications</a>
      <a href="#Contact" className="mr-5 px-4 py-2 border rounded-lg shadow-sm hover:bg-blue-500 hover:text-white transition duration-300"
>Contact me</a>
    </nav>
  </div>
</header>
        </section>
        </>
    )
}
export default Header;