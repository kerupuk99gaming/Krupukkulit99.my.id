import React from "react"
import Fade from "react-reveal/Fade"

// Assets
import HeroImage from "../../images/kerupuk-1.webp"
import Image1 from "../../images/kerupuk-bal2.jpg"
import Image2 from "../../images/kerupuk-rame.jpg"
import Image3 from "../../images/kerupuk-kecil.jpg"
//

const FeatureSection = () => {
  return (
    <div className="max-w-7xl mx-auto">
      
      <Fade bottom cascade>
        <div className="mt-10 flex flex-row flex-wrap justify-center align-middle text-center px-2">
          <div style={{ backgroundColor: "#facc15" }} className="w-1/4 p-8 rounded-xl mx-2 my-5 xxs:w-full xs:w-full sm:w-1/5">
            <h3 className="text-black text-2xl">Gurih</h3>
            <h4 className="mt-10 text-black opacity-70 text-xl">Pake nanya!</h4>
          </div>
          <div style={{ backgroundColor: "#facc15" }} className="w-1/4 p-8 rounded-xl mx-2 my-5 xxs:w-full xs:w-full sm:w-1/5">
            <h3 className="text-black text-2xl">Keriuk</h3>
            <h4 className="mt-10 text-black opacity-70 text-xl">Oh jelas</h4>
          </div>
          <div style={{ backgroundColor: "#facc15" }} className="w-1/4 p-8 rounded-xl mx-2 my-5 xxs:w-full xs:w-full sm:w-1/5">
            <h3 className="text-black text-2xl">Tanpa bahan pengawet</h3>
            <h4 className="mt-10 text-black opacity-70 text-xl">Aseli cuy</h4>
          </div>
          <div style={{ backgroundColor: "#facc15" }} className="w-1/4 p-8 rounded-xl mx-2 my-5 xxs:w-full xs:w-full sm:w-1/5">
            <h3 className="text-black text-2xl">Halal</h3>
            <h4 className="mt-10 text-black opacity-70 text-xl">100%</h4>
          </div>
        </div>
      </Fade>

      <div className="max-w-7xl mx-auto lg:px-8 md:px-3">
        <div className="mx-auto max-w-7xl px-4 sm:mt-10 sm:px-6 md:mt-10 lg:mt-10 lg:px-0 xl:mt-10 flex flex-col lg:flex-row gap-3 lg:flex-justify">
          <div className="lg:w-1/2 my-4">
            <img
              className="rounded-xl h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src={HeroImage}
              alt="HeroImage"
            ></img>
          </div>

          <div className="lg:w-1/2 sm:text-center lg:text-right flex flex-col justify-center">
            <h2 className="text-black text-4xl font-semibold">KENAPA MEMILIH KERUPUK KULIT SAPI ASLI?</h2>
            <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-darkpurple to-purple">
              Gurih, Renyah, dan Sehat Setiap Saat!
            </h3>

            <p className="mt-3 text-base text-black-70 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto lg:mr-0">
              Kerupuk kulit sapi asli, diolah secara higienis tanpa bahan pengawet. Renyah, gurih, dan cocok untuk camilan sehat keluarga atau teman makan Anda setiap hari.
            </p>

            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-end">
              <div className="rounded-md">
                <a
                  href="tel:#"
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-yellow text-white hover:text-black border border-yellow hover:bg-transparent md:text-lg md:px-10"
                >
                  Hubungi Kami
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="/gallery"
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 border border-yellow text-base font-medium rounded-md text-black hover:text-white bg-transparent hover:bg-yellow md:py-3 md:text-lg md:px-10"
                >
                  Menu Kami
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row px-4 xxs:px-4 xs:px-4">
          <div style={{ backgroundColor: "#facc15" }} className="w-1/3 p-8 rounded-xl mx-2 my-5 xxs:w-full xs:w-full sm:w-1/3">
            <span className="text-black font-semibold font-montserrat text-4xl">
              KEUNGGULAN PRODUK
            </span>
            <div className="mt-5">
              <div>
                <p className="text-black text-2xl">Bahan Kulit Sapi Pilihan</p>
                <p className="text-black opacity-50 text-sm">
                  Menggunakan kulit sapi asli berkualitas tinggi.
                </p>
              </div>
              <div className="mt-5">
                <p className="text-black text-2xl">Tanpa Bahan Pengawet</p>
                <p className="text-black opacity-50 text-sm">
                  Diproses secara higienis tanpa tambahan bahan kimia.
                </p>
              </div>
              <div className="mt-5">
                <p className="text-black text-2xl">Renyah & Gurih</p>
                <p className="text-black opacity-50 text-sm">
                  Tekstur super renyah dan rasa gurih alami khas kerupuk kulit sapi.
                </p>
              </div>
            </div>
          </div>
          
          <div style={{ backgroundColor: "#facc15" }} className="w-1/3 p-8 rounded-xl mx-2 my-5 xxs:w-full xs:w-full sm:w-4/6">
            <h2 className="text-black text-4xl">
              Kelezatan Kerupuk Kulit Sapi Asli
            </h2>
            <p className="mt-10 text-black opacity-70">
              Setiap kerupuk kulit sapi asli kami dibuat dari kulit sapi pilihan, diolah secara higienis tanpa bahan pengawet. Rasakan kerenyahan dan gurihnya yang khas, cocok untuk camilan maupun pelengkap hidangan favorit keluarga Anda.
            </p>
          </div>
        </div>
      </Fade>

      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold opacity-70">
          PRODUK UNGGULAN KAMI
        </h2>
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
          Kerupuk Kulit Sapi Asli, Favorit Keluarga Indonesia
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Kami menghadirkan kerupuk kulit sapi asli yang gurih, renyah, dan sehat. Diproses tanpa bahan pengawet, halal, serta cocok untuk camilan maupun pelengkap hidangan keluarga Anda.
        </p>
      </div>

      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold opacity-70">
          SIAP KIRIM KE BEBERAPA TEMPAT DI TANGERANG
        </h2>
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
          Pesan Sekarang, Nikmati Kerenyahannya!
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Kerupuk kulit sapi asli kami tersedia dalam berbagai ukuran kemasan dan siap dikirim ke beberapa tempat di Tangerang. Hubungi kami untuk pemesanan grosir maupun eceran.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md">
            <a
              href="/contact/"
              className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-yellow text-white hover:text-black border border-yellow hover:bg-transparent md:text-lg md:px-10"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>

      <Fade bottom cascade>
        <div className="grid grid-cols-3 mt-10 gap-4 xxs:grid-cols-1 lg:grid-cols-3 px-5">
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 flex justify-center aspect-square">
            <img alt="Image" src={Image1} className="w-full h-full object-cover" />
          </div>
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 flex justify-center aspect-square">
            <img alt="Image" src={Image2} className="w-full h-full object-cover" />
          </div>
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 hidden lg:block aspect-square">
            <img alt="Image" src={Image3} className="w-full h-full object-cover" />
          </div>
        </div>
      </Fade>

      <Fade bottom cascade>
        <div className="mt-10 flex flex-row flex-wrap justify-center align-middle text-center px-2">
          <div style={{ backgroundColor: "#facc15" }} className="w-1/4 p-8 rounded-xl mx-2 my-5 xxs:w-full xs:w-full sm:w-1/4">
            <h3 className="text-black text-2xl font-bold">10.000+</h3>
            <h4 className="mt-10 text-black opacity-70 text-xl">Pelanggan Puas</h4>
          </div>
          <div style={{ backgroundColor: "#facc15" }} className="w-1/4 p-8 rounded-xl mx-2 my-5 xxs:w-full xs:w-full sm:w-1/4">
            <h3 className="text-black text-2xl font-bold">Kami dagangkan di beberapa Kota</h3>
            <h4 className="mt-10 text-black opacity-70 text-xl">Tangerang ,Serang ,Cilegon dan Merak</h4>
          </div>
          <div style={{ backgroundColor: "#facc15" }} className="w-1/4 p-8 rounded-xl mx-2 my-5 xxs:w-full xs:w-full sm:w-1/4">
            <h3 className="text-black text-2xl font-bold">Sejak 2010</h3>
            <h4 className="mt-10 text-black opacity-70 text-xl">Pengalaman Terpercaya</h4>
          </div>
        </div>
      </Fade>
      
    </div>
  )
}

export default FeatureSection
