"use client"
import DownloadButton from "@/components/DownloadButton"
import Button from "@/components/Button"
import { scrollToSection } from "@/utils/scrollToSection"
import { SectionsEnum } from "@/enums.d"
import type { FC } from "react"

const HeroButtons: FC = () => {
  return (
    <div className="flex gap-5">
      <DownloadButton />
      <Button
        variant="transparent"
        type="button"
        onClick={() => scrollToSection(SectionsEnum.FEATURES)}
      >
        See Features
      </Button>
    </div>
  )
}

export default HeroButtons
