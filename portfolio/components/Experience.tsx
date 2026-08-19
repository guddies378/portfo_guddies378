import { FaGithub } from "react-icons/fa";
import { portfolio } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience">
      {/* EXPERIENCE */}
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

      {/* PROJECTS */}
      <div
        id="projects"
        className="mt-14 scroll-mt-24 sm:mt-16"
      >
        <h2 className="section-heading">
          &gt; PROJECTS
        </h2>

        <div className="card p-5 sm:p-6 md:p-8">
          <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">

            {/* GITHUB INFO */}
            <div>
              <div className="flex items-center justify-center gap-3 md:justify-start">
                <FaGithub
                  size={28}
                  className="text-cyan-400"
                />

                <h3 className="font-title text-lg uppercase text-slate-100 sm:text-xl">
                  GitHub
                </h3>
              </div>

              <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
                See my projects and repositories on GitHub.
              </p>
            </div>

            {/* GITHUB BUTTON */}
            <a
              href="https://github.com/guddies378"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
              className="
                inline-flex
                items-center
                justify-center
                gap-3

                border-2
                border-slate-700

                bg-slate-900

                px-5
                py-3

                font-title
                text-xs
                uppercase
                tracking-[0.14em]

                text-slate-200

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-cyan-400
                hover:text-cyan-400

                sm:text-sm
              "
            >
              <FaGithub size={20} />

              <span>
                SEE MY GITHUB PROFILE
              </span>

              <span aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}