/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"

const Seo = ({ title, description }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    {/* Preconnect untuk Google Fonts */}
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
    {/* Pastikan display=swap */}
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;900&family=Noto+Serif:wght@400&display=swap"
      rel="stylesheet"
    />
  </Helmet>
)

export default Seo
