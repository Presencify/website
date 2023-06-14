import type { FilterOptionProps } from "@/interfaces"
import type { FC } from "react"

const Filter: FC<{ filter: FilterOptionProps }> = ({ filter }) => {
  return (
    <div className="flex items-center">
      <input
        id={filter.value}
        name={filter.value}
        defaultValue={filter.value}
        type="checkbox"
        defaultChecked={filter.checked}
        className="h-4 w-4 rounded border-gray-300 text-green-1 focus:ring-transparent"
      />
      <label htmlFor={filter.value} className="ml-3 text-sm text-gray-200">
        {filter.label}
      </label>
    </div>
  )
}

export default Filter
