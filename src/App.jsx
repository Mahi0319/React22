import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/Aboutme";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Certificates from "./Components/Certifications";
import Contact from "./Components/Contact";
import Task from "./Components/Login";
import HomePage from "./Components/HomePage";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<Certificates />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Task />} />
      </Routes>
    </>
  );
}

export default App;