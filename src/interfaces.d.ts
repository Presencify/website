import { Url } from "next/dist/shared/lib/router/router"

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
