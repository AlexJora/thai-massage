import Image from "next/image";
import Link from "next/link";
const HeroThaiNoOil = () => {
  return (
    <section className="relative bg-center bg-no-repeat bg-cover h-96 md:h-[500px]">
      <div className="absolute inset-0 z-0">
        <picture>
          {/* Mobile Image */}
          <source
            media="(max-width: 768px)"
            srcSet="/assets/hero/heroThaiNoOil-sm.webp"
          />

          {/* Desktop Image */}
          <source
            media="(min-width: 769px)"
            srcSet="/assets/hero/heroThaiNoOil-lg.webp"
          />

          {/* Fallback Image */}
          <Image
            src="/assets/hero/heroThaiNoOil-lg.webp"
            alt="Hero Image"
            className="object-cover w-full h-full"
            fill
          />
        </picture>
      </div>
      <div className="relative z-20 flex flex-col items-center justify-center h-full max-w-screen-xl px-4 mx-auto lg:items-start">
        <div className="text-center">
          <h1 className="text-4xl leading-relaxed text-white md:text-5xl">
            TRADITIONAL THAI MASSAGE
          </h1>
          <div className="pt-8 md:pt-14">
            <Link
              href="/contact"
              className="inline-block px-6 py-4 text-lg text-white bg-white border-2 border-white bg-opacity-20 hover:bg-black hover:text-white focus:outline-none focus:ring"
            >
              SESSION REQUEST
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroThaiNoOil;
