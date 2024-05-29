import GridMassageOverview from "@/components/Grid/GridMassageOverview";
import GridMassage from "@/components/Grid/GridMassageOverview";
import HeroOverview from "@/components/Hero/HeroOverview";
const MassageOverview = () => {
  return (
    <div className="pb-10">
      <HeroOverview />
      <div className="text-center py-14">
        <h1 className="px-4 pb-10 text-3xl leading-relaxed lg:text-4xl">
          Massage Services Tailored to Your Needs
        </h1>
        <p className="px-6 text-lg leading-loose text-black lg:text-xl lg:px-14 lg:text-center text-start">
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
