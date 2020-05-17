import React from "react"

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
      <Head
        title="Musa Jundi Portfolio"
        author="Musa Jundi"
        description="Musa Jundi is a developer with experience building tools and web apps with varied applications. Check out the rest of Musa Jundi's personal website and his GitHub and LinkedIn profiles for more information."
        siteUrl="https://www.musajundi.com"
      />
      <Hero />
      <About />
      <Work />
      <Projects />
      <Contact />
    </Layout>
  )
}

export default IndexPage
