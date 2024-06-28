import Image from "next/image";
import Link from "next/link";

const GridBeauty = () => {
  const cards = [
    {
      title: "Deep Cleansing Facial",
      text: "A deep cleansing facial is a versatile beauty treatment suitable for men and women of all ages. This comprehensive facial includes exfoliation, face masks, cleansing, a facial massage, and the application of various creams and lotions. Tailored to suit different skin types—whether dry, oily, sensitive, or normal—this treatment will leave your skin feeling refreshed and revitalized.",
      price: "R450 ( 60 minutes )",
      imageUrl: "/assets/grid/facial.webp",
    },
    {
      title: "Body Scrub",
      text: "Experience ultimate skin rejuvenation with our full body scrub. This treatment exfoliates using coffee, salt, sugar, or herbs to remove dead skin cells, revealing fresh skin underneath. It boosts circulation, detoxifies, and refreshes the skin. After exfoliation, hydrating creams and oils lock in moisture, keeping your skin soft and supple. Add this to your routine for smoother, brighter, and more youthful-looking skin.",
      price: "R450 ( 60 minutes )",
      imageUrl: "/assets/grid/body.webp",
    },
  ];
  return (
    <div className="w-full pb-10 mx-auto md:w-5/6 lg:w-11/12">
      {cards.map((card, index) => (
        <div
          key={index}
          className="grid items-center lg:gap-20 lg:grid-cols-2 lg:pb-14"
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
          <div className="p-6 text-black bg-secondary-101">
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
            <div className="pt-4 text-base text-gray-500">
              <div className="pb-1 mb-1">{card.price}</div>
            </div>
            <Link
              href="/contact"
              className="block w-40 px-10 py-2 mt-8 mb-8 text-base text-left text-black border-2 border-black hover:bg-black hover:text-white focus:outline-none focus:ring bg-primary-300"
            >
              Book now
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridBeauty;
