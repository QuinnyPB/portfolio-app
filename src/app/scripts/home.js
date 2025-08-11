function introSequence(canvas) {
  // sets up variables
  let context = canvas.getContext("2d"),
    w = (canvas.width = window.innerWidth),
    h = (canvas.height = window.innerHeight),
    opts = {
      grid: 19,
      speed: Math.PI / 180,
      size: 40,
      color: "white",
      hgc: "#222",
    },
    time = 0,
    arr = [],
    getDistance = function (p1, p2) {
      let a = p1.x - p2.x,
        b = p1.y - p2.y;
      return Math.sqrt(a * a, b * b);
    },
    { sin, sqrt, random, cos } = Math;

  // sets up the hexagonal grid by offsetting some by 0.5
  function setup() {
    for (let y = 0, a = 0; y < opts.grid; y++, a++) {
      for (let x = 0; x < opts.grid - (a % 2 == 0 ? 0 : 1); x++) {
        arr.push({ x: a % 2 == 0 ? x : x + 0.5, y });
      }
    }
    loop();
  }

  // the wave effect applied onto grid
  function loop() {
    context.fillStyle = opts.hgc;
    context.fillRect(0, 0, w, h);
    time += opts.speed;
    let center = { x: opts.grid / 2 - 0.5, y: opts.grid / 2 - 0.5 };
    let drawSquare = function (context, square, distance) {
      let size = sin(time - distance / 3) * opts.size;
      context.save();
      context.translate(
        w / 2 - (opts.grid * opts.size) / 2,
        h / 2 - (opts.grid * opts.size) / 2 + opts.size / 2
      );
      let color = `hsl(${((time - distance / 2) * 180) / 20}, 60%, 50%)`;
      context.fillStyle = color;
      context.shadowBlur = 10;
      context.shadowColor = color;
      context.fillRect(
        -size / 2 + opts.size * square.x,
        -size / 2 + opts.size * square.y,
        size,
        size
      );
      context.restore();
    };
    arr.forEach((square) => {
      let distance = getDistance(square, center);
      drawSquare(context, square, distance);
    });

    requestAnimationFrame(loop);
  }
  setup();
}
