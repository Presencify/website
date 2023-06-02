"use client"
import Section from "@/components/Section"
import Button from "@/components/Button"
import type { FC } from "react"
import presencifyUsage from "../../public/presencify-usage.png"
import { SectionsEnum } from "@/enums.d"
import { SectionsInfo } from "@/constants/sectionsInfo"
import { scrollToSection } from "@/utils/scrollToSection"
import DownloadButton from "@/components/DownloadButton"

const Hero: FC = () => {
  return (
    <Section>
      <Section.Container id={SectionsEnum.HOME.toLowerCase()} offset={-400}>
        <Section.ContentContainer>
          <Section.Title title={SectionsInfo.HOME.TITLE} />
          <Section.Description description={SectionsInfo.HOME.DESCRIPTION} />
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
        </Section.ContentContainer>
        <Section.ImageContainer>
          <Section.Image image={presencifyUsage} />
        </Section.ImageContainer>
      </Section.Container>
    </Section>
  )
}

export default Hero
