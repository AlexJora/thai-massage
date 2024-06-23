import HeroBeauty from "@/components/Hero/HeroBeauty";
import GridBeauty from "@/components/Grid/GridBeauty";
import Button3 from "@/components/Button/Button3";
export const metadata = {
  title: "Beauty Treatments - Ruan Thai",
  description: "Discover our range of beauty treatments at Ruan Thai, designed to rejuvenate and refresh you.",
  openGraph: {
    title: "Beauty Treatments - Ruan Thai",
    description: "Discover our range of beauty treatments at Ruan Thai, designed to rejuvenate and refresh you.",
    url: "https://www.ruanthaispa.co.za/beauty-treatments",
  }
};


const Beauty = () => {
  return (
    <div className="bg-secondary-101">
      <HeroBeauty />
      <div className="py-16 lg:py-24">
        <h1 className="px-6 pb-6 text-3xl text-center">Beauty Services</h1>
        <p className="px-6 text-base leading-7 text-center text-black lg:px-14 lg:text-lg">
          Our <span className="font-semibold">Beauty Treatments</span> are
          crafted to revitalize your skin. Skilled professionals customize every
          session to cater to your individual requirements. Explore our
          offerings, including the <span className="font-semibold">Deep Cleansing Facial</span> and <span className="font-semibold">Body Scrub.</span> 
        </p>
      </div>
      <GridBeauty />
      <Button3 />
    </div>
  );
};

export default Beauty;
