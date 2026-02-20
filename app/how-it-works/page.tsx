import Navbar from "../../components/Navbar";
import HowItWorks from "./sections/HowItWorks";

export default function HowItWorksPage() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <HowItWorks />
    </main>
  );
}

export const metadata = {
  title: "How It Works - ConcertOS",
  description: "Learn how artists can host premium live concerts with ConcertOS",
};