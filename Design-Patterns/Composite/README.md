# Instructions

But: Representer une scene par un aggregat d'objet composite. Et pouvoir dessiner cette scene, ou une partie de cette scene (.draw()).

## 1.

Écrire une classe Square et Circle. Elles doivent remplir l'interface commune à tous les élément d'une scène:

```ts
interface SceneObject {
  // Draw the object at the given coordinate
  draw(x, y);
}
```

Utiliser les pour dessiner une scène

## 2.

Écrire une classe Group, qui peut contenir une liste de SceneObject. Group est lui meme un SceneObject. La méthode `group.draw(x, y)` dessinera tous les objets du groupe.

Group contiendra des children.

Grouper tous les objets de votre scène en un seul Group, et n'appeler `.draw` que sur ce groupe.

## 3.

Créer une classe Offset, qui est un SceneObject. Un Offset a des attributs `offsetX` et `offsetY`. Il contient un seul enfant et `Offset.draw(x, y)` dessiner cet enfant mais avec un décalage des coordonnées x et y de offsetX et offsetY.

Créer la scène suivante:

```js
const ear = new Circle(12.5, GRAY);
const ears = new Group([new Offset(-25, -15, ear), new Offset(+25, -15, ear)]);
const head = new Circle(25, GRAY);
const body = new Offset(-30, 30, new Square(60, RED));
const TheDude = new Group([ears, head, body]);

TheDude.draw(x, y);
```

## 4.

Représenter par un dessin la structure de l'objet TheDude
