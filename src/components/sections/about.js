import React from "react"
import aboutStyles from "./about.module.scss"

const handleScroll = () => {}

const About = () => {
  const backgroundOne =
    "Hi! I'm Musa, a software engineer with a background in the biological and medical sciences. I enjoy building websites, applications, and tools, but above that, I love to solve problems."
  const backgroundTwo =
    "My extensive experience in scientific research has aided in honing my observational and analytical skills as a developer. At the University of Florida, I have worked on multiple research teams. In addition to writing code, I contributed to several published research papers."
  const backgroundThree =
    "I want to utilize my skillset as a software developer to bring value to meaningful projects that will challenge me and allow me to leverage my years of coding and research experience in the construction of innovative software."

  return (
    <div id="about" className={aboutStyles.about}>
      <h2>About Me</h2>
      <div className={aboutStyles.background}>
        <p>{backgroundOne}</p>
        <p>{backgroundTwo}</p>
        <p>{backgroundThree}</p>
      </div>
      <hr />
    </div>
  )
}

export default About
