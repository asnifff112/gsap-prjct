"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollMeetBoxes() {
  const leftBox = useRef(null);
  const rightBox = useRef(null);
  const left1box = useRef(null);
  const right1box = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      leftBox.current,
      { x: -300, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: leftBox.current,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      }
    );

   
    gsap.fromTo(
      rightBox.current,
      { x: 300, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: rightBox.current,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      }
    );
  }, []);

  useEffect(() =>{
    gsap.fromTo(
      left1box.current,
      {x:-600,opacity:0},
      {
        x:0,
        opacity:1,
        duration:1,
        ease:"power2.out",
        scrollTrigger:{
          trigger:left1box.current,
          start:'top 60%',
          end : "top 10%",
          scrub:true,
        }
      }
    );
    gsap.fromTo(
      right1box.current,
      {x:600,opacity:0},
      {
        x:0,
        opacity:1,
        duration:1,
        ease:"power2.out",
        scrollTrigger:{
          trigger:right1box.current,
          start:"top 60%",
          end:"top 10%",
          scrub:true,
        }
      }
    )
  })

  return (
    <div className="min-h-[200vh] bg-gray-900 flex flex-col items-center justify-center gap-20 p-20">

      <h1 className="text-white text-3xl font-bold mb-20">
        Scroll
      </h1>

      <div className="flex justify-between w-full max-w-4xl">

        <div
          ref={leftBox}
          className="w-40 h-40 bg-blue-500 rounded-xl"
        ></div>

        <div
          ref={rightBox}
          className="w-40 h-40 bg-pink-500 rounded-xl"
        ></div>

        <div ref={left1box}
        className="w-50 h-50 bg-gray-500 rounded-x1"></div>

        <div ref={right1box} 
        className="w-50 h-50 bg-yellow-500 rounded-x1"></div>

      </div>
    </div>
  );
}
