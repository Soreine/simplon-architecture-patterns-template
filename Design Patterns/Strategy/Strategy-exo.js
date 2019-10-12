/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
/*

Instructions

1. Écrire une classe DrawingArea

interface DrawingArea {
  // Draw a circle at the given coordinate
  // using the current size and color
  draw(x, y)

  setSize(size)
  setColor(color)
}

Et s'en servir pour dessiner des cercles au `onClick` du canvas.

2. Connecter les boutons de size et de colors de manière à ce qu'ils déclenchent `setSize` et `setColor`

3. Ajouter une méthode `DrawingArea.setShape`, qui permet d'assigner une shape 'square' ou 'circle'. `DrawingArea.draw` dessinera un cercle ou un carré en fonction de cet état. 

Connecter les boutons "Square" et "Circle" pour qu'ils modifient la shape courante.

4. Créer deux classes CirclePencil et SquarePencil qui ont pour interface

interface Pencil {
  // Draw a shape of given size and color, at given coordinates
  draw(x, y, size, color)
}

L'un dessine des cercles, l'autre des carrés.

5. Remplacer la méthode `setShape` par une méthode `setPencil`, et faire en sorte que `draw` utilise la stratégie du pencil courant pour dessiner. La logique du dessin est déléguée à l'objet pencil.

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
