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
      <ul className={`scroller__inner text-sm`}>
        <li className={`flex items-center gap-2`}>
          <Linkedin className="size-4" /> Linkedin
        </li>
        <li className={`flex items-center gap-2`}>
          <Facebook className="size-4" /> Facebook
        </li>
        <li className={`flex items-center gap-2`}>
          <Github className="size-4" /> Github
        </li>
        <li className={`flex items-center gap-2`}>
          <Instagram className="size-4" /> Instagram
        </li>
        <li className={`flex items-center gap-2`}>
          <Youtube className="size-4" /> Youtube
        </li>
        <li className={`flex items-center gap-2`}>
          <Twitch className="size-4" /> Twitch
        </li>

        
        <li className={`flex items-center gap-2`}>
          <Linkedin className="size-4" /> Linkedin
        </li>
        <li className={`flex items-center gap-2`}>
          <Facebook className="size-4" /> Facebook
        </li>
        <li className={`flex items-center gap-2`}>
          <Github className="size-4" /> Github
        </li>
        <li className={`flex items-center gap-2`}>
          <Instagram className="size-4" /> Instagram
        </li>
        <li className={`flex items-center gap-2`}>
          <Youtube className="size-4" /> Youtube
        </li>
        <li className={`flex items-center gap-2`}>
          <Twitch className="size-4" /> Twitch
        </li>
      </ul>
    </div>
  );
}

export default InfiniteScroll;
