import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import Hero from "../components/sections/hero"
import About from "../components/sections/about"
import Work from "../components/sections/work"
import Projects from "../components/sections/projects"
import Contact from "../components/sections/contact"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Work />
      <Projects />
      <Contact />
    </Layout>
  )
}

export default IndexPage
