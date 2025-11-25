"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// Register the React plugin (only needed once, usually in layout or _app)
if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export default function AnimatedButton() {
  const btnRef = useRef<HTMLButtonElement>(null);

  // Modern GSAP + React way (safe, auto-cleanup, no manual event listeners)
  useGSAP(() => {
    const btn = btnRef.current;
    if (!btn) return;

    // Create reusable timeline for better performance & control
    const tl = gsap.timeline({ paused: true });
    tl.to(btn, {
      scale: 1.1,
      duration: 0.4,
      ease: "elastic.out(1.2, 0.5)", // bouncy & premium feel
    });

    const handleEnter = () => tl.play();
    const handleLeave = () => tl.reverse();

    btn.addEventListener("mouseenter", handleEnter);
    btn.addEventListener("mouseleave", handleLeave);

    // Cleanup on unmount
    return () => {
      btn.removeEventListener("mouseenter", handleEnter);
      btn.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <button
      ref={btnRef}
      className="relative px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-2xl text-white font-semibold text-lg shadow-lg hover:shadow-purple-500/50 transition-all duration-300 overflow-hidden group"
    >
      {/* Optional: subtle shine effect on hover */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />

      <span className="relative z-10">Hover Me</span>
    </button>
  );
}