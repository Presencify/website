import Filter from "./Filter"
import type { FC } from "react"
import { FILTERS } from "@/constants/FILTERS"

const Filters: FC = () => {
  return (
    <div>
      <div className="border-r border-gray-700 py-6">
        <>
          <h3 className="-my-3 flow-root">
            <span className="font-medium text-white">Categories</span>
          </h3>
          <div className="pt-6">
            <div className="space-y-4">
              {FILTERS.map((filter, filterId) => (
                <Filter filter={filter} key={filterId} />
              ))}
            </div>
          </div>
        </>
      </div>
    </div>
  )
}

export default Filters
