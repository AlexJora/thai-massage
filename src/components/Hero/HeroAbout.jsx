"use client";
import Image from "next/image";
import Link from "next/link";
const HeroAbout = () => {
  return (
    <section className="relative bg-center bg-no-repeat bg-cover h-96 md:h-[500px]">
      <div className="absolute inset-0 z-0">
        <picture>
          {/* Mobile Image */}
          <source
            media="(max-width: 768px)"
            srcSet="/assets/hero/heroAbout-sm.webp"
          />

          {/* Desktop Image */}
          <source
            media="(min-width: 769px)"
            srcSet="/assets/hero/heroAbout-lg.webp"
          />

          {/* Fallback Image */}
          <Image
            src="/assets/hero/heroAbout-lg.webp"
            alt="spa decor"
            className="object-cover w-full h-full"
            fill
          />
        </picture>
        {/* Black Overlay */}
        <div className="absolute inset-0 w-full h-full bg-black opacity-40"></div>
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center h-full max-w-screen-xl mx-auto text-center pt-28">
        <div className="text-4xl md:text-5xl">
          <h1 className="text-white">ABOUT US</h1>
        </div>

        <div className="flex flex-wrap justify-center my-16">
          <Link
            href="/contact"
            className="block w-auto px-6 py-4 text-lg text-left text-white bg-white border-2 border-white bg-opacity-20 hover:bg-black hover:text-white focus:outline-none focus:ring"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
