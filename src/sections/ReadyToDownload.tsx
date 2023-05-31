import Image from "next/image"
import Section from "@/components/Section"
import Button from "@/components/Button"
import type { FC } from "react"
import horizontalLinesImage from "../../public/horizontal-lines.png"

const ReadyToDownload: FC = () => {
  return (
    <Section className="!h-[500px] relative">
      <Section.Container className="justify-center">
        <Section.ContentContainer>
          <Section.Title
            className="!text-2xl lg:!text-5xl text-center"
            title="Are you ready to use Presencify?"
          />
          <div className="w-full flex justify-center">
            <Button variant="green" type="button">
              Download Now
            </Button>
          </div>
        </Section.ContentContainer>
      </Section.Container>
      <Image src={horizontalLinesImage} className="absolute pointer-events-none" alt="" />
    </Section>
  )
}

export default ReadyToDownload
