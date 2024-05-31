import HeroCouple from "@/components/Hero/HeroCouple";
import Image from "next/image";
import Button1 from "@/components/Button/Button1";
const CoupleMassage = () => {
  return (
    <div>
      <HeroCouple />
      <div className="py-16 lg:py-24">
        <p className="px-6 text-base leading-7 text-center text-black lg:px-14 lg:text-lg">
          Spoil your loved one with a unique bonding experience by indulging in
          our couple massage treatment. This service allows you to enjoy total
          relaxation while being in the presence of your partner, creating a
          serene and intimate atmosphere. During the massage, skilled therapists
          use synchronized techniques to ensure both of you experience the
          utmost comfort and tranquility.
        </p>
      </div>
      <div className="mx-auto">
        <div className="flex flex-col-reverse items-center lg:flex-row lg:items-stretch">
          <div className="flex flex-col justify-center bg-primary-100 lg:w-1/2 lg:px-4 ">
            <h2 className="px-6 pt-12 pb-6 text-3xl leading-9 text-center lg:pt-8 lg:text-left lg:leading-10">
              Benefits of Couple Massage for Individual Well-Being
            </h2>
            <p className="px-6 pb-12 text-base leading-7 text-center lg:text-left lg:text-lg">
              <span className="font-semibold">
                Stress Relief and Relaxation
              </span>{" "}
              :the therapeutic touch of a professional massage therapist relaxes
              muscles, releases tension, and promotes a sense of calm.<br></br>
              <span className="font-semibold">Health Improvements</span>{" "}
              :regular massages improve circulation, reduce muscle soreness, and
              enhance flexibility. .<br></br>
              <span className="font-semibold">
                Mental Clarity and Emotional Balance
              </span>{" "}
              :the release of endorphins during a massage enhances mood and
              emotional well-being, reducing symptoms of depression and
              anxiety..
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="w-full h-auto md:h-96 lg:h-auto">
              <Image
                src="/assets/couple2.jpg"
                alt="Thai Massage"
                width={600}
                height={600}
                objectFit="cover"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto">
        <div className="flex flex-col items-center lg:flex-row lg:items-stretch">
          <div className="w-full lg:w-1/2">
            <div className="w-full h-auto md:h-96 lg:h-auto">
              <Image
                src="/assets/couple22.jpg"
                alt="Thai Massage"
                width={600}
                height={600}
                objectFit="cover"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center bg-primary-100 lg:w-1/2 lg:px-4">
            <h2 className="px-6 pt-12 pb-6 text-3xl leading-9 text-center lg:pt-8 lg:text-left lg:leading-10">
              Benefits of Couple Massage for Relationship Dynamics
            </h2>
            <p className="px-6 pb-12 text-base leading-7 text-center lg:text-left lg:text-lg">
              <span className="font-semibold">Bonding and Intimacy</span> :a
              couple massage fosters closeness and intimacy, reigniting passion
              and strengthening the emotional bond between partners.
              <br></br>
              <span className="font-semibold">Improved Communication</span> :the
              calming environment encourages open and honest communication.
              <br></br>
              <span className="font-semibold">
                Creating Lasting Memories
              </span>{" "}
              :sharing a couple massage creates lasting memories.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto">
        <h2 className="px-6 pt-12 pb-4 text-3xl text-center lg:pt-20">
          Lorem ipsum dolor sit amet
        </h2>
        <p className="px-6 pb-12 text-base leading-7 text-center lg:pb-20 lg:text-lg">
          Lorem ipsum dolor sit amet. Est molestiae aliquam qui eius delectus id
          harum rerum est ullam sunt. Ut ipsam voluptatem aut temporibus sequi
          est fugit quasi hic labore soluta ad sequi rerum.
        </p>
      </div>

      <Button1 />
    </div>
  );
};

export default CoupleMassage;
