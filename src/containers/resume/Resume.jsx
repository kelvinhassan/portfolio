import React from "react"
import { BsInfoCircleFill } from "react-icons/bs"
import PageHeaderContent from "../../components/pageHeaderContent/PageHeaderContent"

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="My Resume"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="timeline">
        <div className="timeline__experience">
          <h3 className="timeline__experience__header-text">Experience</h3>
        </div>
        <div className="timeline__education">
          <h3 className="timeline__education__header-text">Experience</h3>
        </div>
      </div>
    </section>
  )
}

export default Resume
