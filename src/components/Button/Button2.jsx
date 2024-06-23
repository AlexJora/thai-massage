import Image from "next/image";

const Button2 = () => {
  return (
    <section className="relative bg-center bg-no-repeat bg-cover h-80">
      <div className="absolute inset-0 z-0">
        <picture>
          {/* Mobile Image */}
          <source
            media="(max-width: 768px)"
            srcSet="/assets/button/button2-sm.webp"
          />

          {/* Desktop Image */}
          <source
            media="(min-width: 769px)"
            srcSet="/assets/button/button2-lg.webp"
          />

          {/* Fallback Image */}
          <Image
            src="/assets/button/button2-lg.webp"
            alt="spa decoration"
            fill
            className="w-full h-full object-cover"
            
          />
        </picture>
        {/* Black Overlay */}
        <div className="absolute inset-0 w-full h-full bg-black opacity-40"></div>
      </div>
      <div className="relative z-20 flex flex-col items-center justify-center h-full max-w-screen-xl px-4 py-16 mx-auto text-center">
        <div className="flex flex-wrap justify-center my-16">
          <button
            href="/contact"
            className="block w-auto px-6 py-4 text-lg text-left text-white bg-white border-2 border-white bg-opacity-20 hover:bg-black hover:text-white focus:outline-none focus:ring"
          >
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  );
};
export default Button2;
