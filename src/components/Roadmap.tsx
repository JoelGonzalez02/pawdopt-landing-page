export default function Roadmap() {
  const roadMapSteps = [
    {
      phase: "Phase 1",
      title: "Los Angeles Private Beta",
      description:
        "An exclusive launch in the LA area, powered by a high-quality, curated database of local animals with engaging video content.",
      status: "In Progress",
    },
    {
      phase: "Phase 2",
      title: "California-Wide Launch",
      description:
        "Expanding our curated database to cover all major city hubs across California, bringing a better discovery experience to the entire state.",
      status: "Planned",
    },
    {
      phase: "Phase 3",
      title: "Nationwide Expansion",
      description:
        "Pending a partnership with Petfinder.com, we will scale our platform to serve every city in the nation, ensuring every pet gets the spotlight.",
      status: "Awaiting Partnership",
    },
  ];

  return (
    <section className="bg-gray-100 text-black w-full min-h-screen flex items-center">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Our Roadmap to a Better Future
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
          We are starting with a focused, high-quality launch and planning our
          growth every step of the way.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {roadMapSteps.map((step) => (
            <div
              key={step.phase}
              className="bg-white p-8 rounded-2xl shadow-lg flex flex-col"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {step.phase}: {step.title}
              </h3>
              <p className="text-gray-600 flex-grow">{step.description}</p>
              <span
                className={`mt-6 font-semibold py-2 px-4 rounded-full self-center ${
                  step.status === "In Progress"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {step.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
