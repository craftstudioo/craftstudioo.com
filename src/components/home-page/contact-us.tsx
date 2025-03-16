const ContactUs = () => {
  return (
    <section
      className="flex flex-col justify-center items-center mt-20 py-20 sm:py-30 md:py-40 lg:py-54 xl:py-60 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-80 gap-10"
      style={{
        backgroundImage: "url(/fractal_effect.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-center">
        {"Let's turn ideas into impact, Partner with us and make it happen! "}
      </h2>

      <div className="relative mt-4 w-full sm:w-[80vw] md:w-[60vw] lg:w-[50vw] xl:w-[40vw] flex flex-col">
        <input
          type="text"
          placeholder="Enter your email address"
          className="w-full py-2 sm:py-2 md:py-3 lg:py-4 xl:py-4 pl-4 pr-12 bg-transparent border border-zinc-600 rounded-full backdrop-blur-md focus:outline-none"
        />
        <button className="absolute top-0 right-0 h-full px-4 text-white bg-[#E67919] rounded-full">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export { ContactUs };
