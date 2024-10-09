"use client";

import React, { useEffect } from "react";
import "./infinite-scroll.css";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitch,
  Youtube,
} from "lucide-react";

function InfiniteScroll() {
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
    <div className="scroller text-background">
      <ul className={`scroller__inner`}>
        <li className={`flex items-center gap-2`}>
          <Linkedin /> Linkedin
        </li>
        <li className={`flex items-center gap-2`}>
          <Facebook /> Facebook
        </li>
        <li className={`flex items-center gap-2`}>
          <Github /> Github
        </li>
        <li className={`flex items-center gap-2`}>
          <Instagram /> Instagram
        </li>
        <li className={`flex items-center gap-2`}>
          <Youtube /> Youtube
        </li>
        <li className={`flex items-center gap-2`}>
          <Twitch /> Twitch
        </li>

        <li className={`flex items-center gap-2`}>
          <Linkedin /> Linkedin
        </li>
        <li className={`flex items-center gap-2`}>
          <Facebook /> Facebook
        </li>
        <li className={`flex items-center gap-2`}>
          <Github /> Github
        </li>
        <li className={`flex items-center gap-2`}>
          <Instagram /> Instagram
        </li>
        <li className={`flex items-center gap-2`}>
          <Youtube /> Youtube
        </li>
        <li className={`flex items-center gap-2`}>
          <Twitch /> Twitch
        </li>
      </ul>
    </div>
  );
}

export default InfiniteScroll;
