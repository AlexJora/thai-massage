import GridMassageOverview from "@/components/Grid/GridMassageOverview";
import HeroOverview from "@/components/Hero/HeroOverview";
import Button3 from "@/components/Button/Button3";

export const metadata = {
  title: "Massage Overview - Ruan Thai",
  description: "Explore the variety of massages offered at Ruan Thai. Discover the benefits and techniques of Thai massage and more.",
  openGraph: {
    title: "Massage Overview - Ruan Thai",
    description: "Explore the variety of massages offered at Ruan Thai. Discover the benefits and techniques of Thai massage and more.",
    url: "https://www.ruanthaispa.co.za/massage-overview",
  },
};
const MassageOverview = () => {
  return (
    <div className="">
      <HeroOverview />
      <div className="py-16 lg:py-24">
        <h1 className="px-6 pb-6 text-3xl text-center">Massage Services</h1>
        <p className="px-6 text-base leading-7 text-center text-black lg:px-14 lg:text-lg">
          Our masseuses are experienced in multiple styles and techniques, and
          can adapt your chosen style to your preference or needs. Before your
          session begins, our skilled professionals guide you in selecting a
          style tailored to your needs. We offer:{" "}
          <span className="font-semibold">
            Head, Back, Neck, Shoulder Massage, Traditional Thai Massage, Thai
            Oil Mix Massage, Thai Hot Oil Massage, Foot Reflexology, Deep Tissue
            Massage, Thai Herbal Heat Compression Massage, Hot Stone Massage
          </span>
          .
        </p>
      </div>
      <GridMassageOverview />
      <Button3/>
      
    </div>
    
  );
};

export default MassageOverview;
