"use client";

import { useEffect, useRef } from "react";

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let animationId: number;
    let width = window.innerWidth;
    let height = document.documentElement.scrollHeight;

    canvas.width = width;
    canvas.height = height;

    interface Star {
      x: number;
      y: number;
      size: number;
      opacity: number;
      twinkleSpeed: number;
      twinkleOffset: number;
    }

    interface ShootingStar {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;
    }

    // Generate stars
    const starCount = Math.floor((width * height) / 8000);
    const stars: Star[] = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.7 + 0.3,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinkleOffset: Math.random() * Math.PI * 2,
    }));

    // Shooting stars
    const shootingStars: ShootingStar[] = [];
    let lastShootingStarTime = 0;

    function spawnShootingStar(time: number) {
      if (time - lastShootingStarTime < 3000) return;
      if (Math.random() > 0.02) return;
      lastShootingStarTime = time;
      shootingStars.push({
        x: Math.random() * width * 0.8,
        y: Math.random() * height * 0.3,
        vx: 4 + Math.random() * 4,
        vy: 2 + Math.random() * 2,
        life: 0,
        maxLife: 40 + Math.random() * 30,
        size: 1.5 + Math.random(),
      });
    }

    function draw(time: number) {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Draw stars
      for (const star of stars) {
        const twinkle = prefersReducedMotion
          ? star.opacity
          : star.opacity *
            (0.5 +
              0.5 *
                Math.sin(time * star.twinkleSpeed + star.twinkleOffset));
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${twinkle})`;
        ctx.fill();

        // Some stars have a colored tint
        if (star.size > 1.5) {
          const colors = ["#00d4ff", "#ff6b35", "#ffd700", "#7b2ff7"];
          const color = colors[Math.floor(star.twinkleOffset) % colors.length];
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 0.6, 0, Math.PI * 2);
          ctx.fillStyle =
            color +
            Math.floor(twinkle * 40)
              .toString(16)
              .padStart(2, "0");
          ctx.fill();
        }
      }

      if (!prefersReducedMotion) {
        // Spawn & draw shooting stars
        spawnShootingStar(time);
        for (let i = shootingStars.length - 1; i >= 0; i--) {
          const s = shootingStars[i];
          s.x += s.vx;
          s.y += s.vy;
          s.life++;

          const progress = s.life / s.maxLife;
          const alpha = progress < 0.5 ? progress * 2 : (1 - progress) * 2;

          // Trail
          ctx.beginPath();
          ctx.moveTo(s.x, s.y);
          ctx.lineTo(s.x - s.vx * 8, s.y - s.vy * 8);
          ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.6})`;
          ctx.lineWidth = s.size;
          ctx.stroke();

          // Head
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.fill();

          if (s.life >= s.maxLife) shootingStars.splice(i, 1);
        }
      }

      animationId = requestAnimationFrame(draw);
    }

    animationId = requestAnimationFrame(draw);

    function handleResize() {
      if (!canvas) return;
      width = window.innerWidth;
      height = document.documentElement.scrollHeight;
      canvas.width = width;
      canvas.height = height;
    }

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
