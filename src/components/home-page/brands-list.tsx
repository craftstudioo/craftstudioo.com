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
    <section className="flex flex-col justify-center items-center mt-20 gap-16 mb-10 sm:mt-24 sm:gap-20 sm:mb-12 md:mt-28 md:gap-24 md:mb-16 lg:mt-32 lg:gap-28 lg:mb-20 xl:mt-36 xl:gap-32 xl:mb-24">
      <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-4xl font-bold flex gap-2">
        Brands we have worked with
        <span className="h-2 w-2 sm:h-3 sm:w-3 md:h-4 md:w-4 lg:h-5 lg:w-5 xl:h-6 xl:w-6 bg-orange-500 rounded-full inline-block"></span>
      </h1>
      <div className="flex flex-wrap gap-12 sm:gap-14 md:gap-16 lg:gap-18 xl:gap-20 justify-center">
        {brandLogos.map((logo, index) => (
          <img
            key={index}
            src={`/brands/${logo}`}
            alt={`Brand ${index + 1}`}
            className="h-6 sm:h-10 md:h-12 lg:h-12 xl:h-12"
          />
        ))}
      </div>
    </section>
  );
};

export { BrandsList };
