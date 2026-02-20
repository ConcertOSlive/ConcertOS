import Navbar from "../../components/Navbar";
import Hero from "./sections/Hero";

export default function LandingPage() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
    </main>
  );
}