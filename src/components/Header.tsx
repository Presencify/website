import Logo from "../../public/logo.svg"
import { SectionsEnum } from "@/enums.d"
import type { FC } from "react"

const Header: FC = () => {
  return (
    <header className="flex justify-center fixed inset-0 w-full h-max border-b-[.5px] border-b-gray-700 py-5">
      <div className="w-[1200px] h-max flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Logo className="w-9 h-9" />
          <h1 className="text-xl font-bold tracking-wide">Presencify</h1>
        </div>
        <nav>
          <ul className="flex gap-16">
            {Object.values(SectionsEnum).map((section, index) => (
              <li key={index} className="hover:text-green-1">
                <a href={`#${section}`} className="text-lg">
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
