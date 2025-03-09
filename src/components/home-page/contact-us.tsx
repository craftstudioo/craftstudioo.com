const ContactUs = () => {
  return (
    <section
      className="flex flex-col justify-center items-center mt-20 py-60 px-80 gap-10"
      style={{
        backgroundImage: "url(/fractal_effect.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-4xl font-medium text-center">
        {"Let's turn ides into impact, Partner with us and make it happen! "}
      </h2>

      <div className="relative mt-4 w-[40vw] flex flex-col">
        <input
          type="text"
          placeholder="Enter your email address"
          className="w-full py-4 pl-4 pr-12 bg-transparent border border-zinc-600 rounded-full backdrop-blur-md focus:outline-none"
        />
        <button className="absolute top-0 right-0 h-full px-4 text-white bg-[#E67919] rounded-full">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export { ContactUs };
