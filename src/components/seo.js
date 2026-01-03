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
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;&family=Noto+Serif:wght@400&display=swap"
      rel="stylesheet"
    />
    <link
      rel="preload"
      as="font"
      href="https://fonts.gstatic.com/s/montserrat/v25/JTUSjIg1_7g6aGg.woff2"
      type="font/woff2"
      crossOrigin="anonymous"
    />
  </Helmet>
)

export default Seo
