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

// Publisher
class GameState {
  constructor() {
    this.money = 0;
    this.subscribers = [];
  }

  moneyTransaction(transaction) {
    this.money = transaction(this.money);
    this.notifySubscribers();
  }

  // Ajoute un subscriber (plus tard, il sera notifié dès que le GameState change)
  subscribe(subscriber) {
    this.subscribers.push(subscriber);
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
}

// const mamieTransaction = amount => amount + 10;
// const buyMamie = amount => amount - 100;

// gameState.moneyTransaction(mamieTransaction);

window.onload = init;
