/*

This is an utility library for the exercise. No need to understand the detail of implementation, only the exported functions signatures

*/

const MAGENTA = "rgba(255, 0, 255, 0.5)";
const YELLOW = "rgba(255, 255, 0, 0.5)";
const CYAN = "rgba(0, 255, 255, 0.5)";
const BLACK = "rgba(0, 0, 0, 0.5)";

let canvas = null;
let ctx = null;

function initializeCanvas() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  // So that colors blend like real paint and not RGB values.
  ctx.globalCompositeOperation = "darken";
}

function drawSquare(x, y, size, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, size, size);
}

function drawCircle(x, y, radius, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fill();
}

function drawStar(cx, cy, size, color) {
  const spikes = 5;
  const outerRadius = size;
  const innerRadius = outerRadius / 2;
  let rot = (Math.PI / 2) * 3;
  let x = cx;
  let y = cy;
  const step = Math.PI / spikes;

  ctx.beginPath();
  ctx.moveTo(cx, cy - outerRadius);

  for (let i = 0; i < spikes; i += 1) {
    x = cx + Math.cos(rot) * outerRadius;
    y = cy + Math.sin(rot) * outerRadius;
    ctx.lineTo(x, y);
    rot += step;

    x = cx + Math.cos(rot) * innerRadius;
    y = cy + Math.sin(rot) * innerRadius;
    ctx.lineTo(x, y);
    rot += step;
  }
  ctx.lineTo(cx, cy - outerRadius);
  ctx.closePath();
  ctx.lineWidth = 5;
  ctx.strokeStyle = color;
  ctx.stroke();
  ctx.fillStyle = color;
  ctx.fill();

  console.log("draw Star");
}

function prepareCanvas() {
  if (!canvas) {
    initializeCanvas();
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function onClick(callback) {
  canvas.addEventListener("click", event => {
    const offset = canvas.getBoundingClientRect();
    const x = event.clientX - offset.x;
    const y = event.clientY - offset.y;
    callback(x, y);
  });
}

function onDraw(callback) {
  let drawing = false;

  function findXY(event) {
    const offset = canvas.getBoundingClientRect();
    const x = event.clientX - offset.x;
    const y = event.clientY - offset.y;
    return [x, y];
  }
  canvas.addEventListener("mousedown", event => {
    drawing = true;
    const [x, y] = findXY(event);
    callback(x, y);
  });

  canvas.addEventListener("mousemove", event => {
    if (drawing) {
      const [x, y] = findXY(event);
      callback(x, y);
    }
  });

  canvas.addEventListener("mouseup", () => {
    drawing = false;
  });

  canvas.addEventListener("mouseleave", () => {
    drawing = false;
  });
}

export {
  prepareCanvas,
  drawCircle,
  drawSquare,
  drawStar,
  onClick,
  onDraw,
  MAGENTA,
  YELLOW,
  CYAN,
  BLACK
};
