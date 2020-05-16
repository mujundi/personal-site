import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={styles.footer}>
      <p>Created by {data.site.siteMetadata.author}, © 2020</p>
      <div className={styles.btndiv}>
        <a
          href="https://github.com/mujundi/personal-site"
          target="_blank"
          className={styles.repobtn}
        >
          View this website's code!
        </a>
      </div>
      <hr />
    </footer>
  )
}

export default Footer
