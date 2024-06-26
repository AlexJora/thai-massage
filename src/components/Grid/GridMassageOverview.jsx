import Image from "next/image";
import Link from "next/link";

const GridMassageOverview = () => {
  const cards = [
    {
      title: "Traditional Thai Massage",
      text: "Traditional Thai massage is a treatment which is famous for its healing properties and health benefits.",
      price1: "R420 (60 minutes)",
      price2: "R600 (90 minutes)",
      price3: "R800 (120 minutes)",
      imageUrl: "/assets/grid/traditionalThai1.webp",
    },
    {
      title: "Thai Oil Mix Massage",
      text: "Our most popular treatment, combining the healing effects of Thai massage with the relaxation of oil.",
      price1: "R420 (60 minutes)",
      price2: "R600 (90 minutes)",
      price3: "R800 (120 minutes)",
      imageUrl: "/assets/grid/oilMix1.webp",
    },
    {
      title: "Thai Hot Oil Massage",
      text: "If you're not ready for traditional Thai or Thai oil mix massage, an oil massage can be more relaxing.",
      price: "R400 (60 minutes)",
      imageUrl: "/assets/grid/hotOil1.webp",
      price1: "R420 (60 minutes)",
      price2: "R600 (90 minutes)",
      price3: "R800 (120 minutes)",
    },

    {
      title: "Foot Reflexology",
      text: "Reflexology involves the stimulation of 'reflex points' in the hands or feet using thumb and hand techniques.",

      imageUrl: "/assets/massage-pages/foot1.webp",
      price1: "R350 (45 minutes)",
      price2: "R420 (60 minutes)",
      price3: "-",
    },
    {
      title: "Couple Massage",
      text: "Traditional Thai massage is a treatment which is famous for its healing properties and health benefits.",

      imageUrl: "/assets/grid/couple1.webp",
      price1: "-",
      price2: "-",
      price3: "-",
    },

    {
      title: "Hot Stone Massage",
      text: "Hot stone massage can relieve pain and tension in your muscles due to the combination of massage therapy and heat.",
      price: "R400 (60 minutes)",
      imageUrl: "/assets/grid/stone.webp",
      price1: "R550 (60 minutes)",
      price2: "R670 (90 minutes)",
      price3: "-",
    },
  ];
  return (
    <div className="mx-auto md:w-5/6 lg:w-11/12">
      {cards.map((card, index) => (
        <div
          key={index}
          className="grid items-center lg:gap-20 lg:grid-cols-2 lg:pb-14"
        >
          <div className="flex justify-center lg:justify-start">
            <div className="w-full h-64 md:h-96">
              <Image
                className="object-cover w-full h-full shadow-lg"
                src={card.imageUrl}
                alt={card.title}
                width={500}
                height={500}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
          <div className="p-6 text-black bg-white">
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
            <div className="pt-4 text-sm text-secondary-700">
              <div className="w-3/6 pb-1 mb-1 border-b border-gray-300 md:w-2/6">
                {card.price1}
              </div>
              <div className="w-3/6 pb-1 mb-1 border-b border-gray-300 md:w-2/6">
                {card.price2}
              </div>
              <div className="w-3/6 pb-1 mb-1 border-b border-gray-300 md:w-2/6">
                {card.price3}
              </div>
            </div>
            <Link
              href="/contact"
              className="block w-40 px-10 py-2 mt-8 mb-12 text-base text-left text-black border-2 border-black hover:bg-black hover:text-white focus:outline-none focus:ring bg-primary-300"
            >
              Book now
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridMassageOverview;
