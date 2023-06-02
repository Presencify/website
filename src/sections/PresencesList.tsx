import Section from "@/components/Section"
import Button from "@/components/Button"
import type { FC } from "react"
import { SectionsEnum } from "@/enums.d"
import presencesNetwork from "../../public/presences-network.png"

const PresencesList: FC = () => {
  return (
    <Section className="!h-max">
      <Section.Container id={SectionsEnum.PRECENCES.toLowerCase()} offset={-300}>
        <Section.ContentContainer>
          <Section.Title className="!text-2xl lg:!text-5xl" title="Choose your desired presence" />
          <Section.Description description="Browse through our list of presence and choose the one you need. Every presence is created by our community and is free to use." />
          <Button variant="green" type="button">
            Visit list
          </Button>
        </Section.ContentContainer>
        <Section.ImageContainer>
          <Section.Image image={presencesNetwork} />
        </Section.ImageContainer>
      </Section.Container>
    </Section>
  )
}

export default PresencesList
