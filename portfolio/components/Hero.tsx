"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import { portfolio } from "@/data/portfolio";

export default function Hero() {
  const [showContact, setShowContact] = useState(false);

  const characterRef = useRef<HTMLDivElement>(null);

  const autoHideRef =
    useRef<ReturnType<typeof setTimeout> | null>(null);

  /* =========================================
     CHECK IF DEVICE IS MOBILE / TOUCH
  ========================================= */

  const isTouchDevice = () => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.matchMedia(
      "(hover: none) and (pointer: coarse)"
    ).matches;
  };

  /* =========================================
     CLEAR AUTO HIDE
  ========================================= */

  const clearAutoHide = () => {
    if (autoHideRef.current) {
      clearTimeout(autoHideRef.current);
      autoHideRef.current = null;
    }
  };

  /* =========================================
     NAVBAR CONTACT EVENT
  ========================================= */

  useEffect(() => {
    const openContact = () => {
      clearAutoHide();

      setShowContact(true);

      /*
        Automatically hide after 4 seconds
        when opened from navbar.
      */
      autoHideRef.current = setTimeout(() => {
        setShowContact(false);
      }, 4000);
    };

    window.addEventListener(
      "open-contact",
      openContact
    );

    return () => {
      window.removeEventListener(
        "open-contact",
        openContact
      );

      clearAutoHide();
    };
  }, []);

  /* =========================================
     CLOSE MOBILE BUBBLE WHEN USER
     TAPS SOMEWHERE ELSE
  ========================================= */

  useEffect(() => {
    const handleOutsideClick = (
      event: PointerEvent
    ) => {
      if (!isTouchDevice()) {
        return;
      }

      if (!showContact) {
        return;
      }

      const character =
        characterRef.current;

      if (
        character &&
        !character.contains(
          event.target as Node
        )
      ) {
        clearAutoHide();

        setShowContact(false);
      }
    };

    document.addEventListener(
      "pointerdown",
      handleOutsideClick
    );

    return () => {
      document.removeEventListener(
        "pointerdown",
        handleOutsideClick
      );
    };
  }, [showContact]);

  /* =========================================
     DESKTOP HOVER
  ========================================= */

  const handleMouseEnter = () => {
    /*
      Only use hover behavior on devices
      that actually have a mouse/trackpad.
    */

    if (!isTouchDevice()) {
      clearAutoHide();

      setShowContact(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice()) {
      clearAutoHide();

      setShowContact(false);
    }
  };

  /* =========================================
     CHARACTER CLICK
  ========================================= */

  const handleCharacterClick = (
    event: MouseEvent<HTMLAnchorElement>
  ) => {
    /*
      DESKTOP

      Let the <a href="mailto:...">
      behave normally.

      Clicking the character immediately
      opens the visitor's email app.
    */

    if (!isTouchDevice()) {
      return;
    }

    /*
      MOBILE - FIRST TAP

      If the bubble is hidden:
      1. Stop mailto
      2. Show CONTACT ME
    */

    if (!showContact) {
      event.preventDefault();

      clearAutoHide();

      setShowContact(true);

      return;
    }

    /*
      MOBILE - SECOND TAP

      showContact is already true.

      We DO NOT call preventDefault().

      Therefore the normal mailto link
      continues and opens the visitor's
      email application.
    */

    clearAutoHide();
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-visible pt-20"
    >
      <div className="mx-auto w-full max-w-350 px-5 sm:px-8 lg:px-12 xl:px-16">
        <div
          className="
            grid
            min-h-[calc(100vh-80px)]
            grid-cols-1
            items-center
            gap-8

            md:grid-cols-[1fr_320px]
            md:gap-10

            lg:grid-cols-[1fr_420px]
            lg:gap-14

            xl:grid-cols-[1fr_500px]
            xl:gap-16
          "
        >
          {/* =================================
              LEFT SIDE
          ================================= */}

          <div className="order-2 text-center md:order-1 md:text-left">
            <p className="mb-4 font-body text-sm tracking-wide text-cyan-400 sm:text-base md:text-lg">
              Hello, I&apos;m
            </p>

            <h1
              className="
                text-4xl
                font-bold
                uppercase
                leading-[1.08]
                text-slate-100

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
                lg:text-base
                xl:text-lg
              "
            >
              {portfolio.title}
            </h2>
          </div>

          {/* =================================
              RIGHT SIDE
          ================================= */}

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
              ref={characterRef}
              className="character-wrapper"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* =================================
                  CHARACTER GLOW
              ================================= */}

              <div
                className="character-glow"
                aria-hidden="true"
              />

              {/* =================================
                  CONTACT GAME BUBBLE
              ================================= */}

              <div
                className={`game-dialogue ${
                  showContact
                    ? "game-dialogue-visible"
                    : ""
                }`}
                role="status"
                aria-live="polite"
              >
                <div className="game-dialogue-header">
                  <span
                    className="game-dialogue-indicator"
                    aria-hidden="true"
                  >
                    ■
                  </span>

                  <span>
                    CONTACT ME
                  </span>
                </div>

                <p className="game-dialogue-message">
                  Want to work together?
                </p>

                <p className="game-dialogue-action">
                  CLICK CHARACTER TO EMAIL
                </p>
              </div>

              {/* =================================
                  CHARACTER
              ================================= */}

              <a
                href={`mailto:${portfolio.email}`}
                className="character-button"
                aria-label="Contact me by email"
                onClick={handleCharacterClick}
                onFocus={() => {
                  /*
                    Keyboard users on desktop
                    can still see the bubble.
                  */

                  if (!isTouchDevice()) {
                    clearAutoHide();

                    setShowContact(true);
                  }
                }}
                onBlur={() => {
                  if (!isTouchDevice()) {
                    setShowContact(false);
                  }
                }}
              >
                <Image
                  src="/Character.png"
                  alt="Pixel character"
                  width={600}
                  height={900}
                  priority
                  draggable={false}
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