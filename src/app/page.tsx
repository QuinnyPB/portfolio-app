"use client";

import "./styles/global.css";
import "./home.css";
import { useState } from "react";

export default function Home() {
  const [pageTheme, setPageTheme] = useState("default");
  const themes = ["default", "light", "dark"];

  return (
    <div
      id="app-page"
      className="absolute min-h-screen min-w-screen bg-[var(--light1)]"
    >
      <div
        id="container-block"
        className="relative max-w-[95vw] p-8 w-auto m-auto bg-[var(--light2)]"
      >
        {/* <div id="" className="body-x-borders"></div>
        <div id="" className="body-y-borders"></div> */}
        <div className="body-borders"></div>
        <div id="body" className="body flex justify-center items-center">
          <div
            id="body-options"
            className="body-left flex flex-col w-full justify-between"
          >
            <div>
              <div>Web</div>
              <div>Software</div>
              <div>Systems</div>
              <div>projects</div>
            </div>
            <div>Quinn Bruckmann</div>
          </div>
          <div
            id="body-projects"
            className="body-right flex flex-col items-end w-full text-8xl"
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
