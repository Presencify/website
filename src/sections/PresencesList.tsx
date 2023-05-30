import ContentWrapper from "@/components/ContentWrapper"
import Button from "@/components/Button"
import type { FC } from "react"
import presencesNetwork from "../../public/presences-network.png"

const PresencesList: FC = () => {
  return (
    <ContentWrapper
      sectionClassName="!h-max"
      titleClassName="!text-2xl lg:!text-5xl"
      title="Choose your desired presence"
      description="Browse through our list of presence and choose the one you need. Every presence is created by our community and is free to use."
      image={presencesNetwork}
    >
      <Button variant="green" type="button">
        Visit list
      </Button>
    </ContentWrapper>
  )
}

export default PresencesList
