import { SectionsEnum } from "@/enums.d"
import type { NavbarProps } from "@/interfaces.d"
import type { FC } from "react"

const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <nav>
      <ul className={`flex gap-16 ${className}`}>
        {Object.values(SectionsEnum).map((section, index) => (
          <li key={index} className="hover:text-green-1">
            <a href={`#${section}`} className="text-base lg:text-lg">
              {section}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
