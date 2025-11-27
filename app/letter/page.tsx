"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Page() {
  const letterRef = useRef<HTMLHeadingElement | null>(null);
  const wordRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    
    const letterText = letterRef.current;
    if (letterText) {
      const letters = letterText.innerText.split("");

      letterText.innerHTML = letters
        .map((char) =>
          `<span class="char">${char === " " ? "&nbsp;" : char}</span>`
        )
        .join("");

      gsap.from(".char", {
        y: 40,
        opacity: 0,
        stagger: 0.05,
        ease: "power2.out",
        duration: 0.6,
      });
    }

   
    const wordText = wordRef.current;
    if (wordText) {
      const words = wordText.innerText.split(" ");

      wordText.innerHTML = words
        .map((word) => `<span class="word">${word}</span> `)
        .join("");

      gsap.from(".word", {
        x: -30,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out",
        duration: 0.6,
        delay: 0.5,
      });
    }
  }, []);

  return (
    <div style={{ padding: 50 }}>
      
      <h1 ref={letterRef}>blaaaaaaaaaaaaaaaaaaaahhhhhhhhhhhhhhhhhhhh</h1>

   
      <h2 ref={wordRef} style={{ marginTop: 40 }}>
        bro by bro then bro anthor bro next bro
      </h2>
    </div>
  );
}
