"use client";

import { Heading } from "../base";

const faqs = [
  {
    question: "1. What services does Craft Studios offer ?",
    answer:
      "We provide content creation, digital marketing, UI/UX, design, web development and animation services to help businesses build strong digital identities and grow online",
  },
  {
    question: "2. What industries have we worked with ?",
    answer:
      "We have worked with businesses across various indutries, including youtube channels, startups, ed-tech platforms, real estate and other agencies",
  },
  {
    question: "4. How long does a project take to complete ?",
    answer:
      "Timelines vary depending on the project scope, A simple 30 second video reel may take 1-2 day(s), while a full brand identity or marketing strategy can take longer. We'll propvide an estimated timeline after discussing your requirements",
  },
  {
    question: "5. Do you offer custom solutions ?",
    answer:
      "Absolutely! Every project is tailored to meet your unique business needs and goals. We don't believe in one-size-fits-all solution",
  },
  {
    question: "6. How much do your service cost ?",
    answer:
      "Pricing depends on the complexity of the project. COntact us for a free consultation, and we'll provide a customized quote",
  },
  {
    question: "7. What makes Craft Studioo different from other agencies ?",
    answer:
      "At Craft Studioo, we don't just deliver services, we create experiences, Our approach blends creativity, strategy, and cutting-edge technology to craft tailor-made solutions that truly elevate brands. We focus on personalization, attention to detail, and results-driven execution to ensure your brand stands out in the digital space",
  },
];

const FAQs = () => {
  return (
    <section
      className="flex flex-col justify-center items-center mt-20 md:mt-28 lg:mt-32 xl:mt-36 gap-16 sm:gap-20 md:gap-24 lg:gap-28 xl:gap-32"
      id="faqs"
    >
      <Heading text="FAQs" />
      <div className="w-full sm:w-[90vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw]">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border-t-[0.5px] ${
              index === faqs.length - 1 ? "border-b-[0.5px]" : ""
            } border-white py-4`}
          >
            <button
              className="w-full text-left text-white py-4 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 focus:outline-none font-medium text-lg sm:text-xl md:text-2xl"
              onClick={() => {
                const content = document.getElementById(`faq-content-${index}`);
                if (content) {
                  content.classList.toggle("hidden");
                }
              }}
            >
              {faq.question}
            </button>
            <div
              id={`faq-content-${index}`}
              className="hidden px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-4 text-white text-base sm:text-lg md:text-xl"
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { FAQs };
