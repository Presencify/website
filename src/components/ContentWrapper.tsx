import type { ContentWrapperProps } from "@/interfaces"
import type { FC } from "react"

const ContentWrapper: FC<ContentWrapperProps> = ({ title, description, children, image }) => {
  return (
    <section className="h-full flex justify-center items-center mt-[77px] backdrop-filter">
      <div className="w-full max-w-[1200px] flex flex-wrap items-center gap-20 p-5">
        <div className="w-full lg:flex-1 flex flex-col gap-5">
          <h1 className="text-3xl lg:text-6xl font-bold">{title}</h1>
          <p className="text-gray-400 text-base lg:text-lg">{description}</p>
          {children}
        </div>
        <div className="w-full lg:flex-1 border border-green-1 rounded-md h-80 flex justify-center items-center">
          <p>Presencify photo</p>
        </div>
      </div>
    </section>
  )
}

export default ContentWrapper
