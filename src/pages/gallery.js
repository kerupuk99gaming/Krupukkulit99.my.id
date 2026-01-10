import React from "react"
import Gallery from "../components/gallery-page"
import Layout from "../components/layout"
import Seo from "../components/seo"

const GalleryPage = () => {
  return (
    <Layout>
      <Seo
        title="Kerupuk Kulit Sapi Asli, Gurih Renyah Tanpa Bahan Pengawet"
        description="Kerupuk kulit sapi asli, Gurih Renyah Tanpa Bahan Pengawet, halal, dan cocok untuk camilan sehat keluarga. Hubungi kami untuk pemesanan dan informasi lebih lanjut."
      ></Seo>
      <Gallery></Gallery>
    </Layout>
  )
}

export default GalleryPage
