export default function Benefits() {
  const items = [
    {
      title: "Full Control",
      description: "Set your ticket prices, schedule events, and customize your livestream exactly the way you want",
    },
    {
      title: "Global Audience",
      description: "Reach fans around the world. ConcertOS lets anyone tune in from anywhere",
    },
    {
      title: "Instant Payments",
      description: "Get paid immediately after your show. No delays, no middlemen",
    },
    {
      title: "Analytics & Insights",
      description: "Track your ticket sales and viewer engagement in real time",
    },
  ];

  return (
    <section className="py-20 bg-black text-white px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {items.map((item, index) => (
          <div key={index} className="p-8 border border-white/10 rounded-3xl hover:bg-white/5 transition">
            <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
            <p className="text-white/70 text-lg">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
