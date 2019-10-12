# Ressources

Image
https://devopedia.org/images/article/177/8101.1558682601.png

Images
http://web.archive.org/web/20160521015258/https://lostechies.com/derickbailey/2009/02/11/solid-development-principles-in-motivational-pictures/

https://thefullstack.xyz/solid-javascript

# Single Responsibility Principle

Une classe, un module, une fonction, doivent avoir une unique responsabilité. Autrement dit, il doit y avoir qu'une seule raison pour la modifier un jour.

Exemple:

```js
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `<h1>Fullname: ${this.firstName} ${this.lastName}</h1>`;
  }
}
```

Devrait être

```js
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

function displayFullName(fullName) {
  return `<h1>Fullname: ${fullName}</h1>`;
}

const user = new User("Toby", "Fox");
displayFullName(user.fullName());
```

# Open/Closed Principle

Une classe/fonction/module doit être ouvert aux extensions, mais fermé aux modifications.
On doit pouvoir étendre ses fonctionnalité sans avoir à modifier son code.

On enfreint souvent ce principe quand un module de base est exposé aux détails d'implémentation de ce qu'il manipule.

```js
class Square {
  constructor(size) {
    this.type = "square";
    this.size = size;
  }
}

class Circle {
  constructor(radius) {
    this.type = "circle";
    this.radius;
  }
}

function sumAreas(shapes) {
  const areas = shapes.map(shape => {
    switch (shape.type) {
      case "circle":
        return shape.radius * shape.radius * Math.PI;
      case "square":
        return shape.size * shape.size;
      default:
        throw new Error("Unknown shape");
    }
  });

  return areas.reduce((sum, area) => sum + area, 0);
}
```

La fonction `sumAreas` enfreint le principe Open/Closed.

```js
class Square {
  constructor(size) {
    this.type = "square";
    this.size = size;
  }

  area() {
    return this.size * this.size;
  }
}

class Circle {
  constructor(radius) {
    this.type = "circle";
    this.radius;
  }

  area() {
    return this.radius * this.radius * Math.PI;
  }
}

function sumAreas(shapes) {
  const areas = shapes.map(shape => shape.area());
  return areas.reduce((sum, area) => sum + area, 0);
}
```

# Liskov Substitution Principle

https://stackoverflow.com/questions/56860/what-is-an-example-of-the-liskov-substitution-principle#answer-584732

C'est le pire choix de nom. Retenez le en tant que principe de substitution. Si deux classes remplissent la même interface, une instance de l'un doit être utilisable à la place d'une instance de l'autre. Si faire cette substitution casse le programme, c'est que les deux classes ne doivent pas être conçues comme ayant la même interface. L'abstraction est incorrecte.

```js
class Rectangle {
  setHeight(height) {
    this.height = height;
  }
  setWidth(width) {
    this.width = width;
  }
}

class Square extends Rectangle {
  setHeight(height) {
    // Uh oh... :S
    // Que faire ?
  }
}
```

# Interface Segregation Principle

Il ne faut pas forcer le code client à implémenter une interface dont il n'a pas usage.

```js
// Une librairie pour manipuler des formes géométrique
// impose que toutes les objets représentant des formes
// aient l'interface suivante:
interface Shape {
    area()
    volume()
}

// En voulant généraliser trop et en mélangeant les formes 2D et 3D,
// on force le client à faire des choses incorrectes
class Square {
   area() {
       this.size * this.size;
   }

   volume() {
       // ? throw error ?
   }
}
```

# Dependency Inversion Principle

Les modules de haut niveau ne doivent pas dépendre de l'implémentation concrète des modules de bas niveau. Au lieu de cela, les modules de haut niveau doivent exiger de travailler avec une abstraction (une interface) que les modules de bas niveau doivent implémenter.

```js
// Déplace la voiture un peu en avant
function avancerUnPeu(voiture) {
  voiture.tourneClef();
  voiture.enleveFreinAMain();
  voiture.appuieAccelerateur();
  voiture.freine();
  voiture.metFreinAMain();
  voiture.tourneClef();
}
```

```js
// Déplace un véhicule un peu en avant
function avancerUnPeu(vehicule) {
  vehicule.allumer();
  vehicule.avancer();
  vehicule.arreter();
  vehicule.eteindre();
}

class VehiculeVoiture {
  constructor(voiture) {
    this.voiture = voiture;
  }

  allumer() {
    this.voiture.tourneClef();
    this.voiture.enleveFreinAMain();
  }

  avancer() {
    this.voiture.appuieAccelerateur();
  }

  arreter() {
    this.voiture.freine();
  }

  eteindre() {
    this.voiture.metFreinAMain();
    this.voiture.tourneClef();
  }
}

const vehicule = new VehiculeVoiture(voiture);
avancerUnPeu(vehicule);
```
