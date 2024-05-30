import HeroHome from "@/components/Hero/HeroHome";
import GridMassageHome from "@/components/Grid/GridMassageHome";
import MassageBenefits from "@/components/MassageBenefits";
import Button1 from "@/components/Button/Button1";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      {/* HERO */}
      <HeroHome />
      {/* TEXT */}
      <div className="text-center">
        <p className="px-4 text-xl leading-relaxed text-black pt-14 lg:px-14">
          Sawadeeka and welcome to{" "}
          <span className="font-semibold">Ruan Thai</span>. Experience Thai
          Massage at it’s best, performed by experienced Thai therapists. Treat
          yourself to a private massage or bond with your loved one in a dual
          massage room in this tranquil location in Cape Town.
        </p>
      </div>
      {/* GRID */}
      <GridMassageHome />
      <div className="w-full pt-4 mt-10 h-96 bg-secondary-200">
        <h1 className="mt-8 mb-12 text-4xl text-center">Testimonials</h1>
      </div>
      {/* BENEFITS */}
      <MassageBenefits />
      <Button1 />
    </div>
  );
}
