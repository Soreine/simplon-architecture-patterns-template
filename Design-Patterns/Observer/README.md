# Instructions

Nous allons faire un jeu ressemblant à Cookie Clicker, mais avec des macarons.
Le principe du jeu est le suivant. Vous êtes un vendeur de macarons. Vous pouvez cliquer sur le gros macaron pour en fabriquer un et gagner 1 euro.
Quand vous avez assez de sous, vous pouvez acheter des améliorations (upgrade) pour fabriquer des macarons automatiquement et plus rapidement: cliqueurs automatiques, mamies patissières, boulangerie, usine.

Notes: Les classes MacaronButton, MoneyDisplay, et UpgradeUI sont fournies et ne doivent pas être modifiées. Elles fournissent seulement une interface pour agir sur l'UI.

## 1.

Créez une class GameState, qui gère l'état des finances du joueur. Pour avoir une bonne base pour la suite, GameState aura une seule méthode pour modifier les finances:

```js
class GameState {
  money: number;

  // Modifie la quantité d'argent an appliquant une fonction `transaction` qui prend en entrée le montant actuel, et renvoie le nouveau montant.
  moneyTransaction(transaction)

  // ex: transaction = (amount) => amount + 5
}
```

Faites en sorte que cliquer sur le macaron ajoute 1 euro au GameState, et mette à jour l'UI.

## 2.

Nous allons mettre en place les bases d'un système Observer pour observer le GameState. GameState jouera le rôle de Publisher et doit remplir l'interface suivante:

```ts
// Completer l'implémentation de GameState avec:

class GameState {
  constructor() {
    this.subscribers = // ...
  }

  // Ajoute un subscriber (plus tard, il sera notifié dès que le GameState change)
  subscribe(subscriber) {

  }

  // Notifie tous les subscribers du nouvel étate de GameState
  notifySubscribers() {
    // Appeler tous les subscriber.update(this)
  }
}
```

Créer une classe MoneyController qui jouera le rôle de Subscriber et mettra à jour l'affichage de l'argent possédé par le joueur. Il doit remplir l'interface suivante:

```ts
interface GameStateSubscriber {
  // Le GameState notifiera des changements en appelant cette méthode
  update(gameState);
}
```

Demandez vous où les appels à `notifySubscribers` seront fait. Réimplémenter la logique de 1. en vous servant de ce design.

## 3.

Créez une classe Upgrade qui, pour une amélioration, jouera la rôle de controlleur. Elle définira ses propriétés (id, price) et gèrera son état (purchasable, count).

```js
/**
 * Gère l'affichage (prix) et l'etat (si l'upgrade est achetable, nombre d'upgrade) d'une upgrade.
 */
class Upgrade {
  constructor(ui, price, moneyPerSecond) {
    this.ui = ui;
    this.price = price;
    this.moneyPerSecond = moneyPerSecond;

    // Initial state
    this.purchasable = false;
    this.count = 0;

    // Initialize UI
    this.updateUI();
  }

  // Met à jour tout l'affichage de cette Upgrade en fonction de
  // son état et ses propriétés
  updateUI() {
    // Afficher le prix
    // Activer/desactiver le bouton si l'upgrade est achetable ou non
    // Afficher le nombre d'upgrade achetées
  }
}
```

Pour la suite on utilisera ces valeurs pour les upgrades:

```js
const UPGRADES_CONFIG = [
  { id: "clicker", price: 10, moneyPerSecond: 1 },
  { id: "grandma", price: 100, moneyPerSecond: 10 },
  { id: "bakery", price: 1000, moneyPerSecond: 100 },
  { id: "factory", price: 10000, moneyPerSecond: 1000 }
];
```

Initialisez un controlleur `Upgrade` pour chaque upgrade, et vérifier que leur prix s'affiche correctement.

## 4.

Faites que la classe Upgrade implémente l'interface `GameStateSubscriber`. Quand la quantité d'argent change, les améliorations doivent être notifiées et activer/desactiver leur bouton.

```js
class Upgrade {
  update(gameState) {
    // ...
  }
}
```

Note: Vous aurez peut-être un souci d'état initial (l'argent est à 0, et les upgrade sont achetables). Comment pouvons nous régler ce problème dans le cadre d'un design Observer ?

## 5.

Implémenter une méthode `Upgrade.onBuy(callback)` qui permet de réagir à l'achat d'une upgrade (upgrade activée et l'utilisateur a cliqué).

Faire en sorte qu'acheter une upgrade déduise son prix de l'argent possédé, et incrémente le compte de cette upgrade. Pour l'instant, acheter une upgrade ne génère pas d'argent.

## 6.

Pour finir, nous allons coder le système de génération d'argent des upgrades.

Créez une classe MoneyGenerator:

```js
class MoneyGenerator {
  // `transaction` est une fonction pouvant être passée
  // à `gameState.moneyTransaction`
  // `period` est l'intervalle de temps régulier auquel est généré
  // l'argent
  constructor(gameState, transaction, period)

  // Commence à appliquer la `transaction` sur le
  // `gameState` à intervalle régulier de longueur `period`
  start()
}
```

À l'achat d'une upgrade, initialiser et démarrer un générateur d'argent, avec une transaction du montant approprié, et une periode d'une seconde.

Remarque: On peut voir ici une forme de pattern Observer, où le publisher `MoneyGenerator` n'a qu'un seul subscriber (`gameState`).
