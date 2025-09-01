"use client";

import "./styles/global.css";
import "./home.css";
import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import Wave from "./scripts/Wave";
import { repo, repos } from "./endpoints/routes";

export default function Home() {
  const [pageTheme, setPageTheme] = useState("default");
  const themes = ["default", "light", "dark"];
  const [animationIsPaused, setAnimationIsPaused] = useState(true);
  const items_list = [
    "HTML Project",
    "React Project",
    "C++ Project",
    "Python Project",
    "Compiler",
    "Interpreter",
  ];

  useEffect(() => {
    const introCard = document.getElementById("intro-card");
    const authorText = document.getElementById("author-text");
    const bodyBorders = document.getElementById("body-borders");
    const bodyLeft = document.getElementById("body-left");
    const bodyRight = document.getElementById("body-right");

    if (animationIsPaused) {
      console.log("animation paused");
      introCard?.style.setProperty("animation-play-state", "paused");
      authorText?.style.setProperty("animation-play-state", "paused");
      bodyBorders?.style.setProperty("animation-play-state", "paused");
      bodyLeft?.style.setProperty("animation-play-state", "paused");
      bodyRight?.style.setProperty("animation-play-state", "paused");
    } else {
      console.log("animation playing");
      introCard?.style.setProperty("animation-play-state", "running");
      authorText?.style.setProperty("animation-play-state", "running");
      bodyBorders?.style.setProperty("animation-play-state", "running");
      bodyLeft?.style.setProperty("animation-play-state", "running");
      bodyRight?.style.setProperty("animation-play-state", "running");
    }
  }, [animationIsPaused]);

  return (
    <div
      id="app-page"
      className="absolute min-w-screen min-h-screen bg-[var(--light1)]"
    >
      <Wave isPaused={animationIsPaused} setIsPaused={setAnimationIsPaused} />

      <div
        id="author-text"
        className="author-text absolute left-[22px] top-[8px] md:left-[55px] text-[1rem]"
      >
        By Quinn Bruckmann
      </div>

      <div
        id="container-block"
        className="relative m-2 mb-0 p-2 mt-8 md:m-8 md:p-4 bg-[var(--light2)] h-[90vh] "
      >
        <div
          id="body-borders"
          className="body-borders absolute border-1 z-0 inset-0 p-4 md:p-8 content-center"
        >
          <div
            id="body"
            className="body flex flex-col sm:flex-row justify-center items-center w-auto h-full overflow-hidden "
          >
            <div
              id="body-left"
              className="body-left flex flex-col w-full h-full justify-between border-b-1 border-black"
            >
              <div className="flex flex-row md:flex-col justify-start m:text-[3vw] md:text-2xl shrink overflow-scroll space-x-6 md:space-x-0 lg:text-[2vw]">
                <div className="shrink text-nowrap">Web Dev</div>
                <div className="shrink text-nowrap">Software Dev</div>
                <div className="shrink text-nowrap">Systems Dev</div>
                <div className="shrink text-nowrap">Projects</div>
              </div>
              <div className="hidden sm:block shrink text-[2vw] bg-red-300">
                Quinn Bruckmann
              </div>
            </div>
            <div id="intro-card" className="intro-card absolute z-2 text-4xl">
              Quinn Bruckmann
            </div>
            <div
              id="body-right"
              className="body-right flex flex-col shrink justify-start md:justify-center w-full h-full text-2xl sm:text-[3vw] overflow-auto"
              style={{ fontFamily: "agency-bold" }}
            >
              {/* <div id="moving-tab" className="moving-tab"></div> */}
              {items_list.map((item, i) => (
                <div
                  key={i}
                  id="item"
                  className="item flex-row-reverse md:flex-row text-nowrap"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Script
        src="/scripts/MovingHighlightTab.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
