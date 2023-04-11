import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {

  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  )
}

export default App
