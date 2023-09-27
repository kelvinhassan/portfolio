import React from "react"
import "./App"
import "./App.scss"
import { Routes, Route, useLocation } from "react-router-dom"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import { Home, About, Resume, Skills, Portfolio, Contact } from "./containers"
import Navbar from "./components/navBar/Navbar"
import particles from "./utils.js/particles"

const App = () => {
  const location = useLocation()
  console.log(location)
  const handleInit = async (main) => {
    await loadFull(main)
  }
  const renderParticlesJsInHomePage = location.pathname === "/"

  return (
    <div className="App">
      {/* particles.js */}
      {renderParticlesJsInHomePage && (
        <Particles id="particles" options={particles} init={handleInit} />
      )}

      {/* navbar.js */}
      <Navbar />
      {/* main pagevcontent*/}
      <div className="App__main-page-content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
