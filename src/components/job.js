import React from "react"

import styles from "./job.module.scss"

const Job = ({ title, location, subject, start, end, duties, techs }) => {
  return (
    <div className={styles.job}>
      <h4>
        {title} | <span className={styles.location}>{location}</span>
      </h4>
      <h5>{subject}</h5>
      <h6>
        <span className={styles.dates}>
          {start} - {end}
        </span>
      </h6>
      <div>
        <ul className={styles.techs}>
          Primary techs:
          {techs.map(tech => {
            return <li>{tech}</li>
          })}
        </ul>
        <ul className={styles.duties}>
          {duties.map(duty => {
            return <li>{duty}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default Job
