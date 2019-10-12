/* eslint-disable no-unused-vars */
/*

Instructions

1. Écrire une classe Square et Circle. Elles doivent remplir l'interface commune à tous les élément d'une scène:

interface SceneObject {
  // Draw the object at the given coordinate
  draw(x, y)
}

Utiliser les pour dessiner une scène

2. Écrire une classe Group, qui peut contenir une liste de SceneObject. Group est lui meme un SceneObject. La méthode `Group.draw(x, y)` dessinera tous les objets du groupe.

Grouper tous les objets de votre scène en un seul Group, et n'appeler `.draw` que sur ce groupe.

3. Créer une classe Offset, qui est un SceneObject. Un Offset a des attributs `offsetX` et `offsetY`. Il contient un seul enfant et `Offset.draw(x, y)` dessiner cet enfant mais avec un décalage des coordonnées x et y de offsetX et offsetY.

Créer la scène suivante:

  const ear = new Circle(12.5, GRAY);
  const ears = new Group([
    new Offset(-25, -15, ear),
    new Offset(+25, -15, ear)
  ]);
  const head = new Circle(25, GRAY);
  const body = new Offset(-30, 30, new Square(60, RED));
  const TheDude = new Group([ears, head, body]);

  TheDude.draw(x, y);

4. Représenter par un dessin la structure de l'objet TheDude

*/

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

// This is where the code for drawing the scene goes
function drawScene(
  // Here are the coordinates where the user clicked
  x,
  y
) {
  // Prepare the canvas for drawing
  prepareCanvas();

  // Draw a blue square of size 50
  drawSquare(x, y, 50, BLUE);

  // Draw a red circle of radius 25
  drawCircle(x + 50, y + 50, 25, RED);
}

window.onload = init;
