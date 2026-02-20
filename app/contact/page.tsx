import ContactSection from "./sections/ContactSection";
import Navbar from "../../components/Navbar";

export default function ForArtists() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <ContactSection />
    </main>
  );
}


export const metadata = {
  title: "Contact - Concertos",
  description: "Partner with Concertos to host premium paid live concerts",
};