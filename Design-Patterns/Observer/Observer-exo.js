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

// This is called when the page is loaded.
function init() {
  // TODO le code qui suit est un exemple d'usage
  const macaronButton = new MacaronButton();
  const moneyDisplay = new MoneyDisplay();

  // ...
}

window.onload = init;
