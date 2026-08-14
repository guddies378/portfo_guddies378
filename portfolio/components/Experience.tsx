import { portfolio } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience">
      <h2 className="section-heading">
        &gt; EXPERIENCE
      </h2>

      <div className="space-y-5 sm:space-y-7">
        {portfolio.experience.map((job) => (
          <article
            key={`${job.title}-${job.company}`}
            className="card p-5 sm:p-6 md:p-8"
          >
            <div className="text-center md:text-left">
              <h3 className="wrap-break-word text-lg font-bold uppercase sm:text-xl md:text-2xl">
                {job.title}
              </h3>

              <p className="mt-3 text-sm text-cyan-400 sm:text-base md:text-lg">
                {job.company}
              </p>

              <p className="mt-2 text-sm text-slate-400 sm:text-base">
                {job.year}
              </p>
            </div>

            <div className="mx-auto mt-6 max-w-3xl sm:mt-8">
              {job.items.map((item) => (
                <div
                  key={item}
                  className="mb-4 flex items-start gap-3 sm:gap-4"
                >
                  <span
                    className="mt-1 shrink-0 text-xs text-cyan-400 sm:text-sm"
                    aria-hidden="true"
                  >
                    ■
                  </span>

                  <p className="min-w-0 wrap-break-word text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}