import Link from "next/link";
import { getRequestAccessMailto } from "@/lib/mail";

export default function CTA() {
  return (
    <section className="py-20 bg-black text-white text-center px-6">
      <h2 className="text-4xl md:text-5xl font-light mb-6">
        Ready to start your premium concert?
      </h2>
      <Link
        href={getRequestAccessMailto()}
        className="inline-block mt-4 px-8 py-4 bg-brandsecondary text-black font-semibold rounded-xl hover:bg-brandprimary transition"
      >
        Request Early Access
      </Link>
    </section>
  );
}
