# Instructions

Le but est de faire un mini-Paint, un outil de dessin.
Le programme aura un état qui indique quelle forme de crayon est sélectionnée,
quelle taille de crayon, et quelle couleur est utilisée.
La taille du crayon et la couleur seront des valeurs simples et classiques.
En revanche, la forme du crayon (un objet `Pencil`) encapsulera toute la logique pour dessiner sur la zone avec la forme souhaitée.

## 1.

Écrire une classe DrawingArea

```ts
class DrawingArea {
  // Draw a circle at the given coordinate
  // using the current size and color
  draw(x, y);

  setSize(size);
  setColor(color);
}
```

Et s'en servir pour dessiner des cercles au `onClick` du canvas.

## 2.

Connecter les boutons de size et de colors de manière à ce qu'ils déclenchent `setSize` et `setColor`

## 3.

Ajouter une méthode `DrawingArea.setShape`, qui permet d'assigner une shape 'square' ou 'circle'. `DrawingArea.draw` dessinera un cercle ou un carré en fonction de cet état.

Connecter les boutons "Square" et "Circle" pour qu'ils modifient la shape courante.

## 4.

Créer deux classes CirclePencil et SquarePencil qui ont pour interface

```ts
interface Pencil {
  // Draw a shape of given size and color, at given coordinates
  draw(x, y, size, color);
}
```

L'un dessine des cercles, l'autre des carrés.

## 5.

Remplacer la méthode `setShape` par une méthode `setPencil`, et faire en sorte que `draw` utilise la stratégie du pencil courant pour dessiner. La logique du dessin est déléguée à l'objet pencil.

```js
const circlePencil = new CirclePencil();
const squarePencil = new SquarePencil();

bindButton("Circle", () => {
  drawingArea.setPencil(circlePencil);
});
```

## 6. (Bonus)

Modifier `Strategy-lib.js` pour que l'on puisse dessiner de maniere continue en cliquant-glissant, et non clic par clic.
Utiliser pour cela les evenement `mousedown`, `mouseup`, `mouseleave`, `mousemove`, au lieu de `click` dans `onClick`.
