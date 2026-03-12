import React from "react";
import Hero from "./Hero";
import Aboutme from "./Aboutme";
import Header from "./Header";
import Skills from "./Skills";
import Projects from "./Projects";
import Certificates from "./Certifications";
import Contact from "./Contact";
function HomePage(){
    return(
        <>
        <Header/>
        <Hero/>
        <Aboutme/>
        <Skills/>
        <Projects/>
        <Certificates/>
        <Contact/>
        </>
    )
}
export default HomePage;