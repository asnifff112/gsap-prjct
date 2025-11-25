"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function GsapUseEffectExample() {
  const box = useRef(null);
  const box1 = useRef(null);
 

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    tl.from(box.current, { opacity: 1, y: -50 })
      .from(box1.current, { opacity: 1, y: 50 }, )
     
  }, []);

  return (
    <div >
    <div
        ref={box}
        style={{
          width: "120px",
          height: "120px",
          background: "blue",
        }}
      ></div>
        <div
        ref={box1}
        style={{
          width: "120px",
          height: "120px",
          background: "blue",
        }}
      ></div>
    </div>
  );
}
