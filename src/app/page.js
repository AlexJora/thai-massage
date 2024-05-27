import HeroHome from "@/components/Hero/HeroHome";
import GridMassageHome from "@/components/Grid/GridMassageHome";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      {/* HERO */}
      <HeroHome />
      {/* TEXT */}
      <div className="text-center">
        <p className="px-4 py-16 text-2xl leading-relaxed text-black lg:px-14">
          Sawadeeka and welcome to Ruan Thai. Experience Thai massage at it’s
          best, performed by experienced Thai therapists. Treat yourself to a
          private massage or bond with your loved one in a dual massage room in
          this tranquil location in Cape Town. Immerse yourself in the art of
          Thai massage, a time-honored practice that rejuvenates both body and
          soul.
        </p>
      </div>
    </div>
  );
}
