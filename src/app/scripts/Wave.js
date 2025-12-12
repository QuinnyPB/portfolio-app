"use client";

import { useEffect, useRef, useState } from "react";
// import "../styles/Wave.scss";

export default function Wave({ isPaused, setIsPaused }) {
  const canvasRef = useRef(null);
  const bgCanvasRef = useRef(null);
  let hasPlayed = useRef(false);

  // function IntroAnimation() {}

  useEffect(() => {
    if (isPaused) {
      console.log("animation shouldn't run");
      return;
    }
    hasPlayed.current = true;
    console.log("animation should run");

    const c = canvasRef.current;
    const $ = c.getContext("2d");
    const bg_c = bgCanvasRef.current;
    const bg_$ = bg_c.getContext("2d");

    let w = (c.width = bg_c.width = window.innerWidth);
    let h = (c.height = bg_c.height = window.innerHeight);

    const opts = {
      grid: 27,
      speed: Math.PI / 180,
      size: 90,
      color: "white",
      bgc: "#222",
    };

    let time = 0;
    const arr = [];
    const { sin, sqrt, cos } = Math;

    const getDistance = (p1, p2) => {
      const a = p1.x - p2.x;
      const b = p1.y - p2.y;
      return Math.sqrt(a * a + b * b);
    };

    function setup() {
      for (let y = 0, a = 0; y < opts.grid; y++, a++) {
        for (let x = 0; x < opts.grid - (a % 2 === 0 ? 0 : 1); x++) {
          arr.push({ x: a % 2 === 0 ? x : x + 0.5, y });
        }
      }
      loop();
    }

    const maxTime = 2 * Math.PI;
    // $.fillStyle = "#222";
    // $.fillRect(0, 0, c.width, c.height);
    bg_$.fillStyle = "#222";
    bg_$.fillRect(0, 0, w, h);

    // is necessary here to remove unwanted animation flash
    document.getElementById("bg-layer").style.background = "none";
    document.getElementById("first-page").style.display = "none";

    // main animation sequence loop
    function loop() {
      $.clearRect(0, 0, c.width, c.height);

      time += opts.speed;

      const center = { x: opts.grid / 2 - 0.05, y: opts.grid / 2 - 0.5 };

      arr.forEach((square) => {
        const distance = getDistance(square, center);
        const wave = sin(time - distance / 3);
        const size = wave * opts.size;

        // const alpha = Math.min(1, size / opts.size);
        // $.globalAlpha = alpha;

        // prevents negative values in sin() from being drawn
        if (size <= 0) return;
        if (size > 0.5) {
          $.save();
          $.translate(
            w / 2 - (opts.grid * opts.size) / 2,
            h / 2 - (opts.grid * opts.size) / 2 + opts.size / 2
          );

          // let color = `hsl(${((time - distance * 5) * 180) / 20}, 60%, 50%)`;
          // let color = `#222`;
          $.globalCompositeOperation = "destination-over";
          // let color = `hsl(212 57.3% 41.8%)`;
          // $.fillStyle = color;
          // $.shadowBlur = 8;
          // $.shadowColor = color;
          // $.fillRect(
          //   -size / 2 + opts.size * square.x,
          //   -size / 2 + opts.size * square.y,
          //   size,
          //   size
          // );

          // Background canvas erasure
          bg_$.save(); // Also needed to isolate transformation state
          bg_$.translate(
            w / 2 - (opts.grid * opts.size) / 2,
            h / 2 - (opts.grid * opts.size) / 2 + opts.size / 2
          );

          // This will "erase" the area by setting it fully transparent
          bg_$.globalCompositeOperation = "destination-out";
          bg_$.fillStyle = "rgba(0, 0, 0, 1)";
          bg_$.shadowBlur = 8;
          bg_$.shadowColor = "rgba(0, 0, 0, 1)";
          bg_$.fillRect(
            -size / 2 + opts.size * square.x,
            -size / 2 + opts.size * square.y,
            size,
            size
          );

          $.restore();
          bg_$.restore();
          // $.globalAlpha = 1;
        }
      });

      // determines when to stop animation
      if (time < maxTime) {
        requestAnimationFrame(loop);
      }
      // requestAnimationFrame(loop);
    }

    setup();

    // optional: handle window resize
    const handleResize = () => {
      w = c.width = bg_c.width = window.innerWidth;
      h = c.height = bg_c.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused]);

  useEffect(() => {
    // Handle user click to start animation and exit first page
    const firstPage = document.getElementById("first-page");
    document.addEventListener("DOMContentLoaded", function () {
      firstPage.addEventListener("click", function () {
        // allows animation to start
        setIsPaused(false);
      });
    });
  });

  let clicked = false;
  const playSound = () => {
    // stops spamming of sound upon multi-clicks
    if (clicked == true) {
      return;
    }
    clicked = true;

    const audio = new Audio("/sounds/synth01-edited.mp3");
    document.getElementById("first-page").style.animationName = "fadeOut";
    setTimeout(() => {
      audio.play();
      setIsPaused(false);
    }, 1550);
  };

  // delete canvas
  useEffect(() => {
    setTimeout(() => {
      let canvas01 = document.getElementById("animation-layer");
      let canvas02 = document.getElementById("bg-layer");
      canvas01.parentNode.removeChild(canvas01);
      canvas02.parentNode.removeChild(canvas02);
    }, 5000);
  }, []);

  return (
    <>
      <canvas
        id="animation-layer"
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 2,
          width: "100vw",
          height: "100vh",
          display: "block",
          background: "transparent",
          pointerEvents: "none",
        }}
        className="intro-canvas"
      ></canvas>
      <canvas
        id="bg-layer"
        ref={bgCanvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
          width: "100vw",
          height: "100vh",
          background: "#222",
          pointerEvents: "none",
        }}
      ></canvas>

      {/* bootup window + audio */}
      <div
        id="first-page"
        className="absolute text-xl text-orange-300 bg-[#222] w-full h-full z-51 pt-4 pl-4"
        style={{}}
        onClick={playSound}
      >
        {/* Text is found in the Wave.scss file */}
      </div>
    </>
  );
}
