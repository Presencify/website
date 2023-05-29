import type { ContentWrapperProps } from "@/interfaces"
import type { FC } from "react"
import Image from "next/image"

const ContentWrapper: FC<ContentWrapperProps> = ({
  sectionClassName,
  containerClassName,
  titleClassName,
  title,
  description,
  children,
  image
}) => {
  return (
    <section className={`h-screen flex justify-center items-center ${sectionClassName}`}>
      <div
        className={`h-max w-full max-w-[1200px] flex items-center justify-center flex-wrap md:flex-nowrap gap-x-20 gap-y-10 ${containerClassName}`}
      >
        <div className="w-full lg:w-2/4 flex flex-col gap-5">
          <h1 className={`text-3xl lg:text-6xl font-bold ${titleClassName}`}>{title}</h1>
          <p className="text-gray-400 text-base lg:text-lg">{description}</p>
          {children}
        </div>
        <div className="w-2/4 rounded-md h-80 flex justify-center items-center">
          <Image src={image} alt="image" className="w-full object-cover" />
        </div>
      </div>
    </section>
  )
}

export default ContentWrapper
