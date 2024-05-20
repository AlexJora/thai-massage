const MassageBenefits = () => {
  const items = [
    {
      title: "STRESS RELIEF",
      text: "Massage therapy is well-known for its ability to help reduce stress levels. It promotes relaxation by lowering cortisol levels (the stress hormone) and increasing the production of serotonin and dopamine, which improve mood and relaxation.",
    },
    {
      title: "PAIN  RELIEF",
      text: "Massage can be effective in alleviating various types of pain, including chronic pain, muscle soreness, and joint pain. Techniques such as deep tissue massage, trigger point therapy, and myofascial release can help release tension, reduce inflammation, and improve blood flow to painful areas.",
    },
    {
      title: "IMPROVED CIRCULATION",
      text: "Massage enhances blood and lymphatic circulation. This increased circulation helps deliver oxygen and nutrients to muscle cells more efficiently, which can aid in muscle recovery, reduce swelling, and improve overall cardiovascular health.",
    },
    {
      title: "ENHANCED FLEXIBILITY AND RANGE OF MOTION",
      text: "Regular massage therapy can help keep muscles relaxed and joints more fluid, which can enhance flexibility and range of motion. This is particularly beneficial for athletes or individuals who engage in physical activities, as it can improve performance and prevent injuries.",
    },
  ];

  return (
    <div>
      <h1 className="mt-8 mb-12 text-4xl text-center">Massage Benefits</h1>

      <p className="px-8 mb-8 text-lg">
        Massage serves as a connection between our physical and mental states.
        It offers more than just relaxation, providing therapeutic benefits and
        targeted pain relief. By addressing both physical and mental aspects,
        massage promotes overall health, leaving you feeling rejuvenated and
        balanced.
      </p>
      <ul className="px-8 space-y-8 list-none">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <div className="flex-shrink-0 w-3 h-3 mt-1 mr-4 rounded-full bg-primary-300"></div>
            <div>
              <h2 className="mb-2 text-lg font-bold text-primary-300">
                {item.title}
              </h2>
              <p>{item.text}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap justify-center my-16 ms-10">
        <button
          href="/contact"
          className="block w-auto px-6 py-4 text-lg text-left text-black border-2 border-black hover:bg-black hover:text-white focus:outline-none focus:ring bg-primary-300"
        >
          MASSAGE OVERVIEW
        </button>
      </div>
    </div>
  );
};

export default MassageBenefits;
