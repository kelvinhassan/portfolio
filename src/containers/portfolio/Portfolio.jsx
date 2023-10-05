import React, { useState } from "react"
import { BsPersonWorkspace } from "react-icons/bs"
import PageHeaderContent from "../../components/pageHeaderContent/PageHeaderContent"
import imageOne from "../../helper/images/3d-render-code.jpg"
import imageTwo from "../../helper/images/chen.jpg"
import imageThree from "../../helper/images/concept.jpg"
import imageFour from "../../helper/images/filmstripes.jpg"
import imageFive from "../../helper/images/markus-spiske.jpg"
import "./style.scss"
const portfolioData = [
  {
    id: 2,
    name: "ecommerce",
    image: imageOne,
    link: "",
  },
  {
    id: 3,
    name: "Flask webapp",
    image: imageTwo,
    link: "https://github.com/kelvinhassan/Flask_webapp_authentication",
  },
  {
    id: 2,
    name: "Kelflix Movie App",
    image: imageFour,
    link: "https://kelflix-b208d.web.app/",
  },
  {
    id: 3,
    name: "Flask Jobs Website",
    image: imageFive,
    link: "https://github.com/kelvinhassan/kelvin-careers-website-v2",
  },
  {
    id: 2,
    name: "Careers website",
    image: imageThree,
    link: "https://kelvin-careers-website.onrender.com/",
  },
]
const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "JavaScript",
  },
  {
    filterId: 3,
    label: "Python",
  },
]

const Portfolio = () => {
  const [filteredValue, setFilteredValue] = useState(1)
  const [hoveredValue, setHoveredValue] = useState(null)

  function handleFilter(currentId) {
    setFilteredValue(currentId)
  }

  function handleHover(index) {
    setHoveredValue(index)
  }

  const handleClick = (currentLink) => {
    window.location.href = currentLink
  }

  const filteredItems =
    filteredValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredValue)

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsPersonWorkspace size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredValue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__items"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__items__img-wrapper">
                <a href={item.link}>
                  <img alt="portofolio images" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button onClick={() => handleClick(item.link)}>
                      Visit
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
