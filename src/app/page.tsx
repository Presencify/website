import PresencesList from "@/sections/PresencesList"
import Header from "@/components/Header"
import Hero from "@/sections/Hero"
import type { FC } from "react"

const Home: FC = () => {
  return (
    <div className="w-full h-max flex flex-col bg-dark text-white relative p-5">
      <Header />
      <Hero />
      <PresencesList />
    </div>
  )
}

export default Home
