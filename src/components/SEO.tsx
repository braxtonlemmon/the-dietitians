import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

interface SEOProps {
  description: string
  title: string
}

const SEO: React.FC<SEOProps> = ({description, title}) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            keywords
          }
        }
      }
    `
  )

  const metaDescription = description || data.site.siteMetadata.description
  return (
    <head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={data.site.siteMetadata.keywords} />
    </head>
  )
}

export default SEO
