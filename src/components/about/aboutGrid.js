import React from "react"
import AboutTeamCard from "./aboutTeamCard"
import Image1 from "../../images/kerupuk-bal2.jpg"
import Image2 from "../../images/kerupuk-rame.jpg"
import Image3 from "../../images/kerupuk-kecil.jpg"


const AboutGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 my-20 grid grid-cols-3 gap-16 justify-items-center xxs:grid-cols-1 sm:grid-cols-3">
      <AboutTeamCard
        imgSrc={Image1}
        position="Kerupuk Kulit Sapi Pilihan"
        altText="Kerupuk Kulit Sapi Asli"
      />
      <AboutTeamCard
        imgSrc={Image2}
        position="Proses Higienis & Halal"
        altText="Proses Pembuatan Kerupuk Higienis dan Halal"
      />
      <AboutTeamCard
        imgSrc={Image3}
        position="Renyah & Gurih Alami"
        altText="Kerupuk Renyah dan Gurih Alami"
      />
    </div>
  )
}

export default AboutGrid
