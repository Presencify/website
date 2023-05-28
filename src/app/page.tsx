import Header from "@/components/Header"
import Hero from "@/sections/Hero"
import type { FC } from "react"

const Home: FC = () => {
  return (
    <div className="w-full h-screen flex flex-col bg-dark text-white relative">
      <Header />
      <Hero />
    </div>
  )
}

export default Home
