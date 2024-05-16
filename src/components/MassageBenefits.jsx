const MassageBenefits = () => {
  const items = [
    {
      title: "Relieves STRESS",
      text: "Massage therapy is well-known for its ability to help reduce stress levels. It promotes relaxation by lowering cortisol levels (the stress hormone) and increasing the production of serotonin and dopamine, which improve mood and relaxation.",
    },
    {
      title: "PAIN  Relief",
      text: "Massage can effectively reduce pain levels. The combination of stretching and pressure techniques helps to alleviate discomfort and promote relaxation, leading to a decrease in pain intensity and frequency.",
    },
    {
      title: "Improved CIRCULATION",
      text: "Massage enhances blood and lymphatic circulation. This increased circulation helps deliver oxygen and nutrients to muscle cells more efficiently, which can aid in muscle recovery, reduce swelling, and improve overall cardiovascular health.",
    },
    {
      title: "Enhanced Flexibility and Range of MOTION",
      text: "Regular massage therapy can help keep muscles relaxed and joints more fluid, which can enhance flexibility and range of motion. This is particularly beneficial for athletes or individuals who engage in physical activities, as it can improve performance and prevent injuries.",
    },
  ];

  return (
    <div>
      <h1 className="mt-8 mb-12 text-4xl text-center">Massage Benefits</h1>
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
    </div>
  );
};

export default MassageBenefits;
