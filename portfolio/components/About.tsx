import { portfolio } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about">
      <h2 className="section-heading">
        &gt; ABOUT
      </h2>

      <div className="card p-5 sm:p-6 md:p-8">
        <p className="text-sm leading-7 text-slate-300 sm:text-base sm:leading-8 md:text-lg">
          {portfolio.summary}
        </p>
      </div>
    </section>
  );
}