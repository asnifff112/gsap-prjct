"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  
  const heroRef = useRef<HTMLDivElement>(null);
  const box1 = useRef<HTMLDivElement>(null);
  const box2 = useRef<HTMLDivElement>(null);
  const box3 = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1, ease: "power2.out" },
    });

    tl.from(titleRef.current, { opacity: 0, y: -40 })
      .from(subtitleRef.current, { opacity: 0, y: 20 }, "-=0.5")
      .from(buttonRef.current, { opacity: 0, scale: 0.5 });
  }, []);

 
  useEffect(() => {
    const ctx = gsap.context(() => {
     
      gsap.from(heroRef.current, {
        opacity: 0,
        y: -40,
        duration: 1,
        ease: "power2.out",
      });

      
      [box1, box2, box3].forEach((ref) => {
        const el = ref.current;
        if (!el) return;

        el.addEventListener("mouseenter", () => {
          gsap.to(el, { scale: 1.1, duration: 0.3 });
        });

        el.addEventListener("mouseleave", () => {
          gsap.to(el, { scale: 1, duration: 0.3 });
        });
      });

    
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <section
        ref={heroRef}
        className="h-screen bg-black text-white flex flex-col justify-center items-center"
      >
        <h1 ref={titleRef} className="text-5xl font-bold">
          Welcome to GSAP Timeline
        </h1>

        <p ref={subtitleRef} className="text-lg text-gray-300 mt-4">
          Smooth, sequenced animations made easy!
        </p>

        <button
          ref={buttonRef}
          className="mt-6 bg-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
        >
          Get Started
        </button>

        <p className="mt-8 text-lg">hello haaii</p>
      </section>

      <section className="py-20 bg-gray-100 flex justify-center gap-8 flex-wrap">
        <div
          ref={box1}
          className="w-64 h-64 bg-blue-500 text-white flex justify-center items-center text-2xl font-semibold rounded-2xl cursor-pointer shadow-lg"
        >
          Box 1
        </div>
        <div
          ref={box2}
          className="w-64 h-64 bg-green-500 text-white flex justify-center items-center text-2xl font-semibold rounded-2xl cursor-pointer shadow-lg"
        >
          Box 2
        </div>
        <div
          ref={box3}
          className="w-64 h-64 bg-purple-500 text-white flex justify-center items-center text-2xl font-semibold rounded-2xl cursor-pointer shadow-lg"
        >
          Box 3
        </div>
      </section>


      <section
        ref={sectionRef}
        className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-50 to-white"
      >
        <h2 className="text-5xl font-bold text-gray-800">Scroll Section</h2>
        <p className="text-gray-600 mt-6 text-xl text-center max-w-2xl">
          nokku makkale nokku
        </p>
      </section>
    </div>
  );
}
