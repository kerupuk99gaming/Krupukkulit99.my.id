import { Link } from "gatsby"
import React from "react"

import logo from "../images/cap-kerupuk.png"

const Footer = () => {
  return (
    <div className="m-4">
      <div className="max-w-7xl mx-auto mt-10 h-auto lg:mb-8 sm:mb-4 xs:mb-4 xxs:mb-4">
        <div className="footer bg-gradient-to-r from-yellow to-black p-10 mt-10 rounded-xl">
          <div className="grid grid-cols-2 xxs:grid-cols-1 lg:grid-cols-2">
            <div>
              <img className="max-h-28 max-w-xs" src={logo} alt="Logo kerupuk kulit 99"
              width={206}
              height={196}>
              </img>
              <p className="text-black opacity-70 text-sm mt-5 ">
                Kerupuk kulit sapi asli, gurih, renyah, dan sehat.<br />
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

            <div className="text-black place-self-end self-center xxs:hidden lg:block">
              <ul className="text-black text-xl font-montserrat font-medium">
                <li>
                  <Link to="/" className="text-black">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="text-black">About</Link>
                </li>
                <li>
                  <Link to="/gallery" className="text-black">Gallery</Link>
                </li>
                <li>
                  <Link to="/blog" className="text-black">Blog</Link>
                </li>
                <li>
                  <Link to="/contact" className="text-black">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
