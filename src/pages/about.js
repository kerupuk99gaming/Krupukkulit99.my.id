import React from "react"
import AboutPage from "../components/about/aboutPage"

import AboutGrid from "../components/about/aboutGrid"
import Seo from "../components/seo"

import Layout from "../components/layout"
import AboutExtra from "../components/about/aboutExtra"
import AboutHeader from "../components/about/aboutHeader"

const About = () => {
  return (
    <Layout>
      <Seo
        title="Kerupuk Kulit Sapi Asli, Gurih, Halal dan Tanpa Bahan Pengawet"
        description="Kerupuk kulit sapi asli, gurih, tanpa bahan pengawet, halal, dan cocok untuk camilan sehat keluarga. Hubungi kami untuk pemesanan dan informasi lebih lanjut."
      ></Seo>
      <AboutHeader></AboutHeader>
      <AboutPage></AboutPage>
      <AboutGrid></AboutGrid>
      <AboutExtra></AboutExtra>
    </Layout>
  )
}

export default About
