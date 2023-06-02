import Logo from "@/components/Logo"
import type { FC } from "react"

const Footer: FC = () => {
  return (
    <footer className="w-full h-[100px] bg-dark flex justify-center absolute bottom-0 left-0">
      <div className="w-full max-w-[1200px] flex justify-between items-center border-t border-t-gray-700 px-5">
        <Logo titleClassName="!text-base" />
        <div className="flex gap-5 text-sm md:text-base">
          <p>Discord</p>
          <p>Github</p>
          <p>Donate</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
