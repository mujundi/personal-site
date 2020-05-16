import React from "react"

import styles from "./projects.module.scss"
import content from "../../content/projects"
import images from "../../content/images/images"
import Project from "../project"

const Projects = () => {
  return (
    <div>
      <div className={styles.container}>
        <h2>Projects</h2>
        <div className={styles.projects}>
          <div>
            <Project
              title={content.one.title}
              description={content.one.description}
              techs={content.one.techs}
              liveUrl={content.one.liveUrl}
              repoUrl={content.one.repoUrl}
              imgUrl={images.otm}
            />
            <Project
              title={content.two.title}
              description={content.two.description}
              techs={content.two.techs}
              repoUrl={content.two.repoUrl}
              imgUrl={images.bio}
            />
          </div>
          <div>
            <Project
              title={content.three.title}
              description={content.three.description}
              techs={content.three.techs}
              liveUrl={content.three.liveUrl}
              repoUrl={content.three.repoUrl}
              imgUrl={images.xpnsr}
            />
            <Project
              title={content.four.title}
              description={content.four.description}
              techs={content.four.techs}
              repoUrl={content.four.repoUrl}
              imgUrl={images.assembler}
            />
          </div>
        </div>
      </div>
      <hr className={styles.line} />
    </div>
  )
}

export default Projects
