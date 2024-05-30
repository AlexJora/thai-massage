import HeroThaiNoOil from "@/components/Hero/HeroThaiNoOil";
import Image from "next/image";
import Button2 from "@/components/Button/Button2";
const ThaiWithoutOil = () => {
  return (
    <div>
      <HeroThaiNoOil />
      <div className="py-16 lg:py-24">
        <p className="px-6 text-base leading-7 text-center text-black lg:px-14 lg:text-lg">
          The traditional Thai style of massage is renowned for its healing
          properties and health benefits. This type of massage is performed with
          the patient fully clothed on a low massage bed, which allows the
          therapist to perform deep stretches and yoga-like exercises. Thai
          massage follows the Sen lines of the body, which are believed to be
          the vessels that carry the ‘iom’ or ‘air’ throughout the body. The
          therapist applies pressure to points along these lines to establish
          equilibrium throughout the body.
        </p>
      </div>
      <div className="mx-auto">
        <div className="flex flex-col items-center lg:flex-row lg:items-stretch">
          <div className="w-full lg:w-1/2">
            <div className="w-full h-auto md:h-96 lg:h-auto">
              <Image
                src="/assets/thai2.jpg"
                alt="Thai Massage"
                width={600}
                height={600}
                objectFit="cover"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center lg:w-1/2 bg-primary-100 lg:px-10 ">
            <h2 className="px-6 pt-12 pb-4 text-3xl text-center lg:text-left">
              Massage Techniques
            </h2>
            <p className="px-6 pb-12 text-base leading-7 text-center lg:text-left lg:text-lg">
              During a traditional Thai massage treatment at Ruan Thai, you will
              be manipulated into various stretches. Your therapist will use
              their elbows, hands, fingers, and feet while following a standard
              procedure and rhythm. Body weight is applied to increase pressure;
              for greater pressure, the therapist may stand on pressure points
              on your back or legs.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto">
        <h2 className="px-6 pt-12 pb-4 text-3xl text-center lg:pt-20">
          Thai or Oil Massage?
        </h2>
        <p className="px-6 pb-12 text-base leading-7 text-center lg:pb-20 lg:text-lg">
          The stretches and techniques applied in Thai massage are generally
          more intense than those in an oil massage treatment. If you’re new to
          Thai massage or prefer a more relaxing experience, consider asking for
          an oil massage instead.
        </p>
      </div>
      <Button2 />
    </div>
  );
};

export default ThaiWithoutOil;
