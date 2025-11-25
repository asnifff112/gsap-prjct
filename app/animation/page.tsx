"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function GsapUseEffectExample() {
  const box = useRef(null);
  const box1 = useRef(null);
 

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    tl.from(box.current, { opacity: 0, y: -40 })
      .from(box1.current, { opacity: 0, y: 20 }, )
     
  }, []);

  return (
    <div >
     
    </div>
  );
}
