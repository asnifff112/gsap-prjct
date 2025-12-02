"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function Page() {
  useEffect(() => {
    gsap.fromTo(
      ".box",
      { opacity: 0, y: 100 },  
      { duration: 1, opacity: 1, y: 0, ease: "power2.out" }   
    );
  }, []);

  useEffect(()=>{
    gsap.fromTo(
        ".boxx",
        {opacity:0,x:200},
        {duration:2,opacity:1,x:0,ease:"power2.out"}
    );
  },[])

  return (
    <div>
     <div 
        className="box"
        style={{
        width: "150px",
        height: "150px",
        background: "tomato",
        marginTop: "100px",
        borderRadius: "10px"
      }}>
     </div>
      <div 
        className="boxx"
        style={{
        width: "150px",
        height: "150px",
        background: "tomato",
        marginTop: "100px",
        borderRadius: "10px"
      }}>
     </div>
     

    </div>
  );
}
