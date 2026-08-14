"use client";

import { useState } from "react";
import Image from "next/image";

const links = [
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "SKILLS", href: "#skills" },
  { label: "EDUCATION", href: "#education" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-800 bg-slate-900/95 backdrop-blur-md">
      <nav className="mx-auto flex h-20 w-full max-w-350 items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Large koala on the left */}
        <a
          href="#hero"
          onClick={closeMenu}
          className="flex h-full shrink-0 items-center"
          aria-label="Go to the hero section"
        >
          <Image
            src="/Koala.png"
            alt="Pixel koala logo"
            width={180}
            height={100}
            priority
            className="
              koala-logo
              h-auto
              w-30
              object-contain
              object-left
              sm:w-36.25
              lg:w-43.75
            "
          />
        </a>

        {/* Desktop links on the right */}
        <div className="ml-auto hidden items-center justify-end gap-6 md:flex lg:gap-9">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-title text-xs uppercase tracking-[0.18em] text-slate-300 transition-colors duration-200 hover:text-cyan-400 lg:text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setMenuOpen((previous) => !previous)}
          className="ml-auto flex h-10 w-10 items-center justify-center border-2 border-cyan-400 font-title text-lg text-cyan-400 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "X" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-slate-800 bg-slate-950/95 px-4 py-5 md:hidden">
          <div className="mx-auto flex max-w-350 flex-col items-center gap-5">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="font-title text-sm uppercase tracking-[0.18em] text-slate-300 hover:text-cyan-400"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}