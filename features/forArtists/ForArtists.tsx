import Hero from "./sections/Hero";
import Benefits from "./sections/Benefits";
import CTA from "./sections/CTA";
import Navbar from "../../components/Navbar";

export default function ForArtists() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <Benefits />
      <CTA />
    </main>
  );
}
