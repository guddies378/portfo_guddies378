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

  const autoHideRef =
    useRef<ReturnType<typeof setTimeout> | null>(null);

  const holdTimerRef =
    useRef<ReturnType<typeof setTimeout> | null>(null);

  const longPressTriggeredRef = useRef(false);

  const suppressNextClickRef = useRef(false);

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
     CLEAR HOLD TIMER
  ========================================= */

  const clearHoldTimer = () => {
    if (holdTimerRef.current) {
      clearTimeout(holdTimerRef.current);
      holdTimerRef.current = null;
    }
  };

  /* =========================================
     NAVBAR CONTACT EVENT
  ========================================= */

  useEffect(() => {
    const openContact = () => {
      clearAutoHide();

      setShowContact(true);

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
      clearHoldTimer();
    };
  }, []);

  /* =========================================
     DESKTOP HOVER
  ========================================= */

  const handleMouseEnter = () => {
    if (
      window.matchMedia("(hover: hover)").matches
    ) {
      clearAutoHide();

      setShowContact(true);
    }
  };

  const handleMouseLeave = () => {
    if (
      window.matchMedia("(hover: hover)").matches
    ) {
      setShowContact(false);
    }
  };

  /* =========================================
     PHONE - START HOLD
  ========================================= */

  const handleTouchStart = () => {
    clearAutoHide();
    clearHoldTimer();

    longPressTriggeredRef.current = false;
    suppressNextClickRef.current = false;

    /*
      User must hold for 400ms
      before the dialogue appears.
    */
    holdTimerRef.current = setTimeout(() => {
      longPressTriggeredRef.current = true;
      suppressNextClickRef.current = true;

      setShowContact(true);
    }, 400);
  };

  /* =========================================
     PHONE - RELEASE
  ========================================= */

  const handleTouchEnd = () => {
    clearHoldTimer();

    /*
      If the user was holding long enough
      to show the dialogue, hide it as soon
      as their finger is released.
    */
    if (longPressTriggeredRef.current) {
      setShowContact(false);

      longPressTriggeredRef.current = false;
    }
  };

  /* =========================================
     PHONE - TOUCH CANCEL
  ========================================= */

  const handleTouchCancel = () => {
    clearHoldTimer();

    setShowContact(false);

    longPressTriggeredRef.current = false;
    suppressNextClickRef.current = false;
  };

  /* =========================================
     PHONE - USER STARTS SCROLLING
  ========================================= */

  const handleTouchMove = () => {
    /*
      Cancel the long press if the user
      starts moving their finger to scroll.
    */

    if (!longPressTriggeredRef.current) {
      clearHoldTimer();
    }
  };

  /* =========================================
     CHARACTER CLICK
  ========================================= */

  const handleCharacterClick = (
    event: MouseEvent<HTMLAnchorElement>
  ) => {
    /*
      Browsers usually fire a click after
      touchend.

      If the touch was a long press,
      prevent that click so email does not
      open when the visitor releases.
    */

    if (suppressNextClickRef.current) {
      event.preventDefault();

      suppressNextClickRef.current = false;

      return;
    }

    /*
      Quick tap:
      nothing is prevented.

      The mailto link opens normally.
    */
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
              className="character-wrapper"

              /* Desktop */
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}

              /* Phone */
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onTouchCancel={handleTouchCancel}
              onTouchMove={handleTouchMove}
            >
              {/* Glow */}

              <div
                className="character-glow"
                aria-hidden="true"
              />

              {/* =================================
                  GAME DIALOGUE
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

                  <span>CONTACT ME</span>
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
                  clearAutoHide();

                  setShowContact(true);
                }}
                onBlur={() => {
                  setShowContact(false);
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