import Button from "@/components/Button"
import type { FC } from "react"

const Hero: FC = () => {
  return (
    <section className="h-screen flex justify-center items-center">
      <div className="w-full max-w-[1200px] flex items-center gap-20">
        <div className="flex-1 flex flex-col gap-5">
          <h1 className="text-6xl font-bold">Lorem ipsum dolor sit amet</h1>
          <p className="text-gray-400 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam,
            quia, quos voluptates voluptate quod
          </p>
          <div className="flex gap-5">
            <Button variant="green" type="button">
              Download
            </Button>
            <Button variant="transparent" type="button">
              Download
            </Button>
          </div>
        </div>
        <div className="flex-1 border border-green-1 rounded-md h-80 flex justify-center items-center">
          <p>Presencify photo</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
