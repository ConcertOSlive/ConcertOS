import { getRequestAccessMailto } from "@/lib/mail";

export default function ContactSection() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-32">
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-light tracking-tight">
          Let's Create Your Next Live Experience
        </h1>

        <p className="mt-6 text-white/60 text-lg leading-relaxed">
          Concertos partners with selected artists and labels to produce
          high-quality paid live performances for a global audience.
        </p>

        <p className="mt-4 text-white/60">
          If you're interested in hosting a premium digital concert,
          we'd love to hear from you.
        </p>

        {/* Divider */}
        <div className="w-16 h-px bg-white/20 mx-auto my-12" />

        {/* Contact block */}
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-widest text-white/40">
            Direct Contact
          </p>

          <a
            href={getRequestAccessMailto()}
            className="text-2xl md:text-3xl font-light hover:opacity-70 transition"
          >
            founders@concertos.live
          </a>

          <p className="text-white/40 text-sm">
            We typically respond within 24 hours.
          </p>
        </div>

        {/* Secondary CTA */}
        <div className="mt-16">
          <a
            href={getRequestAccessMailto()}
            className="inline-block px-8 py-4 border border-white/20 rounded-full
                       hover:bg-white hover:text-black transition text-sm tracking-wide"
          >
            Request Access
          </a>
        </div>

      </div>
    </section>
  );
}
