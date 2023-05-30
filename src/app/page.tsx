import Header from "@/components/Header"
import ReadyToDownload from "@/sections/ReadyToDownload"
import PresencesList from "@/sections/PresencesList"
import Features from "@/sections/Features"
import Discord from "@/sections/Discord"
import Footer from "@/sections/Footer"
import Hero from "@/sections/Hero"
import type { FC } from "react"

const Home: FC = () => {
  return (
    <div className="w-full h-max flex flex-col bg-dark text-white relative p-5">
      <Header />
      <Hero />
      <PresencesList />
      <Features />
      <Discord />
      <ReadyToDownload />
      <Footer />
    </div>
  )
}

export default Home
