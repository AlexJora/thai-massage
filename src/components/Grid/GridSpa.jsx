import Image from "next/image";

const GridSpa = () => {
  const cards = [
    {
      title: "Happy Feet Package",
      text: "Foot Scrub and Foot Massage",
      price: "R550 ( 90 minutes )",
      imageUrl: "/assets/grid/happy.jpg",
    },
    {
      title: "In a Rush Package",
      text: "Body Scrub, Shower, Oil Massage",
      price: "R850 ( 120 minutes )",
      imageUrl: "/assets/grid/scrub2.jpg",
    },
    {
      title: "Anti Stress Package",
      text: "Thai Oil Mix, Head, Foot Massage, Shower, Facial",
      price: "R995 ( 150 minutes )",
      imageUrl: "/assets/grid/antistress.jpg",
    },
  ];
  return (
    <div className="relative w-full pb-20 mx-auto md:w-5/6 lg:w-full">
      <div
        className="absolute inset-0 z-0 hidden bg-center bg-cover lg:block"
        style={{ backgroundImage: "url('/assets/bg-spa.webp')" }}
      >
        <div className="absolute inset-0 bg-white opacity-90"></div>
      </div>
      <div className="relative z-10">
        <div className="py-16 lg:py-24">
          
          <p className="px-6 text-base leading-7 text-center text-black lg:px-14 lg:text-lg">
            Embark on a journey to relaxation at{" "}
            <span className="font-semibold">Ruan Thai</span> , where our
            exclusive spa packages await. Tailored to suit every preference,
            whether it's a romantic escape, a bonding experience with friends,
            or a solo retreat, our thoughtfully crafted packages offer the
            perfect escape. Explore our range of treatments, including:{" "}
            <span className="font-semibold">
              Happy Feet, In a Rush, and Anti-Stress Packages
            </span>
            .
          </p>
        </div>
        {cards.map((card, index) => (
          <div
            key={index}
            className="grid items-center lg:gap-48 lg:grid-cols-2 lg:pb-14 lg:ps-20"
          >
            <div className="flex justify-center lg:justify-start">
              <div className="w-full h-72 md:h-[450px]">
                <Image
                  className="object-cover w-full h-full shadow-lg"
                  src={card.imageUrl}
                  alt={card.title}
                  width={450}
                  height={450}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
            <div className="p-6 text-black">
              {/* border large */}
              <div className="flex-col justify-start hidden gap-4 lg:flex">
                <div className="w-2/5 border-b-4 border-primary-300"></div>

                <h1 className="pb-6 text-2xl font-semibold">{card.title}</h1>
              </div>
              {/* border mobile */}
              <div className="relative mb-6 text-xl font-semibold lg:hidden">
                {card.title}
                <div className="absolute bottom-[-8px] w-20 h-0.5 bg-primary-300"></div>
              </div>
              <p className="mb-4 text-xl leading-relaxed">{card.text}</p>
              <div className="pt-4 text-base text-gray-500">
                <div className="w-3/6 pb-1 mb-1 md:w-2/6">{card.price}</div>
              </div>
              <button
                href="/contact"
                className="block px-10 py-2 mt-8 mb-8 text-base text-left text-black border-2 border-black hover:bg-black hover:text-white focus:outline-none focus:ring bg-primary-300"
              >
                Book now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridSpa;
