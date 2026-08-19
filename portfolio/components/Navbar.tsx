"use client";

import { useState } from "react";
import Image from "next/image";

const links = [
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "PROJECTS", href: "#projects" },
  { label: "SKILLS", href: "#skills" },
  { label: "EDUCATION", href: "#education" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleContactClick = () => {
    setMenuOpen(false);

    const character = document.getElementById("character");

    if (!character) return;

    character.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    window.setTimeout(() => {
      window.dispatchEvent(new Event("open-contact"));
    }, 700);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-800 bg-slate-900/95 backdrop-blur-md">
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* KOALA */}
        <a
          href="#hero"
          onClick={closeMenu}
          className="flex h-full shrink-0 items-center"
          aria-label="Go to hero section"
        >
          <Image
            src="/Koala.png"
            alt="Pixel koala logo"
            width={220}
            height={120}
            priority
            className="
              koala-logo
              h-auto
              w-32.5
              object-contain
              object-left
              sm:w-37.5
              lg:w-45
            "
          />
        </a>

        {/* DESKTOP MENU */}
        <div className="ml-auto hidden items-center gap-8 font-title md:flex lg:gap-10">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="
                text-sm
                uppercase
                tracking-[0.18em]
                text-slate-300
                transition-colors
                duration-200
                hover:text-cyan-400
              "
            >
              {link.label}
            </a>
          ))}

          <button
            type="button"
            onClick={handleContactClick}
            className="
              font-title
              text-sm
              uppercase
              tracking-[0.18em]
              text-slate-300
              transition-colors
              duration-200
              hover:text-cyan-400
            "
          >
            CONTACT
          </button>
        </div>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() =>
            setMenuOpen((previous) => !previous)
          }
          className="
            ml-auto
            flex
            h-10
            w-10
            items-center
            justify-center
            border-2
            border-cyan-400
            font-title
            text-lg
            text-cyan-400
            md:hidden
          "
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "X" : "☰"}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="border-t border-slate-800 bg-slate-950/95 px-4 py-5 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-5">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="
                  font-title
                  text-sm
                  uppercase
                  tracking-[0.18em]
                  text-slate-300
                  transition-colors
                  hover:text-cyan-400
                "
              >
                {link.label}
              </a>
            ))}

            <button
              type="button"
              onClick={handleContactClick}
              className="
                font-title
                text-sm
                uppercase
                tracking-[0.18em]
                text-slate-300
                transition-colors
                hover:text-cyan-400
              "
            >
              CONTACT
            </button>
          </div>
        </div>
      )}
    </header>
  );
}