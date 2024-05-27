import Image from "next/image";

const GridMassageHome = () => {
  const cards = [
    {
      title: "Thai Massage - Without Oil",
      text: "The traditional Thai massage involves techniques including pressing, rolling, squeezing.",
      price1: "R420 (60 minutes)",
      price2: "R600 (90 minutes)",
      price3: "R800 (120 minutes)",
      imageUrl: "/assets/thaiNoOilGrid.jpg",
    },
    {
      title: "Thai Massage - With Oil",
      text: "Our most popular treatment, combining the healing effects of Thai massage with the relaxation of oil.",
      price1: "R420 (60 minutes)",
      price2: "R600 (90 minutes)",
      price3: "R800 (120 minutes)",
      imageUrl: "/assets/thaiOilGrid.jpg",
    },
    {
      title: "Thai foot massage",
      text: "Reflexology involves the stimulation of ‘reflex points’ in the hands or feet using thumb and hand techniques.",
      price: "R400 (60 minutes)",
      imageUrl: "/assets/footGrid.jpg",
      price1: "R420 (60 minutes)",
      price2: "R600 (90 minutes)",
      price3: "R800 (120 minutes)",
    },
  ];
  return (
    <div className="w-5/6 mx-auto mt-10">
      <h1 className="py-10 text-3xl text-center">MAIN SERVICES</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="max-w-sm mx-auto overflow-hidden text-center bg-white"
          >
            <div className="relative w-full h-72">
              <Image
                src={card.imageUrl}
                alt={card.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="px-6 py-4">
              <div className="relative mb-6 text-xl font-semibold">
                {card.title}
                <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-primary-300"></div>
              </div>

              <p className="mb-4 text-base text-gray-700">{card.text}</p>
              <ul className="pt-4 text-xs text-gray-500">
                <li className="pb-1 mb-1 border-b border-gray-300">
                  {card.price1}
                </li>
                <li className="pb-1 mb-1 border-b border-gray-300">
                  {card.price2}
                </li>
                <li className="pb-1 mb-1 border-b border-gray-300">
                  {card.price3}
                </li>
              </ul>
            </div>
            <div className="flex justify-center pt-4 pb-2">
              <button
                href="#"
                className="block px-4 py-2 text-base text-left text-black border-2 border-black hover:bg-black hover:text-white focus:outline-none focus:ring bg-primary-300"
              >
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridMassageHome;
