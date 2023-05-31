import Section from "@/components/Section"
import Button from "@/components/Button"
import type { FC } from "react"
import presencifyDiscordImage from "../../public/presencify-discord.png"

const Discord: FC = () => {
  return (
    <Section className="!h-[500px]">
      <Section.Container>
        <Section.ContentContainer>
          <Section.Title className="!text-2xl lg:!text-5xl text-center" title="Community Discord" />
          <Section.Description description="Do you need help with something? Do you have a suggestion for us? Join our Discord server and let us know!" />
          <div className="w-full flex justify-center">
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
