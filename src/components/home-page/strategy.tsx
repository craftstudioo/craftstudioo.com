interface StrategyCardProps {
  logo: string;
  title: string;
  points: string[];
  description: string;
}

const StrategyCard: React.FC<StrategyCardProps> = ({
  logo,
  title,
  points,
  description,
}) => {
  return (
    <div className="flex flex-col items-center justify-center w-96 gap-8 border border-[#D9D9D9] rounded-xl py-8 px-8">
      <div className="flex flex-row items-center justify-center gap-4">
        <img src={logo} alt={title} className="w-16 h-16" />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <hr className="w-full border-t border-[#D9D9D9] my-2" />
      <ul className="flex flex-col gap-1 list-disc list-inside">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      <p className="font-medium text-[#D9D9D9] text-lg">{description}</p>
    </div>
  );
};

const strategyData: StrategyCardProps[] = [
  {
    logo: "/strategies/content_creation.svg",
    title: "Content Creation & Strategy",
    points: [
      "Content Writing & Copywriting",
      "Brand Messaging & Strategy",
      "Short Form Video Content & Reels Production",
    ],
    description: "Our Edge: Content that connects, converts, and grows",
  },
  {
    logo: "/strategies/coding.svg",
    title: "Web Development Solutions",
    points: [
      "Custom Website Development",
      "E-commerce and CMS Solutions",
      "SEO & Performance Optimization",
    ],
    description: "Our Edge: Tech and creativity - combined",
  },
  {
    logo: "/strategies/uiux.svg",
    title: "UX/UI Design Excellence",
    points: [
      "User ZResearch & Wireframing",
      "High-Fidelity Prototyping",
      "Mobile-First and Responsive Design",
    ],
    description: "Our Edge: Design crafted with strategy - not just style",
  },
];

const Strategy = () => {
  return (
    <section className="flex flex-col justify-start mt-20 md:mt-28 lg:mt-32 xl:mt-36 gap-4 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-16 mb-20 p-20">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium">
        We&apos;re not just a studio, We&apos;re <br /> your &nbsp;
        <span className="text-orange-500">
          brand&apos;s creative growth <br />
          partner.
        </span>
      </h2>
      <p className="text-[#D9D9D9] text-base sm:text-xl md:text-2xl sm:w-[90vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw]">
        Craft Studioo is a creative-first digital studio obsessed with helping
        brands stand out through bold content and unforgettable digital
        experiences.
      </p>

      <p className="text-[#D9D9D9] text-base sm:text-xl md:text-2xl sm:w-[90vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw]">
        We specialize in scroll-stopping video reels, ad edits, long form videos
        and content strategies designed to drive attention, engagement, and
        growth across platforms.
      </p>

      <p className="text-[#D9D9D9] text-base sm:text-xl md:text-2xl sm:w-[90vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw]">
        {`We specialize in scroll-stopping video reels, ad edits, long form
        videos and content strategies designed to drive attention, engagement,
        and growth across platforms.`}
      </p>

      <p className="text-[#D9D9D9] text-base sm:text-xl md:text-2xl sm:w-[90vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw]">
        {`
        But we don’t stop there. From
        UI/UX design to custom web development, we craft digital ecosystems that
        perform just as good as they look. Every project we take on is
        approached with strategy, soul, and precision, tailored specifically to
        your brand’s goals and audience.
        `}
      </p>

      <p className="text-[#D9D9D9] text-base sm:text-xl md:text-2xl sm:w-[90vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw]">
        {`
        Whether you're just starting out or
        looking to scale, we’re not just executors—we’re partners in growth,
        bringing a unique mix of creativity, innovation, and performance to the
        table.
        `}
      </p>

      <div className="flex flex-col sm:flex-row flex-wrap gap-8 sm:gap-12 lg:gap-20 justify-center mt-32">
        {strategyData.map((strategy) => (
          <StrategyCard key={strategy.title} {...strategy} />
        ))}
      </div>
    </section>
  );
};

export default Strategy;
