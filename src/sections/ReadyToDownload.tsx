import Button from "@/components/Button"
import ContentWrapper from "@/components/ContentWrapper"
import type { FC } from "react"

const ReadyToDownload: FC = () => {
  return (
    <ContentWrapper
      sectionClassName="!h-[500px]"
      containerClassName="justify-center"
      titleClassName="!text-2xl lg:!text-5xl text-center"
      title="Are you ready to use Presencify?"
      description=""
    >
      <div className="w-full flex justify-center">
        <Button variant="green" type="button">
          Download Now
        </Button>
      </div>
    </ContentWrapper>
  )
}

export default ReadyToDownload
