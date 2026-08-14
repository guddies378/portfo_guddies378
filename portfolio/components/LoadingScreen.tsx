"use client";

import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onFinish: () => void;
}

export default function LoadingScreen({
  onFinish,
}: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setProgress((previous) => {
        if (previous >= 100) {
          window.clearInterval(interval);

          window.setTimeout(() => {
            setFadeOut(true);
          }, 500);

          window.setTimeout(() => {
            onFinish();
          }, 1000);

          return 100;
        }

        return Math.min(previous + 2, 100);
      });
    }, 50);

    return () => {
      window.clearInterval(interval);
    };
  }, [onFinish]);

  const totalBlocks = 24;
  const filledBlocks = Math.floor(
    (progress / 100) * totalBlocks
  );

  return (
    <div
      className={`loading-screen ${
        fadeOut ? "loading-screen-hidden" : ""
      }`}
    >
      <div className="loading-container">
        <h1 className="loading-heading">
          BOOTING PORTFOLIO...
        </h1>

        <div
          className="pixel-loading-bar"
          role="progressbar"
          aria-label="Loading portfolio"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
        >
          <div className="pixel-loading-inner">
            {Array.from({ length: totalBlocks }).map(
              (_, index) => (
                <span
                  key={index}
                  className={`pixel-loading-block ${
                    index < filledBlocks
                      ? "pixel-loading-block-filled"
                      : ""
                  }`}
                />
              )
            )}
          </div>
        </div>

        <p className="loading-percentage">
          Loading... {progress}%
        </p>

        <div className="loading-messages">
          {progress >= 20 && (
            <p>&gt; Loading Hero...</p>
          )}

          {progress >= 50 && (
            <p>&gt; Preparing Interface...</p>
          )}

          {progress >= 80 && (
            <p>&gt; Initializing...</p>
          )}

          {progress === 100 && (
            <p className="welcome-message">
              &gt; WELCOME
            </p>
          )}
        </div>
      </div>
    </div>
  );
}