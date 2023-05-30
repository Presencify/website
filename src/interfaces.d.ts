import { Url } from "next/dist/shared/lib/router/router"
import { StaticImageData } from "next/image"

export type Variants = {
  green: string
  transparent: string
}

export interface ButtonProps {
  variant: "green" | "transparent"
  type: "submit" | "button" | "link"
  href?: Url
  className?: string
  onClick?: () => void
  children: React.ReactNode
  disabled?: boolean
}

export interface NavbarProps {
  className?: string
}

export interface ContentWrapperProps {
  sectionClassName?: string
  containerClassName?: string
  titleClassName?: string
  title: string
  description: string
  children: React.ReactNode
  image?: StaticImport
  inverted?: boolean
}

export interface LogoProps {
  containerClassName?: string
  logoClassName?: string
  titleClassName?: string
}
