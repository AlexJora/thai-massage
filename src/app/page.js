import HeroHome from "@/components/Hero/HeroHome";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <HeroHome />
      {/* TEXT */}
      <div className="text-center">
        <p className="px-20 pt-24 text-xl text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus
          dui, eleifend eu consequat eget, fringilla nec arcu. Duis aliquet
          aliquet libero in aliquet. Nulla et risus metus. Morbi sed sapien
          neque. Donec pellentesque accumsan molestie. Integer in justo nec est
          ultricies vestibulum eu at mi. Fusce porta tristique est, ut porta
          arcu vestibulum sit amet. Proin ullamcorper, justo vel pretium
          facilisis, quam
        </p>
      </div>
    </div>
  );
}
