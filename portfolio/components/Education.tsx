import { portfolio } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education">
      <h2 className="section-heading">
        &gt; EDUCATION
      </h2>

      <div className="card p-5 text-center sm:p-6 md:p-8 md:text-left">
        <h3 className="wrap-break-word text-lg sm:text-xl">
          {portfolio.education.degree}
        </h3>

        <p className="mt-3 text-sm text-cyan-400 sm:text-base">
          {portfolio.education.school}
        </p>

        <p className="mt-2 text-sm text-slate-400 sm:text-base">
          {portfolio.education.year}
        </p>
      </div>
    </section>
  );
}