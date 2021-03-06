/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */

import {
  /**
   * prepareCanvas()
   *
   * Prepare a white canvas. Call this before you draw things.
   */
  prepareCanvas,

  /**
   * drawCircle(x, y, radius, color)
   *
   * Draw a circle at the coordinate x and y, with a given radius and color
   */
  drawCircle,

  /**
   * drawSquare(x, y, size, color)
   *
   * Draw a circle at the coordinate x and y, with a given size and color
   */
  drawSquare,
  drawStar,
  onDraw,
  /**
   * onClick(callback)
   *
   * Setup an action to do everytime the user click on the canvas
   *
   * @param callback Function that receives the X and Y coordinates of the click
   */
  onClick,

  // Some color values to use as argument for drawCircle and drawSquare
  MAGENTA,
  YELLOW,
  CYAN,
  BLACK
} from "./Strategy-lib";

class DrawingArea {
  constructor(pencil = new CirclePencil(), size = 4, color = MAGENTA) {
    this.pencil = pencil;
    this.size = size;
    this.color = color;
  }

  setPencil(pencil) {
    this.pencil = pencil;
  }

  setSize(size) {
    this.size = size;
  }

  setColor(color) {
    this.color = color;
  }

  // Draw a circle at the given coordinate
  // using the current size and color, and shape
  draw(x, y) {
    this.pencil.draw(x, y, this.size, this.color);
  }
}

class SquarePencil {
  draw(x, y, size, color) {
    drawSquare(x - size / 2, y - size / 2, size, color);
  }
}

class CirclePencil {
  draw(x, y, size, color) {
    drawCircle(x, y, size / 2, color);
  }
}

class StarPencil {
  draw(x, y, size, color) {
    drawStar(x, y, size / 2, color);
  }
}

// This is called when the page is loaded.
function init() {
  // Prepare the canvas for drawing
  prepareCanvas();

  const drawingArea = new DrawingArea();

  [
    ["Magenta", MAGENTA],
    ["Cyan", CYAN],
    ["Yellow", YELLOW],
    ["Black", BLACK]
  ].forEach(([id, color]) => {
    bindColorButton(id, color, drawingArea);
  });
  [["Size4", 4], ["Size16", 16], ["Size64", 64]].forEach(([id, size]) => {
    bindSizeButton(id, size, drawingArea);
  });

  bindButton("Square", () => {
    drawingArea.setPencil(new SquarePencil());
  });
  bindButton("Circle", () => {
    drawingArea.setPencil(new CirclePencil());
  });
  bindButton("Star", () => {
    drawingArea.setPencil(new StarPencil());
  });

  onDraw((x, y) => {
    drawingArea.draw(x, y);
  });
}

function bindButton(id, callback) {
  const button = document.getElementById(id);
  button.addEventListener("click", callback);
}

function bindColorButton(id, color, drawingArea) {
  bindButton(id, () => {
    drawingArea.setColor(color);
  });
}

function bindSizeButton(id, size, drawingArea) {
  bindButton(id, () => {
    drawingArea.setSize(size);
  });
}

window.onload = init;
