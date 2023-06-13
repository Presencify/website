import Sort from "./Sort"
import { FunnelIcon, Squares2X2Icon } from "@heroicons/react/20/solid"
import { type FC } from "react"
import type { PresencesHeaderProps } from "@/interfaces"

const Header: FC<PresencesHeaderProps> = ({ onClick }) => {
  return (
    <header className="flex items-baseline justify-between border-b border-gray-700 pb-6 pt-24">
      <h1 className="text-4xl font-bold tracking-tight text-white">Presences list</h1>
      <div className="flex items-center">
        <Sort />
        <button type="button" className="-m-2 ml-5 p-2 text-white hover:text-green-1 sm:ml-7">
          <span className="sr-only">View grid</span>
          <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="-m-2 ml-4 p-2 text-white hover:text-green-1 sm:ml-6 lg:hidden"
          onClick={onClick}
        >
          <span className="sr-only">Filters</span>
          <FunnelIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </header>
  )
}

export default Header
