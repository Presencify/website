import ContentWrapper from "@/components/ContentWrapper"
import Button from "@/components/Button"
import type { FC } from "react"

const Hero: FC = () => {
  return (
    <ContentWrapper
      title="Lorem ipsum dolor sit amet"
      description="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quos voluptates voluptate quod"
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
