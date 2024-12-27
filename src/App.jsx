import { useState } from 'react'
import Navbar from "./components/Navbar/Navbar.jsx"
import Intro from "./components/Intro/Intro.jsx"
import Skills from "./components/Skills/Skill.jsx"
import Projects from "./components/Projects/Projects.jsx"

import './App.css'

function App() {

  return (
    <div className='App'>
      <Navbar />
      <Intro />
      <Skills />
      <Projects />

    </div>

  )
}

export default App
