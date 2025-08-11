"use client";

import "./styles/global.css";
import "./home.css";
import { useEffect, useRef, useState } from "react";
import Wave from "./components/Wave";

export default function Home() {
  const [pageTheme, setPageTheme] = useState("default");
  const themes = ["default", "light", "dark"];

  const canvasRef = useRef(null);

  return (
    <div
      id="app-page"
      className="absolute h-[100%] min-w-screen bg-[var(--light1)]"
    >
      {/* static video feed intro animation */}
      {/* <canvas className="pixelated-intro" ref={canvasRef}></canvas> */}
      <Wave />
      {/* <div className="video-feed"></div>
      <div className="video-grid-container">
        <div className="video-grid">
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
        </div>
      </div> */}
      {/* <div className="video-feed-container"></div> */}

      <div className="author-text absolute top-[8px] left-[55px] text-[1rem]">
        Quinn Bruckmann
      </div>

      <div
        id="container-block"
        className="relative m-12 mt-8 p-8 bg-[var(--light2)] "
      >
        {/* <div id="" className="body-x-borders"></div>
        <div id="" className="body-y-borders"></div> */}
        <div className="body-borders"></div>
        <div id="body" className="body flex justify-center items-center">
          <div
            id="body-options"
            className="body-left flex flex-col w-full justify-between"
          >
            <div className="">
              <div>Web Dev</div>
              <div>Software Dev</div>
              <div>Systems Dev</div>
              <div>Projects</div>
            </div>
            <div>Quinn Bruckmann</div>
          </div>
          <div className="intro-card text-6xl">Quinn Bruckmann</div>
          <div
            id="body-projects"
            className="body-right flex flex-col items-end w-full text-8xl"
            style={{ fontFamily: "agency-bold" }}
          >
            <div className="flex ">Item</div>
            <div className="flex ">Item</div>
            <div className="flex ">Item</div>
            <div className="flex ">Item</div>
            <div className="flex ">Item</div>
            <div className="flex ">Item</div>
          </div>
        </div>
      </div>
    </div>
  );
}
