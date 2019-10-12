# Instructions

Nous allons faire un jeu ressemblant à Cookie Clicker, mais avec des macarons.
Le principe du jeu est le suivant. Vous êtes un vendeur de macarons. Vous pouvez cliquer sur le gros macaron pour en fabriquer un et gagner 1 euro.
Quand vous avez assez de sous, vous pouvez acheter des améliorations (upgrade) pour fabriquer des macarons automatiquement et plus rapidement: cliqueurs automatiques, mamies patissières, boulangerie, usine.

Notes: Les classes MacaronButton, MoneyDisplay, et UpgradeUI sont fournies et ne doivent pas être modifiées. Elles fournissent seulement une interface pour agir sur l'UI.

## 1.

Créez une class GameState, qui gère l'état des finances du joueur. Pour avoir une bonne base pour la suite, GameState aura une seule méthode pour modifier les finances:

```js
class GameState {
  // Modifie la quantité d'argent an appliquant une fonction `transaction` qui prend en entrée le montant actuel, et renvoie le nouveau montant.
  moneyTransaction(transaction)
}
```

Faites en sorte que cliquer sur le macaron ajoute 1 euro au GameState, et mette à jour l'UI.

## 2.

Nous allons mettre en place les bases d'un système Observer pour observer le GameState. GameState jouera le rôle de Publisher et doit remplir l'interface suivante:

```ts
interface GameStatePublisher {
  // Ajoute un subscriber qui sera notifié dès que le GameState change
  subsribe(subscriber);

  // Notifie tous les subscribers du nouvel étate de GameState
  notifySubscribers();
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

Créez une classe Upgrade qui, pour une amélioration, jouera la rôle de controlleur. Elle définira ses propriétés (id, price, moneyPerSecond) et gèrera son état (enabled, count).

Implémenter une méthode `incrementCount()` et `setEnabled(boolean)` pour modifier chaque état.

Implémenter une méthode générale `updateUI()` qui met à jour l'UI de cette upgrade.

Faites quelques tests d'utilisation de cette classe

## 4.

Faites que la classe Upgrade implémente l'interface `GameStateSubscriber`. Quand la quantité d'argent change, les améliorations doivent s'activer ou se désactiver. Créez une instance d'Upgrade pour les 4 améliorations du jeu et souscrivez les aux update du GameState.

Note: Vous aurez peut-être un souci d'état initial (l'argent est à 0, et les upgrade sont cliquables). Comment pouvons nous régler ce problème dans le cadre d'un design Observer ?

## 5.

Implémenter une méthode `Upgrade.onBuy(callback)` qui permet de réagir à l'achat d'une upgrade (upgrade activée et l'utilisateur a cliqué).

Faire en sorte qu'acheter une upgrade déduise son prix de l'argent possédé, et increment le compte de cette upgrade. Pour l'instant, acheter une upgrade ne génère pas d'argent.

## 6.

Pour finir, nous allons coder le système de génération d'argent des upgrades.

Créez une classe MoneyGenerator:

```js
class MoneyGenerator {
  // `transaction` est une fonction pouvant être passée
  // à `gameState.moneyTransaction`
  constructor(gameState, transaction, period)

  // Commence à appliquer la `transaction` sur le
  // `gameState` à intervalle régulier de longueur `period`
  start()
}
```

À l'achat d'une upgrade, initialiser et démarrer un générateur d'argent ayant pour cible le GameState, avec une transaction du montant approprié, et une periode d'une seconde.

Remarque: On peut voir ici une forme de pattern Observer, où le publisher `MoneyGenerator` n'a qu'un seul subscriber (`gameState`).
