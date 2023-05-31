import Section from "@/components/Section"
import type { FC } from "react"
import presencifyFeaturesImage from "../../public/presencify-features.png"
import EasyInterfaceIcon from "../../public/easy-interface-icon.svg"
import SwitchButtonIcon from "../../public/switch-button-icon.svg"
import InternetIcon from "../../public/internet-icon.svg"
import BoltIcon from "../../public/bolt-icon.svg"

const features = {
  easyInterface: {
    image: <EasyInterfaceIcon className="w-10 h-10" />,
    title: "Easy Interface",
    description: "Our interface is easy to use and intuitive. You can easily manage your presences."
  },
  switchButton: {
    image: <SwitchButtonIcon className="w-10 h-10" />,
    title: "Switch presences",
    description: "Switch between presences with a single click."
  },
  internet: {
    image: <InternetIcon className="w-10 h-10" />,
    title: "A world of presences",
    description:
      "Presencify is compatible with a lot of websites. You can find your website in our precenses list."
  },
  bolt: {
    image: <BoltIcon className="w-10 h-10" />,
    title: "Fast connection",
    description:
      "Presencify is fast and reliable. You will not have any problems with your presences."
  }
}

const Features: FC = () => {
  return (
    <Section>
      <Section.Container inverted={true}>
        <Section.ContentContainer>
          <Section.Title
            className="!text-2xl lg:!text-5xl"
            title="The single place to manage all your presences"
            inverted={true}
          />
          <ul className="flex flex-wrap justify-center lg:grid lg:grid-cols-2 gap-20 mt-5">
            {Object.entries(features).map(([key, value]) => (
              <li key={key} className="flex gap-1 items-center flex-col justify-self-end">
                {value.image}
                <h3 className="text-base lg:text-lg">{value.title}</h3>
                <p className="text-gray-400 text-sm lg:text-base text-center">
                  {value.description}
                </p>
              </li>
            ))}
          </ul>
        </Section.ContentContainer>
        <Section.ImageContainer inverted={true} className="h-full">
          <Section.Image image={presencifyFeaturesImage} />
        </Section.ImageContainer>
      </Section.Container>
    </Section>
  )
}

export default Features
