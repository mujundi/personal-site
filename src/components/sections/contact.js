import React from "react"
import styles from "./contact.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

const Contact = () => {
  return (
    <div id="contact" className={styles.container}>
      <h2>Contact Me</h2>
      <h3 className={styles.at}>musajundi@gmail.com</h3>
      <div className={styles.social}>
        <a href="https://www.linkedin.com/in/musajundi/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>

        <a href="https://github.com/mujundi" target="_blank">
          <FontAwesomeIcon icon={faGithubSquare} />
        </a>
      </div>
    </div>
  )
}

export default Contact
