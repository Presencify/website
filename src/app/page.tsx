import Header from "@/components/Header"
import PresencesList from "@/sections/PresencesList"
import Features from "@/sections/Features"
import Hero from "@/sections/Hero"
import type { FC } from "react"

const Home: FC = () => {
  return (
    <div className="w-full h-max flex flex-col bg-dark text-white relative p-5">
      <Header />
      <Hero />
      <PresencesList />
      <Features />
    </div>
  )
}

export default Home
