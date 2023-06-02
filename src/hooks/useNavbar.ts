import { SectionsEnum } from "@/enums.d"
import { useEffect, useState } from "react"
import { scrollToSection } from "@/utils/scrollToSection"

const useNavbar = () => {
  const [activeSection, setActiveSection] = useState("")
  const [isClient, setIsClient] = useState(false)
  useEffect(() => setIsClient(true), [])
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

  return { activeSection, scrollToSection, isClient }
}

export default useNavbar
