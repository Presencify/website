import LogoIcon from "../../public/logo-black.svg"
import type { LogoProps } from "@/interfaces"
import type { FC } from "react"

const Logo: FC<LogoProps> = ({ containerClassName, logoClassName, titleClassName }) => {
  return (
    <div className={`flex items-center gap-3 ${containerClassName}`}>
      <LogoIcon className={`w-9 h-9 ${logoClassName}`} />
      <h1 className={`text-lg lg:text-xl font-bold tracking-wide ${titleClassName}`}>Presencify</h1>
    </div>
  )
}

export default Logo
