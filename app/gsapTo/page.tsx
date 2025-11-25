"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Box() {
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);

  useEffect(() => {
    gsap.to(box1.current, { x: 100, duration: 1 });
    gsap.to(box2.current, { x: 150, duration: 1 });
    gsap.to(box3.current, { x: 200, duration: 1 });
    gsap.to(box4.current, { x: 250, duration: 1 ,opacity:1});
  

  }, []);

  useEffect(()=>{
      gsap.to(".btn", {
    duration: 0.3,
    scale: 1.1,
   repeat: 1,
   yoyo: true
});
  },[])

  return (
    <div >

      <div 
        ref={box1}
        style={{
          width: "100px",
          height: "100px",
          background: "red",
        }}
      ></div>

      <div
        ref={box2}
        style={{
          width: "120px",
          height: "120px",
          background: "blue",
        }}
      ></div>

      <div
        ref={box3}
        style={{
          width: "150px",
          height: "150px",
          background: "yellow",
        }}
      ></div>

      <div
        ref={box4}
        style={{
          width: "150px",
          height: "150px",
          background: "green",
        }}
      ></div>

      <button className="btn" style={{
        color:"blue",
        background:"yellow"
      }}>Click Me</button>
      


    </div>
  );
}
