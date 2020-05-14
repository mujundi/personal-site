import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import Hero from "../components/sections/hero"
import About from "../components/sections/about"
import Work from "../components/sections/work"

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Work />
    </Layout>
  )
}

export default IndexPage
