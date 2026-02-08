import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './Components/Hero'
import Header from './Components/Header'
import About from './Components/Aboutme'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Certificates from './Components/Certifications'
import Contact from './Components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Certificates/>
      <Contact/>
    </>
  )
}

export default App
