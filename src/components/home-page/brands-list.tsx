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
    <section className="flex flex-col justify-center items-center mt-40 gap-32 mb-20">
      <h1 className="text-4xl font-bold flex gap-2">
        Brands we have worked with
        <span className="h-3 w-3 bg-orange-500 rounded-full inline-block"></span>
      </h1>
      <div className="flex gap-4 sm:gap-8 md:gap-16 lg:gap-24 xl:gap-36">
        {brandLogos.map((logo, index) => (
          <img
            key={index}
            src={`/brands/${logo}`}
            alt={`Brand ${index + 1}`}
            className="h-4 sm:h-6 md:h-8 lg:h-8 xl:h-8"
          />
        ))}
      </div>
    </section>
  );
};

export { BrandsList };
