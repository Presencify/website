import Header from "@/components/Header"
import ReadyToDownload from "@/sections/ReadyToDownload"
import PresencesList from "@/sections/PresencesList"
import Features from "@/sections/Features"
import Discord from "@/sections/Discord"
import Footer from "@/sections/Footer"
import Hero from "@/sections/Hero"
import FAQ from "@/sections/FAQ"
import type { FC } from "react"
import CirclesImage from "../../public/circles-image.svg"

const Home: FC = () => {
  return (
    <div className="w-full h-max flex flex-col gap-32 md:gap-0 bg-dark text-white relative pt-20 md:pt-0 px-5">
      <Header />
      <Hero />
      <div className="flex flex-col gap-32 md:gap-0 h-max relative overflow-hidden">
        <CirclesImage className="w-[120%] ml-[00px] absolute inset-0 top-[100px]" />
        <PresencesList />
        <Features />
        <Discord />
      </div>
      <FAQ />
      <ReadyToDownload />
      <Footer />
    </div>
  )
}

export default Home
