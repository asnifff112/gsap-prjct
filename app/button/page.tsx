"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function Page() {

  useEffect(() => {
    gsap.fromTo(
      ".btn",
      { scale: 1, opacity:3 },             
      { scale: 1.1, opacity: 0, duration: 3, repeat: 1, yoyo: true , ease:"bounce.in" } 
    );
  }, []);

  return (
    <button className="btn" style={{
      padding: "12px 25px",
      background: "blue",
      color: "white",
      border: "none",
      borderRadius: "8px",
      fontSize: "16px",
      cursor: "pointer"
    }}>
      Click Me
    </button>
  );
}
