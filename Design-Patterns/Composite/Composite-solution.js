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
   * Setup an action to do everytime the user click on the page
   *
   * @param callback Function that receives the X and Y coordinates of the click
   */
  onClick,

  // Some color values to use as argument for drawCircle and drawSquare
  RED,
  GREEN,
  BLUE,
  GRAY
} from "./Composite-lib";

// This is called when the page is loaded.
function init() {
  // We draw the scene first at 0, 0
  drawScene(0, 0);

  // Then we redraw the scene where the user clicks
  onClick((x, y) => drawScene(x, y));
}

class Square {
  constructor(size, color) {
    this.size = size;
    this.color = color;
  }

  // Dessiner un carré
  draw(x, y) {
    // drawSquare(x, y, size ,color)
    drawSquare(x, y, this.size, this.color);
  }
}

class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }

  // Dessiner un cercle
  draw(x, y) {
    drawCircle(x, y, this.radius, this.color);
  }
}

class Group {
  constructor() {}
  draw(x, y) {}
}

// This is where the code for drawing the scene goes
function drawScene(
  // Here are the coordinates where the user clicked
  x,
  y
) {
  // Prepare the canvas for drawing
  prepareCanvas();

  const square = new Square(50, BLUE);
  const circle = new Circle(25, RED);

  const group = new Group([square, circle]);
  group.draw(x, y);
}

window.onload = init;
