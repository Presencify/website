import HeroButtons from "@/components/HeroButtons"
import Section from "@/components/Section"
import type { FC } from "react"
import presencifyUsage from "../../public/presencify-usage.png"
import { SectionsEnum } from "@/enums.d"
import { SectionsInfo } from "@/constants/sectionsInfo"

const Hero: FC = () => {
  return (
    <Section>
      <Section.Container id={SectionsEnum.HOME.toLowerCase()} offset={-400}>
        <Section.ContentContainer>
          <Section.Title title={SectionsInfo.HOME.TITLE} />
          <Section.Description description={SectionsInfo.HOME.DESCRIPTION} />
          <HeroButtons />
        </Section.ContentContainer>
        <Section.ImageContainer>
          <Section.Image image={presencifyUsage} />
        </Section.ImageContainer>
      </Section.Container>
    </Section>
  )
}

export default Hero
