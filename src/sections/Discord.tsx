import Section from "@/components/Section"
import Button from "@/components/Button"
import { SectionsEnum } from "@/enums.d"
import type { FC } from "react"
import presencifyDiscordImage from "../../public/presencify-discord.png"

const Discord: FC = () => {
  return (
    <Section className="!h-[500px]">
      <Section.Container id={SectionsEnum.COMMUNITY.toLowerCase()} offset={-300}>
        <Section.ContentContainer>
          <Section.Title className="!text-2xl lg:!text-5xl" title="Community Discord" />
          <Section.Description
            className="whitespace-pre-line"
            description={`Do you need help with something? Do you have a suggestion for us? \n Join our Discord server and let us know!`}
          />
          <div className="w-full flex">
            <Button variant="green" type="button">
              Join our Discord
            </Button>
          </div>
        </Section.ContentContainer>
        <Section.ImageContainer>
          <Section.Image image={presencifyDiscordImage} />
        </Section.ImageContainer>
      </Section.Container>
    </Section>
  )
}

export default Discord
