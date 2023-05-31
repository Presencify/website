import Section from "@/components/Section"
import Button from "@/components/Button"
import type { FC } from "react"

const ReadyToDownload: FC = () => {
  return (
    <Section className="!h-[500px]">
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
    </Section>
  )
}

export default ReadyToDownload
