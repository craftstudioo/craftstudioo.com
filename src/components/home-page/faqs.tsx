"use client";

const faqs = [
  {
    question: "1. What services does Craft Studios offer ?",
    answer:
      "We provide content creation, digital marketing, UI/UX, design, web development and animation services to help businesses build strong digital identities and grow online",
  },
  {
    question: "2. What industries have we worked with ?",
    answer:
      "We have provided services to various clients from industries, like Ed Tech, SaaS, Personal Brands on Youtube and etc..",
  },
  {
    question: "3. What makes us different from other agencies ?",
    answer:
      "We, at Craft Studios call ourselves craftsmen. And we are excellent at our craft. Our quality reflects our brand as an  agency, and we believe in quality of work, rather than quantity.",
  },
  {
    question: "4. How do I get started with Craft Studioo ?",
    answer:
      "Drop your email in our website, and we will contact you ( usually within 10 minutes )",
  },
];

const FAQs = () => {
  return (
    <section className="flex flex-col justify-center items-center mt-40 gap-20">
      <h1 className="text-4xl font-medium flex gap-2">
        FAQs
        <span className="h-3 w-3 bg-orange-500 rounded-full inline-block"></span>
      </h1>
      <div>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border-t-[0.5px] ${
              index === faqs.length - 1 ? "border-b-[0.5px]" : ""
            } border-white bg-black w-[90vw] py-4`}
          >
            <button
              className="w-full text-left text-white py-4 px-6 pl-12 focus:outline-none font-medium text-xl"
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
              className="hidden px-6 py-4  pl-12  text-white text-lg w-[80%]"
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
