import type {
  ContainerProps,
  ContentContainerProps,
  DescriptionProps,
  ExtendedSection,
  ImageContainerProps,
  ImageProps,
  SectionProps,
  TitleProps
} from "@/interfaces"
import type { FC } from "react"
import Image from "next/image"

const Section: FC<SectionProps> & ExtendedSection = ({ className, children }) => (
  <section className={`h-max md:h-screen flex justify-center items-center relative ${className}`}>
    {children}
  </section>
)

const Container: FC<ContainerProps> = ({ className, inverted, children, id, offset }) => {
  return (
    <div
      className={`h-max w-full max-w-[1200px] flex items-center flex-wrap-reverse md:flex-nowrap gap-x-20 gap-y-10 relative ${className} ${
        inverted ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div
        className={`w-full absolute inset-0 h-full ${className} section-container pointer-events-none`}
        id={id}
        style={{
          top: `${offset}px`,
          height: `calc(100% - ${offset}px)`
        }}
      ></div>
      {children}
    </div>
  )
}

const ContentContainer: FC<ContentContainerProps> = ({ children, className }) => (
  <div className={`w-full lg:w-2/4 flex flex-col gap-10 ${className}`}>{children}</div>
)

const Title: FC<TitleProps> = ({ className, title, inverted }) => (
  <h1
    className={`text-3xl lg:text-6xl font-bold ${className} ${
      inverted ? "text-right" : "text-left"
    }`}
  >
    {title}
  </h1>
)

const Description: FC<DescriptionProps> = ({ className, description }) => (
  <p className={`text-gray-400 text-base lg:text-lg ${className}`}>{description}</p>
)

const ImageContainer: FC<ImageContainerProps> = ({ className, inverted, children }) => {
  return (
    <div
      className={`w-full lg:w-[400px] rounded-md h-80 flex justify-center items-center lg:absolute top-0 ${
        inverted ? "left-0" : "right-0"
      } ${className} `}
    >
      {children}
    </div>
  )
}

const Image_: FC<ImageProps> = ({ image }) => {
  return (
    <div className="w-[400px]">
      <Image src={image} alt="image" className="w-full object-cover" />
    </div>
  )
}

Section.Container = Container
Section.ContentContainer = ContentContainer
Section.Title = Title
Section.Description = Description
Section.ImageContainer = ImageContainer
Section.Image = Image_

export default Section
