import HeroSpa from "@/components/Hero/HeroSpa";
const SpaPackages = () => {
  return (
    <div>
      <HeroSpa />
      <div className="py-16 lg:py-24">
        <h1 className="px-6 pb-6 text-3xl text-center">Spa Packages</h1>
        <p className="px-6 text-base leading-7 text-center text-black lg:px-14 lg:text-lg">
          Embark on a journey to ultimate relaxation at{" "}
          <span className="font-semibold">Ruan Thai</span> , where our exclusive
          spa packages await. Tailored to suit every preference, whether
          it&aposs a romantic escape, a bonding experience with friends, or a
          solo retreat, our thoughtfully crafted packages offer the perfect
          escape. Explore our range of treatments, including the{" "}
          <span className="font-semibold">
            Happy Feet, In a Rush, and Anti-Stress Packages
          </span>
          , and discover the essence of tranquility and well-being within each.
        </p>
      </div>
    </div>
  );
};

export default SpaPackages;
