import HeroMixOil from "@/components/Hero/HeroMixOil";
import Button1 from "@/components/Button/Button1";
import Image from "next/image";

export const metadata = {
  title: "Thai Oil Mix Massage  - Ruan Thai",
  description: "Discover Thai Oil Mix Massage at Ruan Thai.",
  openGraph: {
    title: "Thai Oil Mix Massage  - Ruan Thai",
  description: "Discover Thai Oil Mix Massage at Ruan Thai.",
    url: "https://www.ruanthai.co.za/thai-oil-mix-massage",
  },
};
const ThaiOilMixMassage = () => {
  return (
    <div>
      <HeroMixOil />
      <div className="py-16 lg:py-24">
        <p className="px-6 text-base leading-7 text-center text-black lg:px-14 lg:text-lg">
          A relaxing and therapeutic massage that combines Traditional Thai
          Massage techniques with the soothing application of oil, promoting
          relaxation and reducing stress.{" "}
          <span className="font-semibold">Thai Oil Mix Massage</span> is perfect
          if you're unaccustomed to the rigour of an oil free Thai massage, or
          if you're interested in pure relaxation.
        </p>
      </div>
      <div className="mx-auto">
        <div className="flex flex-col items-center lg:flex-row lg:items-stretch">
          <div className="relative w-full lg:w-1/2 h-80 md:h-[400px] lg:h-[500px]">
            <Image
              src="/assets/massage-pages/mixOil2.webp"
              alt="Thai Massage"
              fill
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="flex flex-col justify-center bg-secondary-101 lg:w-1/2 lg:px-10 ">
            <h2 className="px-6 pt-12 pb-6 text-3xl text-center lg:text-left">
              Massage Techniques
            </h2>
            <p className="px-6 pb-12 text-base leading-7 text-center lg:text-left lg:text-lg">
              During a traditional Thai oil massage treatment at Ruan Thai, you
              will experience a combination of deep tissue massage and gentle
              stretches. Your therapist will use their elbows, hands, fingers,
              and palms to apply oil and follow a rhythmic procedure. The oil
              allows for smoother strokes and can enhance the pressure applied
              during the massage.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto">
        <h2 className="px-6 pt-12 pb-6 text-3xl text-center lg:pt-20">
          Benefits Of Thai Oil Massage
        </h2>
        <p className="px-6 pb-12 text-base leading-7 text-center lg:pb-20 lg:text-lg">
          Thai oil massage provides the benefits of traditional Thai massage
          with added relaxation from the use of oils. It helps to soothe the
          muscles, reduce stress, and improve skin hydration. This treatment is
          ideal for those looking for a more gentle and relaxing experience
          compared to traditional Thai massage.
        </p>
      </div>
      <Button1 />
    </div>
  );
};

export default ThaiOilMixMassage;
