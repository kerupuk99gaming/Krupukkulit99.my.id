import React from "react"
import Fade from "react-reveal/Fade"

import HeroImage from "../images/cap-kerupuk.webp"
import Image1 from "../images/kerupuk-home.webp"
import Image2 from "../images/kerupuk-rame.webp"
import Image3 from "../images/kerupuk-kecil.webp"
import Image4 from "../images/kerupuk-bal.webp"
import Image5 from "../images/kerupuk-2.webp"
import Image6 from "../images/kerupuk.webp"

const Gallery = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <Fade duration={2200}>
        <div className="flex flex-row justify-space xxs:flex-col-reverse xs:flex-col-reverse sm:flex-row xxs:flex-col xs:flex-col sm:flex-row mb-5">
          <div className="max-h-80 w-1/2 flex flex-col justify-center bg-gradient-to-r from-yellow to-yellow p-8 rounded-xl m-4 xxs:w-full xs:w-full sm:w-full lg:w-full">
            <h1 className="text-black opacity-70 text-4xl font-semibold">
              PRODUK KAMI
            </h1>
            <h1 className="text-white text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl">
              Kerupuk Kulit Sapi Asli
            </h1>
            <p className="text-lg mt-4 text-black xxs:text-sm sm:text-lg">
              Nikmati kerupuk kulit sapi asli yang Gurih Renyah Tanpa Bahan Pengawet, dan dijamin halal. Tersedia berbagai ukuran kemasan, cocok untuk camilan keluarga, oleh-oleh, maupun pelengkap hidangan favorit Anda.
            </p>
          </div>
          <div className="rounded-xl w-auto h-full object-cover flex justify-center">
            <img src={HeroImage} alt="cap kerupuk kulit sapi" width={206} height={196}></img>
          </div>
        </div>
      </Fade>

      {/* INI GAMBAR GAMBAR BANYAK DARI PRODUK */}
      <div className="max-w-7xl mx-auto px-8 mt-5">
        <Fade bottom cascade>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 md:h-80"
            >
              <img
                src={Image2}
                alt="kerupuk kulit sapi asli"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                width={570} 
                height={759} 
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Ukuran berfariasi
              </span>
            </a>

            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 md:col-span-2 md:h-80"
            >
              <img
                src={Image1}
                alt="kerupuk kulit sapi asli"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                width={1024} 
                height={576} 
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Tentu Ada Disini
              </span>
            </a>

            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 md:col-span-2 md:h-80"
            >
              <img
                src={Image3}
                alt="kerupuk kulit sapi asli"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                width={720} 
                height={1280} 
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Yang gurih dan Keriuk
              </span>
            </a>

            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 md:h-80"
            >
              <img
                src={Image1}
                alt="kerupuk kulit sapi asli"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                width={1024} 
                height={576} 
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Tentu Ada Disini
              </span>
            </a>

            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 md:h-80"
            >
              <img
                src={Image4}
                alt="kerupuk kulit sapi asli"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                width={640} 
                height={427} 
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Request Ukuran
              </span>
            </a>

            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 md:col-span-2 md:h-80"
            >
              <img
                src={Image1}
                alt="kerupuk kulit sapi asli"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                width={1024} 
                height={576} 
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Tentu Bisa Disini
              </span>
            </a>

            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 md:col-span-2 md:h-80"
            >
              <img
                src={Image5}
                alt="kerupuk kulit sapi asli"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                width={665} 
                height={374} 
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Yang Halal Dan Terjamin
              </span>
            </a>

            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 md:h-80"
            >
              <img
                src={Image1}
                alt="kerupuk kulit sapi asli"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                width={1024} 
                height={576} 
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Tentu Disini Adanya
              </span>
            </a>

            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 md:h-80"
            >
              <img
                src={Image6}
                alt="kerupuk kulit sapi asli"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                width={720} 
                height={1280} 
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Yang, Sayang... :v
              </span>
            </a>

            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 md:col-span-2 md:h-80"
            >
              <img
                src={Image1}
                alt="kerupuk kulit sapi asli"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                width={1024} 
                height={576}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Tentu Ada Disini Juga Sayang
              </span>
            </a>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Gallery

/* 
    <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
        <img src="https://source.unsplash.com/bYuI23mnmDQ"/>
        <img src="https://source.unsplash.com/Nllx4R-2c3o"/>
        <img src="https://source.unsplash.com/lp40q07DIe0"/>
        <img src="https://source.unsplash.com/wfalq01jJuU"/>
        <img src="https://source.unsplash.com/rMHNK_skwwU"/>
        <img src="https://source.unsplash.com/WBMjuGpbrCQ"/>
        <img src="https://source.unsplash.com/nCUZ5BYBL_o"/>
        <img src="https://source.unsplash.com/3u4fzMQZhjc"/>
        <img src="https://source.unsplash.com/haOIqIPSwps"/>
        <img src="https://source.unsplash.com/3UrYD7NNVxk"/>
        <img src="https://source.unsplash.com/fm1JKDItlVM"/>
        <img src="https://source.unsplash.com/qPpq1EVs8vw"/>
        <img src="https://source.unsplash.com/xRyL63AwZFE"/>
        <img src="https://source.unsplash.com/XeNKWTiCPNw"/>
        <img src="https://source.unsplash.com/DFt3T5r_4FE"/>
        <img src="https://source.unsplash.com/Ebwp2-6BG8E"/>
            </div>
             <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
*/
