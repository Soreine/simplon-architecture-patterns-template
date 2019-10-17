/**
 * The big Macaron button.
 */
class MacaronButton {
  constructor() {
    this.button = document.getElementById("macaron");
  }

  /**
   * Reacts to click
   */
  onClick(callback) {
    this.button.addEventListener("click", callback);
  }
}

/**
 * Display for the money the player has
 */
class MoneyDisplay {
  constructor() {
    this.counter = document.getElementById("money-counter");
  }

  displayAmount(money) {
    this.counter.innerText = money;
  }
}

/**
 * Controls the UI for an upgrade
 */
class UpgradeUI {
  constructor(id) {
    this.elements = UpgradeUI.findUpgradeElements(id);
  }

  /**
   * @param id The ID of the upgrade
   * @return { price, button, counter } The HTML Elements
   */
  static findUpgradeElements(id) {
    const element = document.getElementById(id);
    const price = element.getElementsByClassName("price")[0];
    const button = element.getElementsByClassName("image-button")[0];
    const counter = element.getElementsByClassName("counter")[0];

    return {
      price,
      button,
      counter
    };
  }

  /**
   * Display the price of the upgrade
   */
  displayPrice(price) {
    this.elements.price.innerText = price;
  }

  /**
   * Display the number of upgrades owned
   */
  displayCount(count) {
    this.elements.counter.innerText = count;
  }

  /**
   * Make the upgrade non clickable
   */
  disable() {
    this.elements.button.setAttribute("disabled", "true");
  }

  /**
   * Make the upgrade clickable
   */
  enable() {
    this.elements.button.removeAttribute("disabled");
  }

  /**
   * Reacts to clicks
   */
  onClick(callback) {
    this.elements.button.addEventListener("click", callback);
  }
}

// ------------------------------------
// Votre code ci-dessous
// ------------------------------------

const UPGRADES_CONFIG = [
  { id: "clicker", price: 10, moneyPerSecond: 1 },
  { id: "grandma", price: 100, moneyPerSecond: 10 },
  { id: "bakery", price: 1000, moneyPerSecond: 100 },
  { id: "factory", price: 10000, moneyPerSecond: 1000 }
];

// Publisher
class GameState {
  constructor() {
    this.money = 1000;
    this.subscribers = [];
  }

  moneyTransaction(transaction) {
    this.money = transaction(this.money);
    this.notifySubscribers();
  }

  // Ajoute un subscriber (plus tard, il sera notifié dès que le GameState change)
  subscribe(subscriber) {
    this.subscribers.push(subscriber);
    subscriber.update(this);
  }

  // Notifie tous les subscribers du nouvel étate de GameState
  notifySubscribers() {
    // Appeler tous les subscriber.update(this)
    this.subscribers.forEach(subscriber => subscriber.update(this));
  }
}

// Subscriber
class MoneyController {
  constructor(moneyDisplay) {
    this.moneyDisplay = moneyDisplay;
  }

  update(gameState) {
    this.moneyDisplay.displayAmount(gameState.money);
  }
}

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
    this.ui.displayPrice(this.price);
    // Activer/desactiver le bouton si l'upgrade est achetable ou non
    if (this.purchasable) {
      this.ui.enable();
    } else {
      this.ui.disable();
    }
    // Afficher le nombre d'upgrade achetées
    this.ui.displayCount(this.count);
  }

  update(gameState) {
    this.purchasable = gameState.money >= this.price;
    this.updateUI();
  }

  onBuy(callback) {
    // this.ui.onClick;
  }
}

// This is called when the page is loaded.
function init() {
  const macaronButton = new MacaronButton();

  const gameState = new GameState();

  const moneyController = new MoneyController(new MoneyDisplay());
  gameState.subscribe(moneyController);

  macaronButton.onClick(() => {
    // Ajouter 1 euro
    gameState.moneyTransaction(amount => amount + 1);
  });

  const upgrades = UPGRADES_CONFIG.map(
    ({ id, price, moneyPerSecond }) =>
      new Upgrade(new UpgradeUI(id), price, moneyPerSecond)
  );
  // Subscribe upgrades
  upgrades.forEach(upgrade => gameState.subscribe(upgrade));

  // React on buy
  upgrades.forEach(upgrade =>
    upgrade.onBuy(() => {
      // Déduire l'argent de l'achat
    })
  );
}

window.onload = init;
