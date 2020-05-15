import React from "react"

import styles from "./job.module.scss"

const Job = ({
  title,
  location,
  subject,
  start,
  end,
  duties,
  techs,
  pub,
  publink,
  syllabus,
}) => {
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
        {pub && (
          <div className={styles.pub}>
            Notable publication(s):{" "}
            <p>
              {pub}{" "}
              <a href={publink} target="_blank" className={styles.publink}>
                {publink}
              </a>
            </p>
          </div>
        )}
        {syllabus && (
          <div className={styles.pub}>
            <a
              target="_blank"
              href="https://www.eng.ufl.edu/eed/wp-content/uploads/sites/115/2017/05/COP2271_C_Spring17.pdf"
            >
              Click here to see a sample of the COP2271 syllabus.
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default Job
