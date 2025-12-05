import * as React from "react"
import Layout from "../components/layout"

// Components
import Header from "../components/Home/header"
import FeatureSection from "../components/Home/featureSection"
import Testimonial from "../components/Home/testimonial"
import FeaturedBlog from "../components/FeaturedBlog"
import Seo from "../components/seo"

const IndexPage = () => (
  <div className="h-auto w-screen">
    <Layout>
      <Seo
        title="Kerupuk Kulit Sapi Asli, Gurih, Halal dan Tanpa Bahan Pengawet"
        description="Kerupuk kulit sapi asli, gurih, tanpa bahan pengawet, halal, dan cocok untuk camilan sehat keluarga. Hubungi kami untuk pemesanan dan informasi lebih lanjut."
      ></Seo>
      <Header></Header>
      <FeatureSection></FeatureSection>
      <FeaturedBlog></FeaturedBlog>
      <Testimonial></Testimonial>
    </Layout>
  </div>
)

export default IndexPage
