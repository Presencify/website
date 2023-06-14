"use client"
import { useState, type FC } from "react"
import MobileFilterSidebar from "@/components/presences/MobileFilterSidebar"
import Filters from "@/components/presences/Filters"
import Header from "@/components/presences/Header"
import NavbarHeader from "@/components/Header"
import PRESENCES_MOCK from "@/utils/PRESENCES_MOCK.json"
import Image from "next/image"

const Presences: FC = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (
    <div className="w-full h-max flex flex-col gap-32 md:gap-0 bg-dark text-white relative pt-20 md:pt-0 px-5">
      <NavbarHeader />
      <main className="mt-20">
        <MobileFilterSidebar open={mobileFiltersOpen} onClose={() => setMobileFiltersOpen(false)} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Header onClick={() => setMobileFiltersOpen(true)} />
          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              <form className="hidden lg:block">
                <Filters />
              </form>
              <div className="lg:col-span-3">
                <ul className="w-full h-max flex flex-wrap justify-center gap-10">
                  {PRESENCES_MOCK.map(item => (
                    <li
                      key={item.client_id}
                      className="min-w-[200px] flex-1 h-max min-h-[250px] border border-gray-700 p-5 rounded-md hover:border-green-1 cursor-pointer duration-150"
                    >
                      <article className="flex flex-col gap-5">
                        <header className="flex gap-4">
                          <div className="w-1/3 flex items-center rounded-full">
                            <div className="w-14 lg:w-16 h-14 lg:h-16 relative rounded-full">
                              <Image
                                className="object-cover rounded-full"
                                src={item?.image}
                                fill={true}
                                alt={`Thumbnail of ${item?.name}`}
                              />
                            </div>
                          </div>
                          <div className="w-2/3 flex flex-col">
                            <h3 className="text-lg lg:text-xl leading-none text-green-1">
                              {item?.name}
                            </h3>
                            <span className="text-gray-400">{item?.author}</span>
                          </div>
                        </header>
                        <footer>
                          <p className="text-sm lg:text-base">{item?.description}</p>
                        </footer>
                      </article>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Presences
