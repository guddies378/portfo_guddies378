"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { portfolio } from "@/data/portfolio";

export default function Hero() {
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const openContact = () => {
      setShowContact(true);
    };

    window.addEventListener("open-contact", openContact);

    return () => {
      window.removeEventListener("open-contact", openContact);
    };
  }, []);

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
          {/* LEFT SIDE */}
          <div
            className="
              order-2
              text-center
              md:order-1
              md:text-left
            "
          >
            <p className="mb-4 font-body text-sm tracking-wide text-cyan-400 sm:text-base md:text-lg">
              Hello, I&apos;m
            </p>

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

          {/* RIGHT SIDE */}
          <div
            id="character"
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
            <div
              className="character-wrapper"
              onMouseEnter={() => setShowContact(true)}
              onMouseLeave={() => setShowContact(false)}
            >
              <div className="character-glow" />

              {/* CONTACT POPUP */}
              <div
                className={`contact-popover ${
                  showContact
                    ? "contact-popover-visible"
                    : ""
                }`}
              >
                <p className="contact-popover-title">
                  CONTACT ME
                </p>

                <p className="contact-popover-text">
                  Want to work together?
                  Click Here
                </p>

               

                <div className="contact-arrow">
                  <span>→</span>
                </div>
              </div>

              {/* CLICK CHARACTER TO EMAIL */}
              <a
                href={`mailto:${portfolio.email}`}
                className="character-button"
                aria-label="Contact me by email"
              >
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}