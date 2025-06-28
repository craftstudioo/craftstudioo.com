/* eslint-disable react/jsx-no-undef */
import React from "react";
import { Heading } from "../base";
import Image from "next/image";

// Start of Selection
interface ServiceCardProps {
  imageSrc: string;
  altText: string;
  title: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  imageSrc,
  altText,
  title,
}) => {
  return (
    <div
      className="bg-[#111] shadow-md rounded-lg flex flex-col items-center h-70 p-4"
      id="services"
    >
      <img
        src={imageSrc}
        alt={altText}
        className="w-full h-3/4 object-cover rounded-t-lg"
      />
      <div className="flex flex-row items-center justify-center h-1/4 p-2">
        <h2 className="text-2xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
          {title}
        </h2>
        <span className="ml-2">
          <Image
            src="/red_arrow.svg"
            alt="Arrow Icon"
            width={20}
            height={24}
            className="w-5 h-6"
            style={{ transform: "rotate(41deg)" }}
          />
        </span>
      </div>
    </div>
  );
};

const Services = () => {
  const serviceData = [
    {
      imageSrc: "/services/content_creation.png",
      altText: "Service 1",
      title: "Content Creation",
    },
    {
      imageSrc: "/services/web_development.png",
      altText: "Service 2",
      title: "Web Development",
    },
    {
      imageSrc: "/services/uiux.png",
      altText: "Service 3",
      title: "UI / UX",
    },
    {
      imageSrc: "/services/digitalmarketing.png",
      altText: "Service 4",
      title: "Digital Marketing",
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center  mt-20 md:mt-28 lg:mt-32 xl:mt-36 gap-16 sm:gap-20 md:gap-24 lg:gap-28 xl:gap-32 mb-20">
      <Heading text="Services" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-4/5 mx-auto">
        {serviceData.map((service, index) => (
          <ServiceCard
            key={index}
            imageSrc={service.imageSrc}
            altText={service.altText}
            title={service.title}
          />
        ))}
      </div>
      <a href="/portfolio" className="underline flex items-center gap-1">
        View Portfolio
      </a>
    </section>
  );
};

export { Services };
