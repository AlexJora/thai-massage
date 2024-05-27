import Image from "next/image";

const Button1 = () => {
  return (
    <section className="relative h-64 bg-center bg-no-repeat bg-cover">
      <div className="absolute inset-0 z-0">
        <picture>
          {/* Mobile Image */}
          <source media="(max-width: 768px)" srcSet="/assets/spa-sm.jpg" />

          {/* Desktop Image */}
          <source media="(min-width: 769px)" srcSet="/assets/spa-lg.jpg" />

          {/* Fallback Image */}
          <Image
            src="/assets/spa-lg.jpg"
            alt="Hero Image"
            className="object-cover w-full h-full"
            layout="fill"
          />
        </picture>
        {/* Black Overlay */}
        <div className="absolute inset-0 w-full h-full bg-black opacity-40"></div>
      </div>
      <div className="relative z-20 flex flex-col items-center justify-center h-full max-w-screen-xl px-4 py-16 mx-auto text-center">
        {/* <div className="py-6 text-2xl text-white">Find Out More</div> */}
        <div className="flex flex-wrap justify-center my-16">
          <button
            href="/contact"
            className="block w-auto px-6 py-4 text-lg text-left text-white bg-white bg-opacity-50 border-2 border-white hover:bg-black hover:text-white focus:outline-none focus:ring"
          >
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  );
};
export default Button1;
