import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 bg-black text-white text-center px-6">
      <h2 className="text-4xl md:text-5xl font-light mb-6">
        Ready to start your premium concert?
      </h2>
      <Link
        href="/signup"
        className="inline-block mt-4 px-8 py-4 bg-pink-500 text-black font-semibold rounded-xl hover:bg-pink-600 transition"
      >
        Request Early Access
      </Link>
    </section>
  );
}
