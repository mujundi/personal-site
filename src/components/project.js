import React from "react"
import styles from "./project.module.scss"

const Project = ({ title, description, techs, liveUrl, repoUrl, imgUrl }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={imgUrl} alt="project-photo" />
      </div>

      <div className={styles.text}>
        <div className={styles.btndiv}>
          {liveUrl && (
            <a href={liveUrl} target="_blank" className={styles.sitebtn}>
              View Site
            </a>
          )}
          {repoUrl && (
            <a href={repoUrl} target="_blank" className={styles.repobtn}>
              View Code
            </a>
          )}
        </div>
        <h4>{title}</h4>
        <ul className={styles.techs}>
          Techs:
          {techs.map(tech => {
            return <li>{tech}</li>
          })}
        </ul>

        <p>{description}</p>
      </div>
    </div>
  )
}

export default Project
