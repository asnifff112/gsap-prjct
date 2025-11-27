"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function Page() {
  useEffect(() => {
    const tl = gsap.timeline({
        
        
      ease: "power2.out",
    });

    tl.to(".box", {
      x: 400,
      duration: 1,
      
    });
    tl.to(".boxx",{
        x:400,
        duration:1,
        repeat:-1,
        yoyo:true,

    });
    tl.to(".boxxx",{
        x:400,
        duration:1,
        repeat:-1,
        yoyo:true,
        stagger:2
    })
  }, []);

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
      <div className="boxx"
      style={{
        width:"100px",
        height:"100px",
        background:"blue",
        borderRadius:"10px"

      }}
      ></div>
        <div className="boxxx"
      style={{
        width:"100px",
        height:"100px",
        background:"blue",
        borderRadius:"10px"

      }}
      ></div>
    </div>
  );
}
