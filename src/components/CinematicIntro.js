import React, { useState, useEffect, useRef, useCallback } from "react";
import "./CinematicIntro.css";

const CinematicIntro = ({ onComplete }) => {
  const [progress, setProgress] = useState(0); // 0 (start) to 1 (zoomed in & complete)
  const [isZooming, setIsZooming] = useState(false);
  const [initProgress, setInitProgress] = useState(0); // Simulated system initialization 0-100%
  const animationFrameRef = useRef(null);
  const hasTriggeredRef = useRef(false);

  // Lock body scroll while intro is visible
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Initializing bar progress (from user screenshot)
  useEffect(() => {
    const timer = setInterval(() => {
      setInitProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 4;
      });
    }, 40);
    return () => clearInterval(timer);
  }, []);

  // Cinematic Zoom Trigger
  const triggerZoom = useCallback(() => {
    if (hasTriggeredRef.current) return;
    hasTriggeredRef.current = true;
    setIsZooming(true);

    const startTime = performance.now();
    const duration = 1100; // 1.1s cinematic zoom-through

    const animateZoom = (currentTime) => {
      const elapsed = currentTime - startTime;
      const t = Math.min(1, elapsed / duration);

      // Cinematic easing curve (accelerates then expands through camera)
      // Ease-in-out cubic: t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      const easeProgress = t < 0.5 
        ? 4 * t * t * t 
        : 1 - Math.pow(-2 * t + 2, 3) / 2;

      setProgress(easeProgress);

      if (t < 1) {
        animationFrameRef.current = requestAnimationFrame(animateZoom);
      } else {
        // Animation finished!
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 120);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animateZoom);
  }, [onComplete]);

  // Handle Wheel / Scroll Intent
  useEffect(() => {
    const handleWheel = (e) => {
      // Any downward scroll intent starts the cinematic zoom
      if (e.deltaY > 0 || Math.abs(e.deltaY) > 5) {
        triggerZoom();
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const touchY = e.touches[0].clientY;
      if (touchStartY - touchY > 10) {
        // Swiped up (scrolling down)
        triggerZoom();
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        // Instant skip
        if (onComplete) onComplete();
      } else if (
        e.key === "ArrowDown" || 
        e.key === "PageDown" || 
        e.key === " " || 
        e.key === "Enter"
      ) {
        triggerZoom();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("keydown", handleKeyDown);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [triggerZoom, onComplete]);

  const [isMobile, setIsMobile] = useState(() => {
    return typeof window !== "undefined" ? window.innerWidth <= 768 : false;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Compute 3D Fly-By Transform for GOKUL S
  // Scales up to 8x and translates forward along Z axis
  const textScale = 1 + Math.pow(progress, 1.5) * 8.5;
  const textTranslateZ = progress * 750;
  const baseSpacing = isMobile ? 0.08 : 0.26;
  const textLetterSpacing = baseSpacing + progress * (isMobile ? 0.3 : 0.6);

  // Cinema Letterbox Bars slide off
  const cinemaBarOffset = progress * 120;

  // Telemetry fades out rapidly
  const telemetryOpacity = Math.max(0, 1 - progress * 3.5);

  // Overall overlay opacity fades out as it zooms through
  const overlayOpacity = progress < 0.45 
    ? 1 
    : Math.max(0, 1 - (progress - 0.45) / 0.5);

  return (
    <div
      className={`cinematic-wrapper ${isZooming ? "zooming" : ""}`}
      style={{
        opacity: overlayOpacity,
        pointerEvents: progress > 0.5 ? "none" : "auto",
      }}
    >
      {/* Cinema Letterbox Bars */}
      <div
        className="cinema-bar cinema-bar-top"
        style={{ transform: `translateY(-${cinemaBarOffset}%)` }}
      />
      <div
        className="cinema-bar cinema-bar-bottom"
        style={{ transform: `translateY(${cinemaBarOffset}%)` }}
      />

      {/* Atmospheric Background & Ambient Glow */}
      <div
        className="cinematic-bg-glow"
        style={{
          transform: `translate(-50%, -50%) scale(${1 + progress * 2})`,
          opacity: 0.7 * (1 - progress * 0.8),
        }}
      />
      <div className="cinematic-grid-overlay" />
      <div
        className="cinematic-lens-flare"
        style={{ opacity: Math.max(0, 1 - progress * 2) }}
      />

      {/* Top Telemetry Header */}
      <div className="cinematic-header" style={{ opacity: telemetryOpacity }}>
        <div className="cinematic-telemetry">
          <span className="telemetry-beacon" />
          <span className="telemetry-mono">SYS.2026 // PRODUCTION_ENV</span>
        </div>
      </div>

      {/* Center 3D Stage: GOKUL S zooms closer */}
      <div
        className="cinematic-stage"
        style={{
          transform: `perspective(1000px) translateZ(${textTranslateZ}px) scale(${textScale})`,
          transformOrigin: "center center",
          filter: `blur(${progress * 5}px)`,
        }}
      >
        {/* Small Tagline */}
        <div className="cinematic-tagline-small visible">
          <span className="mono-bracket">[</span>
          <span className="mono-label">SOFTWARE DEVELOPMENT ENGINEER</span>
          <span className="mono-bracket">]</span>
        </div>

        {/* Master Name: GOKUL S */}
        <div className="cinematic-name-container revealed">
          <h1
            className="cinematic-title"
            style={{ letterSpacing: `${textLetterSpacing}em` }}
          >
            <span className="cinematic-char">G</span>
            <span className="cinematic-char">O</span>
            <span className="cinematic-char">K</span>
            <span className="cinematic-char">U</span>
            <span className="cinematic-char">L</span>
            <span className="cinematic-space" />
            <span className="cinematic-char highlight">S</span>
          </h1>
          <div className="cinematic-light-sweep" />
        </div>

        {/* Subtitle */}
        <div className="cinematic-subtext visible">
          <p className="cinematic-tag">
            Reliable Web Applications · Scalable APIs · Database Systems
          </p>
        </div>

        {/* System Initializing Status Bar (Matching user screenshot) */}
        {!isZooming && (
          <div className="cinematic-meter-container visible">
            <div className="cinematic-meter-bar">
              <div
                className="cinematic-meter-fill"
                style={{ width: `${initProgress}%` }}
              />
            </div>
            <div className="cinematic-meter-status">
              <span className="status-label">
                {initProgress < 100
                  ? "COMPILING PROJECT ARCHITECTURES..."
                  : "SYSTEM READY · READY TO ENTER"}
              </span>
              <span className="status-percent">{initProgress}%</span>
            </div>
          </div>
        )}

        {/* Scroll Cue Prompt */}
        <div className="cinematic-scroll-cue-wrap">
          <button
            className="cinematic-scroll-prompt-btn"
            onClick={triggerZoom}
            aria-label="Scroll to enter"
          >
            <span className="prompt-mouse-icon">
              <span className="prompt-wheel-dot" />
            </span>
            <span className="prompt-scroll-text">SCROLL TO ENTER</span>
            <span className="prompt-scroll-arrow">↓</span>
          </button>
        </div>
      </div>

      {/* Bottom Coordinates Footer */}
      <div className="cinematic-footer-bar" style={{ opacity: telemetryOpacity }}>
        <div className="telemetry-coord">LOC: 11.278° N, 77.583° E · INDIA</div>
        <div className="telemetry-tech">JAVA · JAVASCRIPT · REACT · NODE.JS · SQL</div>
      </div>
    </div>
  );
};

export default CinematicIntro;
