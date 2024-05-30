import GridMassageOverview from "@/components/Grid/GridMassageOverview";
import GridMassage from "@/components/Grid/GridMassageOverview";
import HeroOverview from "@/components/Hero/HeroOverview";
const MassageOverview = () => {
  return (
    <div className="pb-10">
      <HeroOverview />
      <div className="py-16 lg:py-24">
        <h1 className="px-6 pb-6 text-3xl text-center">
          Massage Services Tailored to Your Needs
        </h1>
        <p className="px-6 text-base leading-7 text-center text-black lg:px-14 lg:text-lg">
          Our masseuses are experienced in multiple styles and techniques, and
          can adapt your chosen style to your preference or needs. Before your
          session begins, our skilled professionals guide you in selecting a
          style tailored to your needs. We offer: Head Back Neck And Shoulder
          Massage, Traditional Thai Massage, Thai Oil Mix Massage, Foot
          Reflexology, Deep Tissue Massage, Thai Herbal Heat Compression
          Massage, Thai Hot Oil Massage, Hot Stone Massage.
        </p>
      </div>
      <GridMassageOverview />
    </div>
  );
};

export default MassageOverview;
