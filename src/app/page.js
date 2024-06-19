import HeroHome from "@/components/Hero/HeroHome";
import GridMassageHome from "@/components/Grid/GridMassageHome";
import MassageBenefits from "@/components/MassageBenefits";
import Button3 from "@/components/Button/Button3";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";
export default function Home() {
  return (
    <div>
     
      <HeroHome />
      {/* TEXT */}
      <div className="text-center">
        <p className="px-4 text-xl leading-relaxed text-black pt-14 lg:px-14">
          Sawadeeka and welcome to{" "}
          <span className="font-semibold">Ruan Thai</span>. Experience Thai
          Massage at it's best, performed by experienced Thai therapists. Treat
          yourself to a private massage or bond with your loved one in a dual
          massage room in this tranquil location in Cape Town.
        </p>
      </div>
      <GridMassageHome />
      <Testimonials/> 
      <MassageBenefits />
      <Button3 />
    </div>
  );
}
