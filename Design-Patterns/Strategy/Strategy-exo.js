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
  constructor(shape = "circle", size = 4, color = MAGENTA) {
    this.shape = shape;
    this.size = size;
    this.color = color;
  }

  // shape = 'circle' | 'square'
  setShape(shape) {
    this.shape = shape;
  }

  setSize(size) {
    this.size = size;
  }

  setColor(color) {
    this.color = color;
  }

  // Draw a circle at the given coordinate
  // using the current size and color
  draw(x, y) {
    switch (this.shape) {
      case "circle":
        return drawCircle(x, y, this.size / 2, this.color);
      case "square":
        return drawSquare(
          x - this.size / 2,
          y - this.size / 2,
          this.size,
          this.color
        );
      default:
        throw new Error("Unknown shape");
    }
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
    drawingArea.setShape("square");
  });
  bindButton("Circle", () => {
    drawingArea.setShape("circle");
  });

  onClick((x, y) => {
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
