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
  // TODO
}

// This is called when the page is loaded.
function init() {
  // Prepare the canvas for drawing
  prepareCanvas();

  // TODO
}

window.onload = init;
