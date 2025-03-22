"use client";
import Marquee from "react-fast-marquee";
import { Heading } from "../base";

const BrandsList = () => {
  // Assuming the brand logos are named as brand1.png, brand2.png, etc.
  const brandLogos = [
    "vaultor.png",
    "indiashastra.png",
    "geekster.png",
    "propgrow.png",
    "fasttutor.png",
    // Add more brand logos as needed
  ];

  return (
    <section
      className="flex flex-col justify-center items-center  gap-16 mb-10 mt-20 md:mt-28 lg:mt-32 xl:mt-36 sm:gap-20 sm:mb-12  md:gap-24 md:mb-16 lg:gap-28 lg:mb-20  xl:gap-32 xl:mb-24"
      id="brand-list"
    >
      <Heading text="Brands we have worked with" />
      <Marquee
        gradient={true}
        gradientColor="#0a0a0a"
        gradientWidth={
          typeof window !== "undefined" && window.innerWidth < 640 ? 0 : 250
        }
        speed={100}
      >
        {brandLogos.map((logo, index) => (
          <img
            key={index}
            src={`/brands/${logo}`}
            alt={`Brand ${index + 1}`}
            className="h-6 sm:h-10 md:h-12 lg:h-12 xl:h-12  mr-12 sm:mr-14 md:mr-16 lg:mr-18 xl:mr-20"
          />
        ))}
      </Marquee>
    </section>
  );
};

export { BrandsList };
