import React from "react"
import "./App"
import { Routes, Route } from "react-router-dom"
import { Home, About, Resume, Skills, Portfolio, Contact } from "./containers"
import Navbar from "./components/navBar/Navbar"
const App = () => {
  return (
    <div className="App">
      {/* particles.js */}
      {/* navbar.js */}
      <Navbar />
      {/* main pagevcontent*/}
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
