import type { FilterProps } from "@/interfaces"
import type { FC } from "react"

const Filter: FC<FilterProps> = ({ section, option, optionIdx }) => {
  return (
    <div key={option.value} className="flex items-center">
      <input
        id={`filter-${section.id}-${optionIdx}`}
        name={`${section.id}[]`}
        defaultValue={option.value}
        type="checkbox"
        defaultChecked={option.checked}
        className="h-4 w-4 rounded border-gray-300 text-green-1 focus:ring-transparent"
      />
      <label htmlFor={`filter-${section.id}-${optionIdx}`} className="ml-3 text-sm text-gray-200">
        {option.label}
      </label>
    </div>
  )
}

export default Filter
