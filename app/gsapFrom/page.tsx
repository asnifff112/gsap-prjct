"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Page() {

    const boxx = useRef(null);

  useEffect(() => {
    gsap.from(".title", {
      duration: 1,
      opacity: 0,
      y: 50,
    });
  }, []);

  useEffect(() =>{
    gsap.from(".word",{
        duration:1,
        opacity:0,
        y:100,
    })
  },[])

  useEffect(() =>{
    gsap.from(boxx.current,{x:100,duration:1})
  },[])

  return (
    <div>
        <h1 className="title">Hello GSAP</h1>
        <h1 className="word">GoodMorning</h1>
        <div ref={boxx}
        style={{
        width:"100px",
        height:"100px",
        background:"red"
        }}
        ></div>
    </div>
    
  );
}
