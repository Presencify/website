import Section from "@/components/Section"
import Button from "@/components/Button"
import type { FC } from "react"
import presencifyUsage from "../../public/presencify-usage.png"

const Hero: FC = () => {
  return (
    <Section>
      <Section.Container>
        <Section.ContentContainer>
          <Section.Title title="Enhance your Discord presence" />
          <Section.Description description="Display real-time updates from your browser directly in your Discord status. No matters what site you are on, Presencify will show it in your status." />
          <div className="flex gap-5">
            <Button variant="green" type="button">
              Download
            </Button>
            <Button variant="transparent" type="button">
              Download
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
