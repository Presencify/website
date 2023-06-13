import { Url } from "next/dist/shared/lib/router/router"
import { StaticImageData } from "next/image"
import { SectionsEnum } from "./enums"

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

export interface LogoProps {
  containerClassName?: string
  logoClassName?: string
  titleClassName?: string
}

export interface SectionProps {
  className?: string
  children: React.ReactNode
}

export interface ContainerProps {
  className?: string
  children: React.ReactNode
  inverted: boolean
  id: SectionsEnum
  offset: number
}

export interface ContentContainerProps {
  className?: string
  children: React.ReactNode
}

export interface TitleProps {
  className?: string
  title: string
  inverted: boolean
}

export interface DescriptionProps {
  className?: string
  description: string
}

export interface ImageContainerProps {
  className?: string
  inverted: boolean
  children: React.ReactNode
}

export interface ImageProps {
  image: string
}

export type ExtendedSection = {
  Container: FC<ContainerProps>
} & {
  ContentContainer: FC<ContentContainerProps>
} & {
  Title: FC<TitleProps>
} & {
  Description: FC<DescriptionProps>
} & {
  ImageContainer: FC<ImageContainerProps>
} & {
  Image: FC<ImageProps>
}

export interface refProps {
  current: HTMLDivElement | null
}

export interface SectionRefs {
  [key: string]: RefObject<HTMLDivElement>
}

export interface FilterOptionProps {
  value: string
  label: string
  checked: boolean
}

export interface FiltersProps {
  id: string
  name: string
  options: FilterOptionProps[]
}

export interface FilterProps {
  section: FiltersProps
  option: FilterOptionProps
  optionIdx: number
}

export interface SortOptionsProps {
  name: string
  href: string
  current: boolean
}

export interface SortOptionProps {
  option: {
    name: string
    href: string
    current: boolean
  }
}

export interface MobileFilterSidebarProps {
  open: boolean
  onClose: () => void
}

export interface PresencesHeaderProps {
  onClick: () => void
}
