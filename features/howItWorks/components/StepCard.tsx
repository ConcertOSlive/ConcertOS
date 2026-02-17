export default function StepCard({
  title,
  description,
  stepNumber,
  bgClass = "bg-white/5",
}: {
  title: string;
  description: string;
  stepNumber?: number;
  bgClass?: string;
}) {
  return (
    <div className={`${bgClass} p-12 rounded-3xl shadow-md flex flex-col md:flex-row items-start gap-8 transition hover:bg-white/10`}>
      <div className="text-4xl font-bold text-pink-500 md:w-16 md:flex-shrink-0">
        {stepNumber && stepNumber.toString().padStart(2, "0")}
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-white/70 text-lg">{description}</p>
      </div>
    </div>
  );
}
