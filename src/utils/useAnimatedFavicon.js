import { useEffect } from "react";

/**
 * useAnimatedFavicon
 * Renders an energetic, futuristic animated favicon to the browser tab in real time.
 * - Deep squircle badge with orbiting emerald/cyan particle beam
 * - Sharp high-contrast white "G" typography
 * - Real-time pulsing emerald telemetry status dot
 * - Battery-friendly: Pauses when tab is hidden, respects prefers-reduced-motion
 */
export function useAnimatedFavicon() {
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Locate or create the dynamic favicon link
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

    // Offscreen rendering canvas
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrameId = null;
    let lastTime = 0;
    const targetFpsInterval = 1000 / 22; // Smooth 22 FPS for lightweight browser performance
    let isHidden = document.hidden;

    const renderFrame = (t) => {
      ctx.clearRect(0, 0, 64, 64);

      // 1. Dark squircle badge
      ctx.fillStyle = "#08080c";
      ctx.beginPath();
      if (typeof ctx.roundRect === "function") {
        ctx.roundRect(2.5, 2.5, 59, 59, 14);
      } else {
        ctx.rect(2.5, 2.5, 59, 59);
      }
      ctx.fill();

      // Outer bezel border
      ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // 2. Rotating orbital arc (Emerald -> Electric Cyan -> Transparent)
      const angle = (t / 1000) * (Math.PI * 1.4);
      ctx.save();
      ctx.translate(32, 32);
      ctx.rotate(angle);

      const grad = ctx.createLinearGradient(-24, -24, 24, 24);
      grad.addColorStop(0, "#10b981");
      grad.addColorStop(0.45, "#38bdf8");
      grad.addColorStop(1, "rgba(56, 189, 248, 0)");

      ctx.beginPath();
      ctx.arc(0, 0, 22.5, 0, Math.PI * 1.25);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 3;
      ctx.lineCap = "round";
      ctx.stroke();
      ctx.restore();

      // 3. Bold geometric letter "G"
      ctx.fillStyle = "#ffffff";
      ctx.font = "900 32px -apple-system, BlinkMacSystemFont, 'Outfit', 'Syne', sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("G", 32, 33.5);

      // 4. Live pulsing telemetry beacon (Top-Right)
      const pulse = (Math.sin(t / 220) + 1) / 2; // 0 to 1
      // Expanding ripple ring
      ctx.beginPath();
      ctx.arc(48.5, 15.5, 2.5 + pulse * 4, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(16, 185, 129, ${0.8 - pulse * 0.75})`;
      ctx.lineWidth = 1.2;
      ctx.stroke();

      // Core glowing dot
      ctx.beginPath();
      ctx.arc(48.5, 15.5, 2.6, 0, Math.PI * 2);
      ctx.fillStyle = "#10b981";
      ctx.fill();

      // Update the favicon link with data URL
      link.href = canvas.toDataURL("image/png");
    };

    // Draw single frame if reduced motion is requested
    if (prefersReducedMotion) {
      renderFrame(0);
      return;
    }

    const loop = (currentTime) => {
      animFrameId = requestAnimationFrame(loop);

      if (isHidden) return; // Pause when tab is not visible to preserve 0% CPU

      const elapsed = currentTime - lastTime;
      if (elapsed > targetFpsInterval) {
        lastTime = currentTime - (elapsed % targetFpsInterval);
        renderFrame(currentTime);
      }
    };

    animFrameId = requestAnimationFrame(loop);

    // Visibility change handler to stop/resume when user switches tabs
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
