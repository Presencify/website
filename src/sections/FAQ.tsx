import Section from "@/components/Section"
import { QUESTION_ANSWERS } from "@/constants/questionsAswers"
import { SectionsInfo } from "@/constants/sectionsInfo"
import { SectionsEnum } from "@/enums.d"
import type { FC } from "react"

const FAQ: FC = () => {
  return (
    <Section>
      <Section.Container id={SectionsEnum.FAQ.toLowerCase()} offset={-320}>
        <Section.ContentContainer className="!flex-auto">
          <Section.Title className="!text-2xl lg:!text-5xl" title={SectionsInfo.FAQ.TITLE} />

          <div className="items-center w-full mx-auto max-w-7xl text-white">
            <div className="w-full mx-auto text-left">
              <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
                <div className="mx-auto lg:max-w-7xl lg:p-0">
                  <ul
                    role="list"
                    className="grid grid-cols-2 gap-4 list-none lg:grid-cols-3 lg:gap-12"
                  >
                    {QUESTION_ANSWERS.map(({ QUESTION, ANSWER }) => (
                      <li key={QUESTION}>
                        <div>
                          <p className="mt-5 text-lg font-medium leading-6 text-green-1">
                            {QUESTION}
                          </p>
                        </div>
                        <div className="mt-2 text-base text-gray-400">{ANSWER}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Section.ContentContainer>
      </Section.Container>
    </Section>
  )
}

export default FAQ
