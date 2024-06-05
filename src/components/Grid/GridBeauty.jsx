import Image from "next/image";

const GridBeauty = () => {
  const cards = [
    {
      title: "Deep Cleansing Facial",
      text: "A deep cleansing facial is a versatile beauty treatment suitable for men and women of all ages. This comprehensive facial includes exfoliation, face masks, cleansing, a facial massage, steaming, and the application of various creams and lotions. Tailored to suit different skin types—whether dry, oily, sensitive, or normal—this treatment will leave your skin feeling refreshed and revitalized.",
      price: "R450 (60 minutes)",
      imageUrl: "/assets/grid/facials.jpg",
    },
    {
      title: "Body Scrub",
      text: "Experience the ultimate in skin rejuvenation with our full body scrub. This invigorating treatment exfoliates the skin using abrasive materials like salt, sugar, or herbs, removing dead skin cells and revealing fresh, new skin underneath. It enhances circulation, detoxifies, and refreshes the skin. Post-exfoliation, hydrating creams and oils are applied to lock in moisture, ensuring your skin remains soft and supple. Incorporate this treatment into your skincare routine for smoother, brighter, and more youthful-looking skin.",
      price: "R450 (60 minutes)",
      imageUrl: "/assets/grid/scrub.jpg",
    },
  ];
  return (
    <div className="w-5/6 mx-auto lg:11/12">
      {cards.map((card, index) => (
        <div
          key={index}
          className="grid items-center gap-10 p-4 lg:gap-20 lg:grid-cols-2 lg:pb-14"
        >
          <div className="flex justify-center lg:justify-start">
            <div className="w-full h-72 lg:h-96">
              <Image
                className="object-cover w-full h-full shadow-lg"
                src={card.imageUrl}
                alt={card.title}
                width={700}
                height={700}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
          <div className="text-black bg-secondary-101">
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
            <p className="mb-4 leading-relaxed">{card.text}</p>
            <div className="pt-4 text-xs text-gray-500">
              <div className="w-3/6 pb-1 mb-1 md:w-2/6">{card.price}</div>
            </div>
            <button
              href="#"
              className="block px-4 py-2 mt-8 text-base text-left text-black border-2 border-black hover:bg-black hover:text-white focus:outline-none focus:ring bg-primary-300"
            >
              Book now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridBeauty;
