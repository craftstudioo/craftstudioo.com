import React from "react";
import { Heading } from "../base";

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
      className="bg-[#282828] shadow-md rounded-lg flex flex-col items-center h-60"
      id="services"
    >
      <img
        src={imageSrc}
        alt={altText}
        className="w-full h-3/4 object-cover rounded-t-lg"
      />
      <div className="flex flex-col items-center justify-center h-1/4">
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
    </div>
  );
};

const Services = () => {
  const serviceData = [
    {
      imageSrc: "/services/service1.png",
      altText: "Service 1",
      title: "Service 1",
    },
    {
      imageSrc: "/services/service2.png",
      altText: "Service 2",
      title: "Service 2",
    },
    {
      imageSrc: "/services/service3.png",
      altText: "Service 3",
      title: "Service 3",
    },
    {
      imageSrc: "/services/service4.png",
      altText: "Service 4",
      title: "Service 4",
    },
    {
      imageSrc: "/services/service5.png",
      altText: "Service 5",
      title: "Service 5",
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center  mt-20 md:mt-28 lg:mt-32 xl:mt-36 gap-16 sm:gap-20 md:gap-24 lg:gap-28 xl:gap-32 mb-20">
      <Heading text="Services" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-4/5 mx-auto">
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
