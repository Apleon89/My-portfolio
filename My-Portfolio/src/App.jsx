import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import AboutMe from './components/AboutMe'

function App() {

  return (
    <div className="App">
      <Header />
      <AboutMe />
    </div>
  )
}

export default App
