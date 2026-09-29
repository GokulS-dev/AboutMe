import { useEffect } from "react";

/**
 * useAnimatedFavicon
 * Renders a unique Developer Terminal (CLI) animated favicon in real time.
 * - Authentically styled IDE / Terminal window with macOS traffic lights (🔴 🟡 🟢)
 * - Electric cyan command prompt '>' and ultra-bold white 'G'
 * - Authentic blinking emerald cursor '_' (530ms standard terminal cycle)
 * - Zero loading spinner resemblance: 100% distinctive Software Engineer identity
 * - Battery-friendly: Pauses when tab is hidden, respects prefers-reduced-motion
 */
export function useAnimatedFavicon() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let link = document.querySelector("link#dynamic-favicon");
    if (!link) {
      link = document.querySelector("link[rel*='icon']");
      if (!link) {
        link = document.createElement("link");
        link.rel = "shortcut icon";
        document.head.appendChild(link);
      }
      link.id = "dynamic-favicon";
    }

    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrameId = null;
    let lastTime = 0;
    const targetFpsInterval = 1000 / 20; // 20 FPS is ultra-lightweight and smooth for terminal cursor
    let isHidden = document.hidden;

    const renderFrame = (t) => {
      ctx.clearRect(0, 0, 64, 64);

      // 1. Terminal Window Body (Dark Slate)
      ctx.fillStyle = "#090b12";
      ctx.beginPath();
      if (typeof ctx.roundRect === "function") {
        ctx.roundRect(2, 2, 60, 60, 14);
      } else {
        ctx.rect(2, 2, 60, 60);
      }
      ctx.fill();

      // Outer bezel border
      ctx.strokeStyle = "#1e293b";
      ctx.lineWidth = 1.8;
      ctx.stroke();

      // 2. Terminal Title Header Bar
      ctx.fillStyle = "#121826";
      ctx.beginPath();
      if (typeof ctx.roundRect === "function") {
        ctx.roundRect(2, 2, 60, 15, [14, 14, 0, 0]);
      } else {
        ctx.rect(2, 2, 60, 15);
      }
      ctx.fill();

      // Header divider line
      ctx.strokeStyle = "#1e293b";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(2, 17);
      ctx.lineTo(62, 17);
      ctx.stroke();

      // 3. Traffic Light Controls (🔴 🟡 🟢)
      // Red
      ctx.fillStyle = "#ef4444";
      ctx.beginPath();
      ctx.arc(9.5, 9.5, 2.4, 0, Math.PI * 2);
      ctx.fill();

      // Yellow / Amber
      ctx.fillStyle = "#f59e0b";
      ctx.beginPath();
      ctx.arc(16.5, 9.5, 2.4, 0, Math.PI * 2);
      ctx.fill();

      // Green (Live Status Pulse)
      const greenPulse = (Math.sin(t / 400) + 1) / 2; // subtle breathing
      ctx.fillStyle = `rgba(16, 185, 129, ${0.7 + greenPulse * 0.3})`;
      ctx.beginPath();
      ctx.arc(23.5, 9.5, 2.4, 0, Math.PI * 2);
      ctx.fill();

      // 4. Command Prompt '>' (Electric Cyan)
      ctx.font = "900 21px -apple-system, BlinkMacSystemFont, 'Outfit', 'Syne', monospace, sans-serif";
      ctx.fillStyle = "#38bdf8";
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      ctx.fillText(">", 7.5, 41);

      // 5. Center Typography 'G' (Crisp High-Contrast White)
      ctx.font = "900 28px -apple-system, BlinkMacSystemFont, 'Outfit', 'Syne', sans-serif";
      ctx.fillStyle = "#ffffff";
      ctx.fillText("G", 23.5, 41.5);

      // 6. Terminal Cursor '_' (Blinks at natural 530ms terminal rate)
      const cursorOn = Math.floor(t / 520) % 2 === 0;
      if (cursorOn) {
        ctx.fillStyle = "#10b981";
        ctx.beginPath();
        if (typeof ctx.roundRect === "function") {
          ctx.roundRect(46.5, 40, 10, 4.5, 1.5);
        } else {
          ctx.rect(46.5, 40, 10, 4.5);
        }
        ctx.fill();
      }

      // Update favicon link
      link.href = canvas.toDataURL("image/png");
    };

    if (prefersReducedMotion) {
      renderFrame(0);
      return;
    }

    const loop = (currentTime) => {
      animFrameId = requestAnimationFrame(loop);

      if (isHidden) return;

      const elapsed = currentTime - lastTime;
      if (elapsed > targetFpsInterval) {
        lastTime = currentTime - (elapsed % targetFpsInterval);
        renderFrame(currentTime);
      }
    };

    animFrameId = requestAnimationFrame(loop);

    const handleVisibilityChange = () => {
      isHidden = document.hidden;
      if (!isHidden) {
        lastTime = performance.now();
        renderFrame(lastTime);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      if (animFrameId) cancelAnimationFrame(animFrameId);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);
}

export default useAnimatedFavicon;
