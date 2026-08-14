import { Mail } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact">
      <h2 className="section-heading">
        &gt; CONTACT
      </h2>

      <div className="card p-5 sm:p-6 md:p-8">
        <a
          href={`mailto:${portfolio.email}`}
          className="flex w-full items-center justify-center gap-3 break-all text-center text-sm text-cyan-400 transition-colors hover:text-cyan-300 sm:text-base md:justify-start"
        >
          <Mail className="shrink-0" size={20} />

          <span>{portfolio.email}</span>
        </a>
      </div>
    </section>
  );
}