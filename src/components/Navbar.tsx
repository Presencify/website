"use client"
import { type FC } from "react"
import type { NavbarProps } from "@/interfaces.d"
import { SectionsEnum } from "@/enums.d"
import useNavbar from "@/hooks/useNavbar"

const Navbar: FC<NavbarProps> = ({ className }) => {
  const { activeSection, scrollToSection, isClient } = useNavbar()

  return (
    <nav>
      <ul className={`flex gap-10 lg:gap-12 ${className}`}>
        {Object.values(SectionsEnum).map((section, index) => (
          <li
            key={index}
            className={`cursor-pointer hover:text-green-1 ${
              isClient && window.scrollY === 0 && "first:text-green-1"
            } ${activeSection === section.toLowerCase() ? "text-green-1" : ""}`}
            onClick={() => scrollToSection(section)}
          >
            {section}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
