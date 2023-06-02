"use client"
import { useEffect, type FC, useState } from "react"
import type { NavbarProps } from "@/interfaces.d"
import { SectionsEnum } from "@/enums.d"

const Navbar: FC<NavbarProps> = ({ className }) => {
  const [activeSection, setActiveSection] = useState("")

  const scrollToSection = (sectionId: SectionsEnum) => {
    const section = document.getElementById(sectionId.toLowerCase())
    if (section) section.scrollIntoView({ behavior: "smooth" })
  }

  const getSectionsElements = () => {
    const sections = Object.values(SectionsEnum)
    const sectionsElements = []
    for (const section of sections) {
      const sectionElement = document.getElementById(section.toLowerCase())
      if (sectionElement)
        sectionsElements.push({ name: section, element: sectionElement.getBoundingClientRect() })
    }
    return sectionsElements
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = getSectionsElements()
      const scrollPosition = window.scrollY
      const activeSection = sections.find(section => {
        const top = section.element.top + scrollPosition
        const bottom = top + section.element.height
        return scrollPosition >= top && scrollPosition < bottom
      })
      setActiveSection(activeSection ? activeSection.name.toLowerCase() : "")
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav>
      <ul className={`flex gap-16 ${className}`}>
        {Object.values(SectionsEnum).map((section, index) => (
          <li
            key={index}
            className={`cursor-pointer hover:text-green-1 ${
              window.scrollY === 0 && "first:text-green-1"
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
