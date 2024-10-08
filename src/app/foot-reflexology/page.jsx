import HeroFoot from "@/components/Hero/HeroFoot";
import Button1 from "@/components/Button/Button1";
import Image from "next/image";


export const metadata = {
  title: "Foot Reflexology  - Ruan Thai",
  description: "Discover Foot Reflexology at Ruan Thai.",
  openGraph: {
    title: "Foot Reflexology  - Ruan Thai",
  description: "Discover Foot Reflexology at Ruan Thai.",
    url: "https://www.ruanthai.co.za/foot-reflexology",
  },
};
const FootReflexology = () => {
  return (
    <div>
      
      <HeroFoot />
      <div className="py-16 lg:py-24">
        <h1 className="px-6 pb-6 text-3xl text-center">What is reflexology?</h1>
        <p className="px-6 text-base leading-7 text-center text-black lg:px-14 lg:text-lg">
          <span className="font-semibold">Reflexology</span> is an age-old
          practise that involves stimulating 'reflex points' in the hands or
          feet using thumb and hand techniques. Each reflex point is linked to a
          part of the human body, such as the eye or back, so therefore,
          stimulation of these reflex pressure points can help reduce pain or
          ailment throughout the body.
        </p>
      </div>
      <div className="mx-auto">
        <div className="flex flex-col-reverse items-center lg:flex-row lg:items-stretch">
          <div className="flex flex-col justify-center bg-primary-100 lg:w-1/2">
            <h2 className="px-6 pt-12 pb-6 text-3xl leading-9 text-center lg:text-left">
              Benefits of Reflexology
            </h2>
            <p className="px-6 pb-12 text-base leading-7 text-center lg:text-left lg:text-lg">
              <span className="font-semibold">Relaxation</span>: from the moment
              our therapists start their magic you'll be able to unwind and
              forget about your stresses.<br></br>
              <span className="font-semibold">Circulation</span>: research has
              shown that reflexology treatments improve circulation to the
              brain, kidneys and liver.<br></br>
              <span className="font-semibold">Mental health</span>: reflexology
              can be powerful in reducing depression and anxiety.
            </p>
          </div>

          <div className="relative w-full lg:w-1/2 h-80 md:h-[400px] lg:h-[500px]">
            <Image
              src="/assets/massage-pages/foot1.webp"
              alt="foot reflexology"
              fill
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto md:py-10 lg:py-14">
        <div className="flex flex-col items-center lg:flex-row lg:items-stretch">
          <div className="relative w-full lg:w-1/2 h-80 md:h-[400px] lg:h-[500px">
            <Image
              src="/assets/massage-pages/points.webp"
              alt="reflexology foot points"
              fill
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="flex flex-col justify-center lg:w-1/2 lg:px-10 ">
            <h2 className="px-6 pb-6 text-3xl leading-9 text-center lg:text-left">
              Reflexology and Medical Attention
            </h2>
            <p className="px-6 pb-12 text-base leading-7 text-center lg:text-left lg:text-lg">
              Although reflexology can be invaluable in contributing to pain
              reduction, the reflexologist is limited to complementing medicine,
              not replacing it.
            </p>
          </div>
        </div>
      </div>

      <Button1 />
    </div>
  );
};

export default FootReflexology;
