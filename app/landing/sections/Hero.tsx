import { getRequestAccessMailto } from "@/lib/mail";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-white/50 uppercase tracking-[0.3em] text-xs mb-6">
          Private Beta Platform
        </p>

        <h1 className="text-5xl md:text-7xl font-light leading-tight tracking-tight">
          Monetize Live Music
          <br />
          <span className="text-white/40">Without Limits</span>
        </h1>

        <p className="mt-8 text-lg text-white/60">
          Concertos enables artists to host premium ticketed livestream concerts
          for their global audience - directly, beautifully, and without intermediaries
        </p>

        <div className="mt-12 flex justify-center gap-6">
          <a
            href={getRequestAccessMailto()}
            className="px-8 py-4 bg-white text-black rounded-full text-sm tracking-wide hover:bg-white/90 transition"
          >
            Request Early Access
          </a>

          <a
            href="/landing/how-it-works"
            className="px-8 py-4 border border-white/20 rounded-full text-sm text-white/70 hover:text-white hover:border-white/40 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
