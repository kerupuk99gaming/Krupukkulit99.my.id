import React from "react"
import Fade from "react-reveal/Fade"

const WorkPage = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      {/* <Fade duration={2200}>
        <div className="flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row mb-5 max-h-80">
          <div className="w-2/4 flex flex-col justify-center bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-full lg:w-full">
            <h1 className="text-5xl mt-5 font-bold text-white">
              test<br></br>
            </h1>
            <p className="mt-5 text-white opacity-70">
              test
            </p>
          </div>
          <div className="overflow-hidden rounded-xl m-5 xxs:w-full xs:w-full sm:w-4/6 object-cover object-center h-full w-full">
            <img src={Image3} alt="image"></img>
          </div>
        </div>
      </Fade> */}

      {/* <Fade bottom cascade>
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
      </Fade> */}

      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold">KEUNGGULAN KERUPUK KULIT SAPI ASLI</h2>
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
          Gurih, Renyah, Halal, Tanpa Bahan Pengawet
        </h3>
      
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Kerupuk kulit sapi asli kami diolah dari bahan pilihan, diproses secara higienis tanpa bahan pengawet, dan dijamin halal. Rasanya gurih, teksturnya renyah, cocok untuk camilan sehat keluarga maupun pelengkap hidangan favorit Anda.
        </p>
      </div>
    </div>
  )
}

export default WorkPage
