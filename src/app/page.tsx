"use client";

import "./styles/global.css";
import "./home.css";
import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import Wave from "./scripts/Wave";
import { repo, repos } from "./endpoints/routes";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], weight: ["200", "300", "400"] });
export default function Home() {
  const [pageTheme, setPageTheme] = useState("default");
  const themes = ["default", "light", "dark"];
  const [animationIsPaused, setAnimationIsPaused] = useState(true);
  const [givenList, setGivenList] = useState([""]);
  const items_list01 = [
    "HTML Project",
    "React Project",
    "C++ Project",
    "Python Project",
    "Compiler",
    "Interpreter",
  ];
  const items_list02 = [
    "Item List 02",
    "Item List 02",
    "Item List 02",
    "Item List 02",
  ];
  const items_list03 = [
    "Item List 03",
    "Item List 03",
    "Item List 03",
    "Item List 03",
    "Item List 03",
    "Item List 03",
    "Item List 03",
    "Item List 03",
    "Item List 03",
    "Item List 03",
    "Item List 03",
    "Item List 03",
    "Item List 03",
  ];

  // effect hook for animations
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

  // effect hook for fecthingn repos list from github
  useEffect(() => {
    renderList(givenList);
  }, [givenList]);

  function renderList(givenList: string[]) {
    return (
      <>
        {givenList.map((item, i) => (
          <div
            key={i}
            id="item"
            className="item flex-row-reverse md:flex-row text-nowrap"
          >
            {item}
          </div>
        ))}
      </>
    );
  }

  return (
    <div
      id="app-page"
      className="absolute min-w-screen min-h-screen bg-[var(--light1)]"
    >
      <Wave isPaused={animationIsPaused} setIsPaused={setAnimationIsPaused} />

      {/* <div
        id="author-text"
        className="author-text absolute left-[22px] top-[8px] md:left-[55px] text-[1rem] z-3"
      >
        By Quinn Bruckmann
      </div> */}

      <div
        id="container-block"
        className="relative m-4 p-2 bg-[var(--light2)] h-[95vh] "
      >
        <div
          id="body-borders"
          className="body-borders absolute border-1 z-0 inset-0 p-4 md:p-8 content-center"
        >
          <div
            id="body"
            className="body flex flex-row justify-center items-center w-auto h-full overflow-hidden "
          >
            <div
              id="body-left"
              className="body-left flex flex-col w-full h-full justify-between"
            >
              <div className="flex flex-col justify-start text-xl shrink overflow-scroll space-y-4 md:space-x-0">
                <button
                  className="flex category-options p-2"
                  onClick={() => setGivenList(items_list01)}
                >
                  Web Dev
                </button>
                <button
                  className="flex category-options p-2"
                  onClick={() => setGivenList(items_list02)}
                >
                  Software Dev
                </button>
                <button
                  className="flex category-options p-2"
                  onClick={() => setGivenList(items_list03)}
                >
                  About Me
                </button>
                <button className="flex category-options p-2">
                  This Website?
                </button>
              </div>
              <div className={`body-left-authorText shrink text-[2em]`}>
                Quinn Bruckmann
                <p className={`shrink text-[1rem]`}>
                  Junior Web & Software Developer
                </p>
              </div>
            </div>
            <div id="intro-card" className="intro-card absolute z-2 text-4xl">
              Quinn Bruckmann
            </div>
            <div
              id="body-right"
              className="body-right flex flex-col shrink justify-start md:justify-center w-full h-full text-2xl overflow-auto"
              style={{ fontFamily: "agency-bold" }}
            >
              {/* <div id="moving-tab" className="moving-tab"></div> */}
              {renderList(givenList)}
              {/* {items_list01.map((item, i) => (
                <div
                  key={i}
                  id="item"
                  className="item flex-row-reverse md:flex-row text-nowrap"
                >
                  {item}
                </div>
              ))} */}
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
