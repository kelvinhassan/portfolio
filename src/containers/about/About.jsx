import React from "react"
import "./style.scss"
import { BsInfoCircleFill } from "react-icons/bs"
import PageHeaderContent from "../../components/pageHeaderContent/PageHeaderContent"
import { Animate } from "react-simple-animate"
import {
  DiJavascript1,
  DiPython,
  DiReact,
  DiVisualstudio,
} from "react-icons/di"
import { FaDev, FaDatabase } from "react-icons/fa"

const personalDetails = [
  {
    label: "Name :",
    value: "Kelvin Ng'era",
  },
  {
    label: "Nationality :",
    value: "Kenyan",
  },
  {
    label: "Address :",
    value: "Nairobi, Kenya",
  },
  {
    label: "Email :",
    value: "kelvinngerah@gmail.com ",
  },
  {
    label: "Contact No :",
    value: "+254 738 666 770",
  },
]

const jobSummary =
  "Hey there! 👋 I'm a Fullstack Developer with a passion for coding and solving complex problems.👨‍💻 I love blending the art of design with the skill of programming to deliver an immersive and engaging user experience in web development, proactive feature optimization and relentless debugging. A web Developer Wizard specializing in crafting innovative and visually captivating websites.💻✨ Pushing boundaries one line of code at a time & unleashing digital dreams. When I'm not glued to the computer screen, you'll find me exploring new landscapes as I love Travelling 🌍.  I am Excited to connect with fellow tech enthusiasts and wanderlust souls. Let's inspire and learn from each other! 💼💡🚀"

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3>Full Stack Developer</h3>
            <p>{jobSummary}</p>
          </Animate>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">Personal Info</h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <DiPython size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiJavascript1
                  size={60}
                  color="var(--yellow-theme-main-color)"
                />
              </div>
              <div>
                <DiReact size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiVisualstudio
                  size={60}
                  color="var(--yellow-theme-main-color)"
                />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  )
}

export default About
