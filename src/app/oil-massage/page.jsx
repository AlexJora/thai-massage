import Button2 from "@/components/Button/Button2";
import HeroOil from "@/components/Hero/HeroOil";
import Image from "next/image";
const OilMassage = () => {
  return (
    <div className="bg-secondary-101">
      <HeroOil />
      <div className="py-16 lg:py-24">
        <p className="px-6 text-base leading-7 text-center text-black lg:px-14 lg:text-lg">
          <span className="font-semibold">Thai Hot Oil Massage</span> is a
          therapeutic treatment that combines traditional Thai massage
          techniques with the application of warm oils. This type of massage
          aims to relax the body, alleviate muscle tension, and promote overall
          well-being.
        </p>
      </div>
      <div className="mx-auto">
        <div className="flex flex-col items-center lg:flex-row lg:items-stretch">
          <div className="w-full lg:w-1/2">
            <div className="w-full h-auto md:h-96 lg:h-auto">
              <Image
                src="/assets/hot.jpg"
                alt="Thai Massage"
                width={600}
                height={600}
                objectFit="cover"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center lg:w-1/2 lg:px-10 bg-primary-100">
            <h2 className="px-6 pt-12 pb-6 text-3xl text-center lg:text-left">
              Benefits of Thai Hot Oil Massage
            </h2>
            <p className="px-6 pb-12 text-base leading-7 text-center lg:text-left lg:text-lg">
              <span className="font-semibold">Deep relaxation</span>: thai hot
              oil massage is designed to relax your body through its gentle
              pressure and stretches<br></br>
              <span className="font-semibold">Improved sleep</span>: thai
              massage has been specifically proven to reduce fatigue and improve
              sleep quality.<br></br>
              <span className="font-semibold">Softer skin</span>: the use of
              aromatherapy oils during a Thai hot oil massage naturally leaves
              your skin feeling softer<br></br>
              <span className="font-semibold">Increased flexibility</span>:
              after massage people benefit from less joint pain and better
              flexibility.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto">
        <h2 className="px-6 pt-12 pb-6 text-3xl text-center">Preparation</h2>
        <p className="px-6 pb-12 text-base leading-7 text-center lg:text-lg">
          Before the massage, the therapist may discuss any specific areas of
          concern or preferences regarding pressure and technique. It’s
          important to communicate any allergies or skin sensitivities,
          especially regarding the oils used.
        </p>
      </div>
      <div className="mx-auto">
        <h2 className="px-6 pb-6 text-3xl text-center">Oils used</h2>
        <p className="px-6 pb-12 text-base leading-7 text-center lg:pb-20 lg:text-lg">
          A variety of oils can be used, including coconut oil, jojoba oil, or
          essential oils like lavender, eucalyptus, or lemongrass. Each oil has
          its own unique benefits and properties.
        </p>
      </div>
      <Button2 />
    </div>
  );
};

export default OilMassage;
