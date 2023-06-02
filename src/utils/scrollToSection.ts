import { SectionsEnum } from "@/enums.d"

export const scrollToSection = (sectionId: SectionsEnum) => {
  const section = document.getElementById(sectionId.toLowerCase())
  if (!section) return
  if (sectionId.toLowerCase() === SectionsEnum.DOWNLOAD.toLowerCase())
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth"
    })
  else section.scrollIntoView({ behavior: "smooth" })
}
