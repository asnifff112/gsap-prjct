"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function Page() {
  let tl: gsap.core.Timeline;

  useEffect(() => {
    tl = gsap.timeline();

    tl.to(".box", { x: 400, duration: 1 })
      .to(".box", { y: 300, duration: 1 })
      .to(".box", { rotate: 120, duration: 1 });
  }, []);

  const handlePause = () => tl.pause();
  const handleResume = () => tl.resume();
  const handleReverse = () => tl.reverse();
  const handleRestart = () => tl.restart();

 

  return (
    <div style={{ padding: "20px" }}>
      <div
        className="box"
        style={{
          width: "80px",
          height: "80px",
          background: "tomato",
          borderRadius: "8px",
          
        }}
      ></div>

      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleResume}>Resume</button>
        <button onClick={handleReverse}>Reverse</button>
        <button onClick={handleRestart}>Restart</button>
        
       
      </div>
    </div>
  );
}
