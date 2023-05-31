"use client"
import Link from "next/link"
import { useEffect, type FC, useState } from "react"
import { useSearchParams } from "next/navigation"
import type { NavbarProps } from "@/interfaces.d"
import { SectionsEnum } from "@/enums.d"

const Navbar: FC<NavbarProps> = ({ className }) => {
  const [activeSection, setActiveSection] = useState("/")
  const searchParams = useSearchParams()

  useEffect(() => {
    const pathname = window.location.hash.substring(1)
    setActiveSection(pathname)
  }, [searchParams])

  return (
    <nav>
      <ul className={`flex gap-16 ${className}`}>
        {Object.values(SectionsEnum).map((section, index) => (
          <li
            key={index}
            className={`hover:text-green-1 ${activeSection === section ? "text-green-1" : ""}`}
          >
            <Link href={`#${section}`} className="text-base lg:text-lg">
              {section}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
