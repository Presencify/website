import Header from "@/components/Header"
import PresencesList from "@/sections/PresencesList"
import Features from "@/sections/Features"
import Hero from "@/sections/Hero"
import type { FC } from "react"
import ReadyToDownload from "@/sections/ReadyToDownload"
import Footer from "@/sections/Footer"

const Home: FC = () => {
  return (
    <div className="w-full h-max flex flex-col bg-dark text-white relative p-5">
      <Header />
      <Hero />
      <PresencesList />
      <Features />
      <ReadyToDownload />
      <Footer />
    </div>
  )
}

export default Home
