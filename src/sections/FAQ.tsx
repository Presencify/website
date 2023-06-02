import Section from "@/components/Section"
import { SectionsEnum } from "@/enums.d"
import type { FC } from "react"

const QUESTION_ANSWERS = [
  {
    question: "Can I use Presencify with my browser?",
    answer: "Yes, you can use Presencify with any browser you want. We support all major browsers."
  },
  {
    question: "Which sites are supported?",
    answer:
      "We support a ton of sites including Youtube, Twitch, Twitter, Reddit, and many more. If you find a site that is not supported, please open an issue on our Github repository or create a new ticket on our Discord server."
  },
  {
    question: "How can I start using Presencify?",
    answer:
      "You can first download Presencify from our website and then execute it. After that, you can start using it by looking for your website in the precenses list and clicking on it."
  },
  {
    question: "I can't get Presencify to work. What should I do?",
    answer:
      "If you can't get Presencify to work, please check the documentation first. If you still can't get it to work, please open an issue on our Github repository or create a new ticket on our Discord server."
  },
  {
    question: "How much does Presencify cost?",
    answer:
      "Presencify is completely free to use. You can download it from our website and use it without any cost."
  },
  {
    question: " How can I support Presencify?",
    answer:
      "You can support Presencify by donating to us. You can find the donation link in the footer of our website. We will be very thankful for your support!"
  }
]

const FAQ: FC = () => {
  return (
    <Section>
      <Section.Container id={SectionsEnum.FAQ.toLowerCase()} offset={-320}>
        <Section.ContentContainer className="!flex-auto">
          <Section.Title
            className="!text-2xl lg:!text-5xl"
            title="Frequent questions and answers"
          />

          <div className="items-center w-full mx-auto max-w-7xl text-white">
            <div className="w-full mx-auto text-left">
              <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
                <div className="mx-auto lg:max-w-7xl lg:p-0">
                  <ul
                    role="list"
                    className="grid grid-cols-2 gap-4 list-none lg:grid-cols-3 lg:gap-12"
                  >
                    {QUESTION_ANSWERS.map(({ question, answer }) => (
                      <li key={question}>
                        <div>
                          <p className="mt-5 text-lg font-medium leading-6 text-green-1">
                            {question}
                          </p>
                        </div>
                        <div className="mt-2 text-base text-gray-400">{answer}</div>
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
