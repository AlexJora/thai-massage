import HeroAbout from "@/components/Hero/HeroAbout";
import Image from "next/image";
import Button2 from "@/components/Button/Button2";

const About = () => {
  return (
    <div>
      <HeroAbout />
      <div className="py-14">
        <p className="px-6 pb-3 text-base leading-7 text-center text-black lg:px-14 lg:text-lg">
        <span className="font-semibold">Our vision</span> is to create delight for our customers, making their satisfaction our greatest pleasure.
        </p>
        <p className="px-6 pb-3 text-base leading-7 text-center text-black lg:px-14 lg:text-lg"><span className="font-semibold">Our mission</span> is to provide the most authentic Thai spa experience, deeply rooted in Thai culture, always striving to exceed our customers expectations.</p>
        <p className="px-6 text-base leading-7 text-center text-black lg:px-14 lg:text-lg">We are committed to upholding <span className="font-semibold">values</span> of dignity, respect, dedication, and gratitude in every aspect of our service.</p>
      </div>
      {/* FACILITIES */}
      {/* <div className="flex flex-col items-center p-4">
      <h2 className="px-6 pb-6 text-3xl text-center ">Our Facilities</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-20">
        <div className="flex items-center justify-center">
          <Image src="/assets/sample.jpg" alt="Facility 1" width={400}
        height={400} />
        </div>
        <div className="flex items-center justify-center">
          <Image src="/assets/sample.jpg" alt="Facility 2" width={400}
        height={400} />
        </div>
        <div className="flex items-center justify-center">
          <Image src="/assets/sample.jpg" alt="Facility 3" width={400}
        height={400} />
        </div>
      </div>
    </div> */}
    {/* ETIQUETTE */}
    <div className="pb-16">
    <h2 className="px-6 pb-6 text-3xl text-center ">Our Spa Etiquette</h2>
    <ul className="px-10 space-y-8 list-disc list-inside lg:px-28">
      <li>Please feel free to discuss your treatment with your therapist: let her know if you have any special requirements or disabilities so that your visit is comfortable.</li>
      <li>Know that you are in a professional spa environment and do not expect anything other than a great massage.</li>
      <li>Communicate your preferences during treatment so that your therapist can adjust.</li>
      <li>Be considerate to others.</li>
      <li>Our therapist will treat you with the professionalism and respect you deserve in return we ask you to do the same.</li>
      <li>Our therapist will respect your privacy please respect theirs. We do not offer any sexual services. Please do not embarrass yourself by asking.</li>

    </ul>
    </div>
    <Button2/>
    </div>
  );
};

export default About;
