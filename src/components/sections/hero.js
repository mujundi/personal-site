import React from "react"
import { withPrefix } from "gatsby"
import TextLoop from "react-text-loop"
import heroStyles from "./hero.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import scrollTo from "gatsby-plugin-smoothscroll"

const Hero = () => {
  const name = "Musa Jundi"
  const header = "I build"
  const scroll = ["software.", "web apps.", "solutions."]

  return (
    <div className={heroStyles.hero}>
      <h2 className={heroStyles.name}>{name}</h2>

      <ul className={heroStyles.nav}>
        <li onClick={() => scrollTo("#about")}>About</li>
        <li onClick={() => scrollTo("#work")}>Work</li>
        <li onClick={() => scrollTo("#projects")}>Projects</li>
        <li onClick={() => scrollTo("#contact")}>Contact</li>
        <li>
          <a
            rel="noopener noreferrer"
            href={withPrefix("/resume.pdf")}
            target="_blank"
          >
            Resume <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        </li>
      </ul>
      <h1>
        <span className={heroStyles.header}>{header}</span>
        <br />
        <TextLoop interval={3200}>
          {scroll.map(item => {
            return <span className={heroStyles.item}>{item}</span>
          })}
        </TextLoop>
      </h1>
      <div className={heroStyles.social}>
        <a href="https://www.linkedin.com/in/musajundi/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>

        <a href="https://github.com/mujundi" target="_blank">
          <FontAwesomeIcon icon={faGithubSquare} />
        </a>
      </div>
      <hr />
    </div>
  )
}

export default Hero
