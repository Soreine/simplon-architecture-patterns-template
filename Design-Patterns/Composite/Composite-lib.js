/*

This is an utility library for the exercise. No need to understand the detail of implementation, only the functions signatures

*/

const RED = "rgba(255, 0, 0, 0.5)";
const GREEN = "rgba(0, 255, 0, 0.5)";
const BLUE = "rgba(0, 0, 255, 0.5)";
const GRAY = "rgba(0, 0, 0, 0.5)";

let canvas = null;
let ctx = null;

function initializeCanvas() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
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

/**
 * Set an action to do everytime the user click on the page
 *
 * @param callback Function that receives the X and Y coordinates of the click
 */
function onClick(callback) {
  document.addEventListener("click", event => {
    callback(event.clientX, event.clientY);
  });
}

export {
  prepareCanvas,
  drawCircle,
  drawSquare,
  onClick,
  RED,
  GREEN,
  BLUE,
  GRAY
};
