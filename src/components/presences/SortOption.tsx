import type { SortOptionProps } from "@/interfaces"
import { Menu } from "@headlessui/react"
import type { FC } from "react"

const classNames = (...classes: string[]) => classes.filter(Boolean).join(" ")

const SortOption: FC<SortOptionProps> = ({ option }) => {
  return (
    <Menu.Item key={option.name}>
      {({ active }) => (
        <a
          href={option.href}
          className={classNames(
            option.current ? "font-medium text-white !border-green-1" : "text-gray-100",
            active ? "!border-green-1" : "",
            "block px-4 py-2 text-sm border border-transparent"
          )}
        >
          {option.name}
        </a>
      )}
    </Menu.Item>
  )
}

export default SortOption
