"use client";

import { useEffect,useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Page() {
    const card = useRef(null)
  useEffect(() => {
    const tl = gsap.timeline();

  
    tl.from(".title", {
      opacity: 0,
      duration: 0.6
    });

   
    tl.from(".text", {
      x: -50,     
      opacity: 0,   
      duration: 0.6
    });

    tl.from(".text1",{
        x:100,
        opacity:0,
        duration:0.5
    });

     tl.from(".text2",{
        x:-50,
        opacity:0,
        duration:0.5
    });

     tl.from(".text3",{
        x:100,
        opacity:0,
        duration:0.5
    })



  }, []);

  useEffect(() =>{
     gsap.from(card.current,{
        opacity:0,
        y:40,
        duration:0.6,
        ease:"power2.out"
    });
  },[]);

  useEffect(()=>{
   gsap.registerPlugin(ScrollTrigger);

     gsap.from(".box", {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".box",
        start: "top 80%",   
        end: "top 20%",     
        scrub: true,   
      }
    });
},[])

  return (
    <div style={{ padding: "40px" }}>
      <h1 className="title" style={{ fontSize: "28px", marginBottom: "10px" }}>
        Hello GSAP!
      </h1>

      <p className="text" style={{ fontSize: "18px", color: "#444" }}>
        This text slides in after the title.
      </p>
       <p className="text1" style={{ fontSize: "18px", color: "#444" }}>
        This text slides in after the title.
        </p>
          <p className="text2" style={{ fontSize: "18px", color: "#444" }}>
        This text slides in after the title.
        </p>
          <p className="text3" style={{ fontSize: "18px", color: "#444" }}>
        This text slides in after the title.
        </p>
        <div 
        ref={card}
        style={{
            width:"250px",
            padding:"20px",
            background:"blue",
            borderRadius:"10px",
            boxShadow:"0px 5px 20px rgba(0,0,0,0.1",
            fontSize:"20px",
            fontWeight:"500",
            color:"white"
        }}>cardcomponent</div>

        <div style={{ height: "150vh", padding: "40px" }}>
      

      <div
        className="box"
        style={{
          width: "150px",
          height: "150px",
          background: "tomato",
          marginTop: "300px",
          borderRadius: "10px",
        }}
      ></div>
    </div>
         
    </div>

   
  );
}
