"use client"
import Navbar from "./Navbar"
import { useState, type FC } from "react"
import { Bars4Icon } from "@heroicons/react/24/solid"
import Logo from "./Logo"

const Header: FC = () => {
  const [showResponsiveNavbar, setShowResponsiveNavbar] = useState(false)

  const handleShowResponsiveNavbar = () => {
    setShowResponsiveNavbar(!showResponsiveNavbar)
  }

  return (
    <header className="flex justify-center fixed inset-0 w-full h-max border-b-[.5px] border-b-gray-700 p-5 backdrop-filter backdrop-blur-sm backdrop-contrast-00 bg-[#1815268b] z-10">
      <section className="w-full max-w-[1200px] h-max flex justify-between items-center">
        <Logo />
        <button onClick={handleShowResponsiveNavbar}>
          <Bars4Icon className="w-6 h-6 sm:hidden" />
        </button>
        <div
          className={`${
            showResponsiveNavbar ? "top-[76px]" : "top-[-400px]"
          } sm:hidden w-full h-80 bg-[#211d32] absolute inset-0 duration-500 flex justify-center items-center border border-gray-700`}
        >
          <Navbar className="flex-col sm:flex-row gap-10" />
        </div>
        <div className="hidden sm:block">
          <Navbar />
        </div>
      </section>
    </header>
  )
}

export default Header
