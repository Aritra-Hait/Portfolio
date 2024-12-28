import react from 'react'
import Navbar from "./components/Navbar/Navbar.jsx"
import Intro from "./components/Intro/Intro.jsx"
import Skills from "./components/Skills/Skill.jsx"
import Projects from "./components/Projects/Projects.jsx"
import Contact from "./components/Contact/Contact.jsx"
import CP from "./components/CP/Cp.jsx"
import './App.css'

function App() {

  return (
    <div className='App'>
      <Navbar />
      <Intro />
      <Skills />
      <Projects />
      <CP />
      <Contact />
    </div>

  )
}

export default App
