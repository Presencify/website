import Logo from "../../public/logo-black.svg"
import type { FC } from "react"
import Navbar from "./Navbar"

const Header: FC = () => {
  return (
    <header className="flex justify-center fixed inset-0 w-full h-max border-b-[.5px] border-b-gray-700 py-5">
      <section className="w-full max-w-[1200px] h-max flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Logo className="w-9 h-9" />
          <h1 className="text-lg lg:text-xl font-bold tracking-wide">Presencify</h1>
        </div>
        <Navbar />
      </section>
    </header>
  )
}

export default Header
