"use client";

import React, { useEffect } from "react";
import "./logo-section.css";

function LogoSection() {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    const addAnimation = () => {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");
      });
    };

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }, []);

  return (
    <div className="scroller">
      <ul className={`scroller__inner`}>
        {Array.from({ length: 10 }).map((item, index) => (
          <li className={`text-nowrap`}>Logo {index + 1}</li>
        ))}
        {Array.from({ length: 10 }).map((item, index) => (
          <li className={`text-nowrap`}>Logo {index + 1}</li>
        ))}
      </ul>
    </div>
  );
}

export default LogoSection;
