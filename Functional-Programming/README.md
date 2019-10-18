# Functional Programming

https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0

## 1. Functions are Pure

This is easily the foremost rule of functional programming. All functions are *pure* in the sense that they abide by two restrictions:

1.  A function called multiple times with the same arguments will always return the same value. Always.
2.  No [side effects](<https://en.wikipedia.org/wiki/Side_effect_(computer_science)>) occur throughout the function’s execution.

Un effet de bord est n'importe quel changement observable à l'extérieur de la fonction, autre que sa valeur de retour. En voici des exemples:

- Modifier une variable externe, ou la propriété d'un objet
- Logger dans la console
- Afficher à l'écran
- Écrire dans un fichier
- Communiquer sur le réseau
- Démarrer n'importe quel processus extérieur
- Appeler une fonction qui a des effets de bord.

Impures

```js
let PI = 3.14;

function area(radius) {
  return radius * radius * PI;
}

function addItem(items, newItem) {
  items.push(newItem);
  return items;
}
```

Pures

```js
function area(radius, Pi) {
  return radius * radius * Pi;
}

function addItem(items, newItem) {
  return items.concat([newItem]);
}
```

Pure functions are stable, consistent, and predictable. Given the same parameters, pure functions will always return the same result.

Pure function is isolated and unable to impact other parts of our system.

## 2. Functions are First-Class and can be Higher-Order

```js
/* A function is a value and can be assigned */
const double = n => n * 2;

/* Function as parameter */
function mapper(fn) {
  /* Function as returned value */
  return array => array.map(fn);
}

const doubleArray = mapper(double);
doubleArray([1, 2, 3]); // [2, 4, 6]
```

## 3. Etat partagés et mutabilité

```js
const x = {
  val: 2
};
const incrementX = () => (x.val += 1);
const doubleX = () => (x.val *= 2);

incrementX();
doubleX();
console.log(x.val); // 6

// Same, but...
const y = {
  val: 2
};
const incrementY = () => (y.val += 1);
const doubleY = () => (y.val *= 2);

// ...the order is reversed...
doubleY();
incrementY();
// ... which changes the result
console.log(y.val); // 5
```

Et sans mutation et état partagé:

```js
const x = {
  val: 2
};
const increment = x => ({ ...x, val: x.val + 1 });
const double = x => ({ ...x, val: x.val * 2 });

console.log(double(increment(x)).val); // 6

// No dependency on outside variables,
// no need for a different function for y
const y = {
  val: 2
};

// You can call anything, in any order...
increment(y);
double(y);
increment(double(x));

// ... it will not change the result of other calls
console.log(double(increment(x)).val); // 6
```

## 4. Déclaratif versus Impératif

Le programme doit décrire au maximum le quoi, et non le comment. Qu'est-ce qui est fait, pas comment le faire.

```js
// Quel est l'age moyen des femmes dans ce groupe ?
const casa = [
  { name: "Le Professeur", gender: "male", age: 43 },
  { name: "Tokyo", gender: "female", age: 28 },
  { name: "Nairobi", gender: "female", age: 32 }
];

function femaleAgeAverage(group) {
  let sum = 0;
  let femaleCount = 0;
  for (let i = 0; i < group.length; i++) {
    const member = group[i];
    if (member.gender === "female") {
      sum += member.age;
      femaleCount += 1;
    }
  }
  return sum / femaleCount;
}
```

Exercice:

Écrire une fonction getAges qui renvoie la liste des ages du groupe, en utilisant `.map`
Écrire une fonction onlyFemale qui renvoie juste les femmes du groupe, en utilisant `.filter`
Écrire une fonction sum qui calcule la somme d'une liste de nombres, en utilisant `.reduce`

S'en servir pour réécrire femaleAgeAverage

```js
// Quel est l'age moyen des femmes dans ce groupe ?
const casa = [
  { name: "Le Professeur", gender: "male", age: 43 },
  { name: "Tokyo", gender: "female", age: 28 },
  { name: "Nairobi", gender: "female", age: 32 }
];

const isFemale = p => p.gender === "female";
const getAge = p => p.age;
const sum = a => a.reduce((s, n) => s + n, 0);
const average = a => sum(a) / a.length;

function femaleAgeAverage(group) {
  const females = group.filter(isFemale);
  const femaleAges = females.map(getAge);
  return average(femaleAges);
}
```

# Regles pour les exos

- Eviter les assignations: eviter les `let`, utiliser des `const`
- Eviter les modifications des tableaux et objets passés en entrée, preferer créer et renvoyer des clones modifiés
- Et si possible, eviter les boucles `for` et `while`. Pas de problemes pour les `if` et `switch`

Si vous ne savez pas comment faire, vous pouvez d'abord faire l'exercice sans aucunes regles, avec des boucles `for` si vous voulez, comme vous feriez normalement. Ensuite, essayer de rendre le tout purement fonctionnel.

# 8 kyus

# 7 kyus

## Flatten and sort an array

.reduce, .sort
https://www.codewars.com/kata/flatten-and-sort-an-array/javascript

## Functional addition

Function as return value
https://www.codewars.com/kata/538835ae443aae6e03000547

## Form the Minimum

Unique values, and .sort and .reduce
https://www.codewars.com/kata/5ac6932b2f317b96980000ca

Avant de commencer, si vous deviez trouver la réponse à la main, comment feriez vous ?

## 6 Kyus

### Composition of a list of functions

.reduce
https://www.codewars.com/kata/5655c60db4c2ce0c2e000026

### Stringing me along

Higher order functions
https://www.codewars.com/kata/55f4a44eb72a0fa91600001e

### zipWith

https://www.codewars.com/kata/5825792ada030e9601000782

## 5 kyus

https://www.codewars.com/kata/calculating-with-functions/javascript

# Recursion

Il faut verifier que

- des cas de bases sont gérés sans avoir a faire d'appel recursif. On les appelle des cas d'arrêt
- les appels recursifs sont faits sur des parametres plus petit a chaque fois, de maniere a finir par tomber sur les cas d'arret

Il est utile de garder a l'esprit que, grace a la recursion, a tout moment on peut appeler la fonction qu'on est en train de coder sur des parametres plus petits, et on peut se servir de ces resultats partiels pour calculer le resultat complet. Exemple, pour une fonction `lengthOfList(l)`, on peut appeler `lengthOfList` sur la meme liste sans le premier element, et ajouter 1 au resultat.

## Longueur d'une liste

Ecrire `lengthOfList(l)` en récursif (sans utiliser .length)

https://www.codewars.com/collections/fun-with-lists

- indexOf
- (lastIndexOf)
- some
- map
- filter
- reduce

## Tri par insertion

1. Ecrire une fonction `insert(n, a)` qui insert un nombre `n` à la bonne place dans un array `a` déjà trié par ordre croissant. La fonction doit renvoyer un nouvel array.

```js
function insert(n, a) {
  if (a.length == 0) {
    return [n];
  }

  const first = a[0];
  const rest = a.slice(1);
  if (first < n) {
    const restWithN = insert(n, rest);
    return [first].concat(restWithN);
  } else {
    return [n, first].concat(rest);
  }
}
```

2. Ecrire une fonction `sort(a)` qui prend un tableau d'entiers non triés, et renvoie un tableau de ces meme entiers triés par ordre croissant

```js
function sort(a) {
  if (a.length === 0) {
    return [];
  }

  const first = a[0];
  const rest = a.slice(1);
  const sortedRest = sort(rest);

  return insert(first, sortedRest);
}
```

3. Decrire les operations qui vont etre faites par l'ordinateur sur un appel de `sort([3, 4, 6, 1])`

# More

https://www.codewars.com/collections/fun-with-lists

https://github.com/timoxley/functional-javascript-workshop
