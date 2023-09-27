import React from "react"
import { useNavigate } from "react-router-dom"
import { Animate } from "react-simple-animate"
import "./style.scss"

const Home = () => {
  const navigate = useNavigate()

  const handleNavigateToContactMePage = () => {
    navigate("/contact")
  }
  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Kelvin <br /> The TechTinkerer
          <br />
          Fullstack Developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)", // Corrected spelling
        }}
        end={{
          transform: "translateY(0px)", // Use translateY to bring it up from the bottom
        }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigateToContactMePage}>Hire Me</button>
        </div>
      </Animate>
    </section>
  )
}

export default Home
