import Hero from "./sections/Hero";
import Benefits from "./sections/Benefits";
import CTA from "./sections/CTA";
import Navbar from "../../../components/Navbar";

export default function ForArtists() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <Benefits />
      <CTA />
    </main>
  );
}

export const metadata = {
  title: "For Artists - ConcertOS",
  description: "Stream, sell tickets, and engage your fans worldwide with ConcertOS",
};