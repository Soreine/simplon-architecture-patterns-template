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

export {
  prepareCanvas,
  drawCircle,
  drawSquare,
  onClick,
  MAGENTA,
  YELLOW,
  CYAN,
  BLACK
};
