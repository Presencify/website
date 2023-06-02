import Section from "@/components/Section"
import Button from "@/components/Button"
import { SectionsEnum } from "@/enums.d"
import { SectionsInfo } from "@/constants/sectionsInfo"
import type { FC } from "react"
import presencifyDiscordImage from "../../public/presencify-discord.png"

const Discord: FC = () => {
  return (
    <Section className="!h-max md:!h-[500px]">
      <Section.Container id={SectionsEnum.COMMUNITY.toLowerCase()} offset={-300}>
        <Section.ContentContainer>
          <Section.Title className="!text-2xl lg:!text-5xl" title={SectionsInfo.COMMUNITY.TITLE} />
          <Section.Description
            className="whitespace-pre-line"
            description={SectionsInfo.COMMUNITY.DESCRIPTION}
          />
          <div className="w-full flex">
            <Button variant="green" type="button">
              Join our Discord
            </Button>
          </div>
        </Section.ContentContainer>
        <Section.ImageContainer className="h-max">
          <Section.Image image={presencifyDiscordImage} />
        </Section.ImageContainer>
      </Section.Container>
    </Section>
  )
}

export default Discord
