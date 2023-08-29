"use client";
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      // Cleanup function to destroy the Lenis instance
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <section className="sections">Section 1</section>
      <section className="sections">Section 2</section>
      <section className="sections">Section 3</section>
      <section className="sections">Section 4</section>
    </>
  );
}
