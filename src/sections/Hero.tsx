import ContentWrapper from "@/components/ContentWrapper"
import Button from "@/components/Button"
import type { FC } from "react"
import presencifyUsage from "../../public/presencify-usage.png"

const Hero: FC = () => {
  return (
    <ContentWrapper
      title="Enhance your Discord presence"
      description="Display real-time updates from your browser directly in your Discord status. No matters what site you are on, Presencify will show it in your status."
      image={presencifyUsage}
    >
      <div className="flex gap-5">
        <Button variant="green" type="button">
          Download
        </Button>
        <Button variant="transparent" type="button">
          Download
        </Button>
      </div>
    </ContentWrapper>
  )
}

export default Hero
