import { portfolio } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="section-heading">
        &gt; SKILLS
      </h2>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5">
        {portfolio.skills.map((skill) => (
          <div
            key={skill}
            className="card flex min-h-14 items-center justify-center wrap-break-word px-3 py-3 text-center text-xs transition-transform hover:scale-105 sm:px-4 sm:text-sm md:text-base"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}