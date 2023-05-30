import ContentWrapper from "@/components/ContentWrapper"
import type { FC } from "react"
import presencifyFeaturesImage from "../../public/presencify-features.png"
import EasyInterfaceIcon from "../../public/easy-interface-icon.svg"
import SwitchButtonIcon from "../../public/switch-button-icon.svg"
import InternetIcon from "../../public/internet-icon.svg"
import BoltIcon from "../../public/bolt-icon.svg"
import Image from "next/image"

const features = {
  easyInterface: {
    title: "Easy Interface",
    image: <EasyInterfaceIcon className="w-10 h-10" />
  },
  switchButton: {
    title: "Switch presences",
    image: <SwitchButtonIcon className="w-10 h-10" />
  },
  internet: {
    title: "Multiple sites",
    image: <InternetIcon className="w-10 h-10" />
  },
  bolt: {
    title: "Fast connection",
    image: <BoltIcon className="w-10 h-10" />
  }
}

const Features: FC = () => {
  return (
    <ContentWrapper
      title="The single place to manage all your presences"
      titleClassName="!text-2xl lg:!text-5xl"
      description=""
      image={presencifyFeaturesImage}
    >
      <ul className="flex flex-wrap lg:grid lg:grid-cols-2 gap-28 mt-5">
        {Object.entries(features).map(([key, value]) => (
          <li key={key} className="flex gap-1 items-center flex-col">
            {value.image}
            <p className="text-gray-400 text-base lg:text-lg">{value.title}</p>
          </li>
        ))}
      </ul>
    </ContentWrapper>
  )
}

export default Features
