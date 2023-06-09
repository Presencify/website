import Image from "next/image"
import Section from "@/components/Section"
import { SectionsEnum } from "@/enums.d"
import { SectionsInfo } from "@/constants/sectionsInfo"
import type { FC } from "react"
import horizontalLinesImage from "../../public/horizontal-lines.png"
import DownloadButton from "@/components/DownloadButton"

const Download: FC = () => {
  return (
    <Section className="!h-96 md:!h-screen relative">
      <Section.Container
        className="justify-center"
        id={SectionsEnum.DOWNLOAD.toLowerCase()}
        offset={-500}
      >
        <Section.ContentContainer>
          <Section.Title
            className="!text-2xl lg:!text-5xl text-center"
            title={SectionsInfo.DOWNLOAD.TITLE}
          />
          <div className="w-full flex justify-center">
            <DownloadButton />
          </div>
        </Section.ContentContainer>
      </Section.Container>
      <Image src={horizontalLinesImage} className="absolute pointer-events-none" alt="" />
    </Section>
  )
}

export default Download
