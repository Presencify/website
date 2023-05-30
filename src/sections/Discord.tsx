import Button from "@/components/Button"
import ContentWrapper from "@/components/ContentWrapper"
import type { FC } from "react"
import presencifyDiscordImage from "../../public/presencify-discord.png"

const Discord: FC = () => {
  return (
    <ContentWrapper
      sectionClassName="!h-[500px]"
      titleClassName="!text-2xl lg:!text-5xl text-center"
      title="Community Discord"
      description="Do you need help with something? Do you have a suggestion for us? Join our Discord server and let us know!"
      image={presencifyDiscordImage}
    >
      <div className="w-full flex justify-center">
        <Button variant="green" type="button">
          Join our Discord
        </Button>
      </div>
    </ContentWrapper>
  )
}

export default Discord
