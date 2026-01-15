import { Link } from "gatsby"
import React from "react"

import logo from "../images/cap-kerupuk.webp"

const Footer = () => {
  return (
    <div className="m-4">
      <div className="max-w-7xl mx-auto mt-10 h-auto lg:mb-8 sm:mb-4 xs:mb-4 xxs:mb-4">
        <div className="footer bg-gradient-to-r from-yellow to-yellow p-10 mt-10 rounded-xl">
          <div className="grid grid-cols-2 xxs:grid-cols-1 lg:grid-cols-2">
            <div>
              <img className="object-contain" src={logo} alt="Logo kerupuk kulit 99"
              width={206}
              height={196}>
              </img>
              <p className="text-black opacity-70 text-sm mt-5 ">
                Kerupuk kulit sapi asli Gurih Renyah Tanpa Bahan Pengawet.<br />
                Diproses higienis tanpa bahan pengawet.<br />
                Camilan favorit keluarga Indonesia.
              </p>
              <p className="text-white text-lg font-bold mt-20">
                <span className="text-black font-montserrat font-semibold mt-20">
                  &copy; {new Date().getFullYear()}. All Rights Reserved.
                </span>
              </p>
              <div className="text-black font-bold block-inline">
                <p>
                  <a className="text-black font-bold block-inline" href="/">
                    Kerupuk Kulit Sapi Asli
                  </a>

                  <a
                    className="text-black font-semibold ml-1"
                    target="_blank"
                    href="https://cvaldi.my.id"
                  >
                    By Aldiansyah04
                  </a>
                  <a
                    href="https://github.com/Aldiansyah04"
                    target="_blank"
                  >
                    <img
                      className="w-5 h-5 mt-1"
                      src="/img/Github-Logo.png"
                      alt="GitHub"
                    ></img>
                  </a>
                </p>
              </div>
            </div>

            <iframe
              title="Lokasi Kerupuk Kulit 99"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d715.6835451501937!2d106.57353737186355!3d-6.234936358921431!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fd95b5385573%3A0x170c3524e3407628!2sPabrik%20kerupuk%20kulit%20Mamat!5e0!3m2!1sen!2sid!4v1768489553541!5m2!1sen!2sid"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '12px', marginTop: '20px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {/* Menu navigasi dipindah ke luar grid dan dipusatkan */}
          <div className="w-full flex justify-center items-center mt-8">
            <ul className="text-black text-xl font-montserrat font-medium flex flex-row flex-wrap justify-center gap-4">
              <li>
                <Link to="/" className="text-black">Utama</Link>
              </li>
              <li>
                <Link to="/about" className="text-black">Tentang</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-black">Produk</Link>
              </li>
              <li>
                <Link to="/blog" className="text-black">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-black">Kontak</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
