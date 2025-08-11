import { useEffect, useRef } from "react";

export default function Wave() {
  const canvasRef = useRef(null);
  const bgCanvasRef = useRef(null);

  useEffect(() => {
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

    // animation part
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

          let color = `hsl(${((time - distance / 2) * 180) / 20}, 60%, 50%)`;
          $.globalCompositeOperation = "destination-over";
          // let color = `hsl(212 57.3% 41.8%)`;
          $.fillStyle = color;
          $.shadowBlur = 8;
          $.shadowColor = color;
          $.fillRect(
            -size / 2 + opts.size * square.x,
            -size / 2 + opts.size * square.y,
            size,
            size
          );

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
      />
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
          // display: "none",
          // background: "#222",
          pointerEvents: "none",
        }}
      />
    </>
  );
}
