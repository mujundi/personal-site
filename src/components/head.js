import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import favicon from "../../static/favicon.ico"

const Head = ({ title, siteUrl, description, author }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          description
          siteUrl
        }
      }
    }
  `)

  return (
    <Helmet
      title={`${title || data.site.siteMetadata.title}`}
      author={`${author || data.site.siteMetadata.author}`}
    >
      <meta
        name="description"
        content={description || data.site.siteMetadata.description}
      />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <html lang="en" />
      <link rel="icon" href={favicon} />
      <link
        rel="canonical"
        href={`${siteUrl || data.site.siteMetadata.siteUrl}`}
      />
    </Helmet>
  )
}

export default Head
