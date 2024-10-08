import Image from "next/image";
import Link from "next/link";

const GridMassageHome = () => {
  const cards = [
    {
      title: "Traditional Thai Massage",
      text: "The traditional Thai massage involves techniques including pressing, rolling, squeezing.",
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
      title: "Foot Reflexology",
      text: "Reflexology involves the stimulation of 'reflex points' in the hands or feet using thumb and hand techniques.",
      price: "R400 (60 minutes)",
      imageUrl: "/assets/massage-pages/foot1.webp",
      price1: "R350 (45 minutes)",
      price2: "R420 (60 minutes)",
      price3: "-",
    },
  ];
  return (
    <div className="mx-auto mt-10 ">
      <h1 className="mt-12 mb-12 text-4xl text-center">Main Services</h1>
      <p className="px-6 pb-12 text-base leading-7 text-center text-black lg:px-14 lg:text-lg">
        At Ruan Thai, we offer a wide range of{" "}
        <span className="font-semibold">massages</span> including Traditional
        Thai, Thai Oil Mix, Foot Reflexology, and more, tailored to relax and
        rejuvenate your body. We also provide{" "}
        <span className="font-semibold">beauty</span> services like facials and
        body scrubs. For a more indulgent experience, try our{" "}
        <span className="font-semibold">spa packages.</span>
      </p>
      <div className="grid grid-cols-1 gap-8 md:gap-1 md:grid-cols-3 md:px-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="max-w-sm mx-auto overflow-hidden text-center bg-white"
          >
            <div className="relative w-full h-80">
              <Image
                src={card.imageUrl}
                alt={card.title}
                fill
                className="object-cover shadow-lg"
              />
            </div>
            <div className="px-6 py-6">
              <div className="relative mb-6 text-xl font-semibold">
                {card.title}
                <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-primary-300"></div>
              </div>

              <p className="mb-4 text-base">{card.text}</p>
              <ul className="pt-4 text-sm text-secondary-700">
                <li className="w-4/6 mx-auto border-b border-gray-300">
                  {card.price1}
                </li>
                <li className="w-4/6 pt-2 mx-auto border-b border-gray-300">
                  {card.price2}
                </li>
                <li className="w-4/6 pt-2 mx-auto border-b border-gray-300">
                  {card.price3}
                </li>
              </ul>
            </div>
            <div className="flex justify-center pt-4 pb-2">
              <Link
                href="/massage-overview"
                className="block px-10 py-2 mb-12 text-base text-left text-black border-2 border-black hover:bg-black hover:text-white focus:outline-none focus:ring bg-primary-300"
              >
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridMassageHome;
