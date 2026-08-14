import Image from "next/image";
import { portfolio } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <div className="mx-auto w-full max-w-350 px-5 sm:px-8 lg:px-12 xl:px-16">
        <div
          className="
            grid
            min-h-[calc(100vh-80px)]
            grid-cols-1
            items-center
            gap-6

            md:grid-cols-[1fr_320px]
            md:gap-10

            lg:grid-cols-[1fr_420px]
            lg:gap-14

            xl:grid-cols-[1fr_500px]
            xl:gap-16
          "
        >
          {/* LEFT SIDE - TEXT */}
          <div
            className="
              order-2
              text-center

              md:order-1
              md:text-left
            "
          >
            {/* Hello */}
            <p
              className="
                mb-4
                font-body
                text-sm
                tracking-wide
                text-cyan-400

                sm:text-base
                md:text-lg
              "
            >
              Hello, I&apos;m
            </p>

            {/* Name - Exactly 2 Lines */}
            <h1
              className="
                font-bold
                uppercase
                leading-[1.08]
                text-slate-100

                text-4xl
                sm:text-5xl
                md:text-5xl
                lg:text-6xl
                xl:text-7xl
              "
              style={{
                fontFamily: "var(--font-name)",
              }}
            >
              <span className="block whitespace-nowrap">
                Mark James F.
              </span>

              <span className="block whitespace-nowrap">
                Manlangit
              </span>
            </h1>

            {/* Developer / Programmer */}
            <h2
              className="
                mt-6
                font-title
                text-xs
                uppercase
                tracking-[0.22em]
                text-slate-400

                sm:text-sm
                md:text-sm
                lg:text-base
                xl:text-lg
              "
            >
              {portfolio.title}
            </h2>
          </div>

          {/* RIGHT SIDE - CHARACTER */}
          <div
            className="
              order-1
              flex
              items-center
              justify-center

              md:order-2
              md:items-end
              md:justify-end
            "
          >
            <div className="character-wrapper">
              {/* Soft Glow */}
              <div className="character-glow" />

              {/* Character */}
              <Image
                src="/Character.png"
                alt="Pixel character"
                width={600}
                height={900}
                priority
                className="
                  pixel-character
                  relative
                  z-10
                  h-auto

                  w-47.5
                  sm:w-60
                  md:w-75
                  lg:w-97.5
                  xl:w-115
                "
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="
          absolute
          bottom-7
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          text-slate-500
          transition-colors
          duration-300
          hover:text-cyan-400

          lg:flex
        "
      >
        <span className="font-title text-[9px] tracking-[0.2em]">
          SCROLL
        </span>

        <span className="animate-bounce text-lg">
          ↓
        </span>
      </a>
    </section>
  );
}