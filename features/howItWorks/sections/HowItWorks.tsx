import StepCard from "../components/StepCard";


export default function HowItWorksPage() {
  return (
    <main className="bg-black text-white min-h-screen px-6 pt-24">
      {/* Hero secondaria */}
      <div className="max-w-4xl mx-auto text-center py-20">
        <h1 className="text-5xl md:text-6xl font-light mb-6">
          How ConcertOS Works
        </h1>
        <p className="text-white/60 text-lg">
          Monetize your live performances effortlessly. Here's how our platform
          empowers artists to create, sell, and stream concerts globally
        </p>
      </div>

      {/* Steps */}
      <div className="max-w-3xl mx-auto flex flex-col gap-12 pb-32">
        <StepCard
          stepNumber={1}
          title="Create Your Event"
          description="Set up your concert with a few clicks — title, date, and ticket price. Customize your event exactly how you want it."
          bgClass="bg-white/5"
        />
        <StepCard
          stepNumber={2}
          title="Sell Tickets"
          description="Fans buy tickets directly through ConcertOS. You control pricing and maximize your revenue without intermediaries."
          bgClass="bg-white/6"
        />
        <StepCard
          stepNumber={3}
          title="Go Live"
          description="Stream your concert to a global audience. Fans watch from anywhere, and you get paid instantly after the show."
          bgClass="bg-white/5"
        />
      </div>
    </main>
  );
}
