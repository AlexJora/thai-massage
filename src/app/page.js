import HeroHome from "@/components/Hero/HeroHome";
import GridMassageHome from "@/components/Grid/GridMassageHome";
import MassageBenefits from "@/components/MassageBenefits";
import Button3 from "@/components/Button/Button3";
import Facilities from "@/components/Facilities";
//  import Testimonials from "@/components/Testimonials";


export const metadata = {
  title: "Ruan Thai",
  description:
    "Discover the authentic Thai massage experience at Ruan Thai Spa in Cape Town. Relax and rejuvenate with our experienced Thai therapists.",
  keywords: [
    "massage Cape Town",
    "massage",
    "full body massage cape town",
    "thai massage Cape Town",
    "Thai massage",
    "Ruan Thai Spa",
    "massage therapy Cape Town",
    "Thai spa experience",
    "Thai therapists Cape Town",
  ],
  openGraph: {
    url: "https://www.ruanthai.co.za",
    type: "website",
    title: "Ruan Thai",
    description:
      "Discover the authentic Thai massage experience at Ruan Thai Spa in Cape Town. Relax and rejuvenate with our experienced Thai therapists.",
    images: [
      {
        url: "https://www.ruanthai.co.za/images/home/thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Ruan Thai Spa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruan Thai Spa - Authentic Thai Massage in Cape Town",
    description:
      "Discover the authentic Thai massage experience at Ruan Thai Spa in Cape Town. Relax and rejuvenate with our experienced Thai therapists.",
    creator: "@yourtwitterhandle",
    site: "@yourtwitterhandle",
    images: [
      {
        url: "https://www.ruanthai.co.za/images/home/thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Ruan Thai Spa",
      },
    ],
  },
  alternates: {
    canonical: "https://www.ruanthai.co.za",
  },
};

export default function Home() {
  return (
    <>
     
      <div>
        <HeroHome />
        {/* TEXT */}
        <div className="text-center">
          <p className="px-4 text-xl leading-relaxed text-black pt-14 lg:px-14">
            Sawadeeka and welcome to{" "}
            <span className="font-semibold">Ruan Thai</span>. Experience Thai
            Massage at it's best, performed by experienced Thai therapists.
            Treat yourself to a private massage or bond with your loved one in a
            dual massage room in this tranquil location in Cape Town.
          </p>
        </div>
        <GridMassageHome />
        <Facilities />
        {/* <Testimonials/>  */}
        <MassageBenefits />
        <Button3 />
      </div>
    </>
  );
}
