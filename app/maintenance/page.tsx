export default function Maintenance() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <p className="text-white/50 uppercase tracking-[0.3em] text-xs mb-6">
          Scheduled Maintenance
        </p>

        <h1 className="text-5xl md:text-7xl font-light leading-tight tracking-tight text-white">
          We'll Be Back Soon
          <br />
          <span className="text-white/40">Enhancing Your Experience</span>
        </h1>

        <p className="mt-8 text-lg text-white/60">
          We're currently updating Concertos to bring you new features and improvements.
          Thanks for your patience - we'll be live shortly.
        </p>

        <div className="mt-12 flex flex-col md:flex-row justify-center gap-6">
          <a
            href="mailto:founders@concertoslive.com"
            className="px-8 py-4 bg-white text-black rounded-full text-sm tracking-wide hover:bg-white/90 transition"
          >
            Contact Support
          </a>

          <a
            href="/how-it-works"
            className="px-8 py-4 border border-white/20 rounded-full text-sm text-white/70 hover:text-white hover:border-white/40 transition"
          >
            Learn More
          </a>
        </div>

      </div>
    </section>
  );
}