import React from "react"
import Fade from "react-reveal/Fade"

import Image3 from "../../images/kerupuk-home.webp"

const AboutHeader = () => {
  return (
    <Fade>
      <div className="max-w-7xl mx-auto mt-10">
        <div className="overflow-hidden rounded-xl max-h-100 m-4">
          <img alt="Kerupuk Kulit Sapi Asli" src={Image3} className="w-full h-full object-contain" height={1024} width={574}></img>
        </div>
        <div className="mt-10 px-8">
          <h1 className="font-bold text-xl text-black text-gradient bg-gradient-to-r from-pink to-purple">
            Tentang Kerupuk Kulit Sapi Asli
          </h1>
          <h2 className="text-black text-6xl font-semibold leading-snug xxs:text-lg xs:text-lg sm:text-3xl lg:text-6xl">
            Kerupuk kulit sapi asli yang Gurih Renyah Tanpa Bahan Pengawet, dan halal. Camilan sehat favorit keluarga Indonesia, diproses higienis dari bahan pilihan.
          </h2>
        </div>
      </div>
    </Fade>
  )
}

export default AboutHeader
