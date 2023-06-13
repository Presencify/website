import Filter from "./Filter"
import type { FC } from "react"
import { FILTERS } from "@/constants/FILTERS"

const Filters: FC = () => {
  return (
    <div>
      {FILTERS.map(section => (
        <div key={section.id} className="border-r border-gray-700 py-6">
          <>
            <h3 className="-my-3 flow-root">
              <span className="font-medium text-white">{section.name}</span>
            </h3>
            <div className="pt-6">
              <div className="space-y-4">
                {section.options.map((option, optionIdx) => (
                  <Filter
                    section={section}
                    option={option}
                    optionIdx={optionIdx}
                    key={option.value}
                  />
                ))}
              </div>
            </div>
          </>
        </div>
      ))}
    </div>
  )
}

export default Filters
