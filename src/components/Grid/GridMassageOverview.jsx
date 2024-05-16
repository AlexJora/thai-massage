import Image from "next/image";

const GridMassageOverview = () => {
  const cards = [
    {
      title: "Traditional Thai Massage - Without Oil",
      text: "The traditional Thai massage involves techniques including pressing, rolling, squeezing, bending and pulling applied by the therapist using different parts of their body such as fingers, palms, forearms, elbows, knees, and feet. It is also ideal for therapeutic treatment is applied for full body.",
      price1: "R420 (60 minutes)",
      price2: "R600 (90 minutes)",
      price3: "R800 (120 minutes)",
      imageUrl: "/assets/thai.png",
    },
    {
      title: "Traditional Thai massage - With Oil",
      text: "Our most popular treatment, combining the healing effects of Thai massage with the relaxation of oil.",
      price1: "R420 (60 minutes)",
      price2: "R600 (90 minutes)",
      price3: "R800 (120 minutes)",
      imageUrl: "/assets/oil.png",
    },

    {
      title: "Thai foot massage",
      text: "Reflexology involves the stimulation of ‘reflex points’ in the hands or feet using thumb and hand techniques.",
      price: "R400 (60 minutes)",
      imageUrl: "/assets/foot.jpg",
      price1: "R420 (60 minutes)",
      price2: "R600 (90 minutes)",
      price3: "R800 (120 minutes)",
    },
  ];

  return (
    <div className="w-5/6 mx-auto mt-10">
      {cards.map((card, index) => (
        <div
          key={index}
          className="grid items-center grid-cols-1 gap-8 mb-20 md:grid-cols-2"
        >
          <div className="md:col-span-1">
            <Image
              className="object-cover"
              src={card.imageUrl}
              alt={card.title}
              width={700}
              height={700}
            />
          </div>
          <div className="p-4 pb-8 text-black bg-white md:col-span-1">
            <div className="flex justify-start mb-6">
              <div className="w-2/5 border-b-4 border-primary-300"></div>
            </div>
            <h1 className="mb-4 text-2xl font-semibold">{card.title}</h1>
            <p className="mb-4 leading-relaxed">{card.text}</p>
            <ul className="w-full mb-8 text-sm text-gray-500">
              <li className="w-full px-6 py-3 border-b-2 border-opacity-100 border-neutral-100 dark:border-white/10">
                {card.price1}
              </li>
              <li className="w-full px-6 py-3 border-b-2 border-opacity-100 border-neutral-100">
                {card.price2}
              </li>
              <li className="w-full px-6 py-3 border-b-2 border-opacity-100 border-neutral-100">
                {card.price3}
              </li>
            </ul>
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

export default GridMassageOverview;
