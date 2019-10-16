# Sommaire

- Les enjeux de l'architecture
  - [Presentation](https://slides.com/nicolasgaborit/architecture/fullscreen)
- Principes de conception
  - [Presentation](https://slides.com/nicolasgaborit/design-principles/fullscreen)
- Programmation Fonctionnelle
  - [Presentation](https://slides.com/nicolasgaborit/functional-programming/fullscreen)
- Principes SOLID
  - [Presentation](https://slides.com/nicolasgaborit/solid/fullscreen)
- UML
  - [Presentation](https://slides.com/nicolasgaborit/uml/fullscreen)
- Design Patterns
  - [Introduction](https://slides.com/nicolasgaborit/design-patterns-intro/fullscreen)
  - [Catalogue](https://slides.com/nicolasgaborit/design-patterns-catalogue/fullscreen)
  - [Prototype](./Design-Patterns/Prototype/)
  - [Singleton](./Design-Patterns/Singleton/)
  - [Adapter](./Design-Patterns/Adapter/)
  - [Composite](./Design-Patterns/Composite/)
  - Facade
  - [Strategy](./Design-Patterns/Strategy/)
  - [Chain of Responsibility](./Design-Patterns/Chain-of-Responsibility/)
  - [Observer](./Design-Patterns/Observer/)
  - [Proxy et Decorator](./Design-Patterns/Proxy-Decorator/)

# Installation

Installer `npm`, ou mieux `yarn`.

> Si vous utilisez yarn, remplacer dans toutes les commandes de ce guide `npm` par `yarn`.

Faites `npm install` à la racine du projet

# Exercices

Pour les exercices inclus dans les présentations sur Slides.com, utiliser les moyens que vous préférez. Un [CodeSandbox](https://codesandbox.io/s/vanilla) fait l'affaire. Vous pouvez sauvegarder votre travail dans un fichier par la suite.

Pour les exercices sur CodeWars, créez un compte et utiliser la plateforme.

Pour les exercices dans le dossier Design Patterns, ils utilisent la syntaxe ES6 et devront être compilé avec Babel:

- Les exercices avec seulement un fichier `.js` peuvent se faire avec Node + Babel. Executez le code en faisant `./node_modules/.bin/babel-node {chemin/vers/le/fichier.js}`
- Les exercices avec un fichier `.html` peuvent être fait en utilisant Parcel. Démarrer le serveur de developpement en faisant `./node_modules/.bin/parcel {chemin/vers/le/fichier.html}` et en ouvrant http://localhost:1234/

## Pour aller plus loin

À la fin de chaque exercice, si il vous reste du temps:

- Dessiner le diagramme UML de l'implémentation d'un exercice (quand il y a des classes)
- Pour chaque exercice, juger la séparation des responsabilités, le couplage des composants, la lisibilité des parties coeurs du programme.
- Comparer sa solution avec celles des autres. Discuter des avantages/inconvénients de chaque solution.
- Pour chaque solution réalisée, en faire l'équivalent en fonctionnel. Essayer donc de limiter au maximum l'utilisation de classes. Ne pas hésiter à demander des conseils et direction.
