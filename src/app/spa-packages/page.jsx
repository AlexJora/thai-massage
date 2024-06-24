import GridSpa from "@/components/Grid/GridSpa";
import HeroSpa from "@/components/Hero/HeroSpa";
import Button3 from "@/components/Button/Button3";

export const metadata = {
  title: "Spa Packages - Ruan Thai",
  description: "Discover our range of Spa Packages at Ruan Thai, designed to rejuvenate and refresh you.",
  openGraph: {
    title: "Spa Packages - Ruan Thai",
    description: "Discover our range of Spa Packages at Ruan Thai, designed to rejuvenate and refresh you.",
    url: "https://www.ruanthai.co.za/spa-packages",
  }
};
const SpaPackages = () => {
  return (
    <div>
      <HeroSpa />
      <GridSpa />
      <Button3 />
    </div>
  );
};

export default SpaPackages;
