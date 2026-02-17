import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo -> torna alla landing */}
        <Link
          href="/"
          className="text-lg tracking-wide font-medium hover:opacity-80 transition"
        >
          ConcertOS
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <Link href="/for-artists" className="hover:text-white transition">
            For Artists
          </Link>

          <Link href="/how-it-works" className="hover:text-white transition">
            How it Works
          </Link>

          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>
        </div>

        {/* CTA */}
        <a
          href="mailto:founders@concertos.live"
          className="text-sm px-4 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition"
        >
          Request Access
        </a>
      </div>
    </nav>
  );
}
