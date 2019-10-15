/* eslint-disable class-methods-use-this */

// Old code
class OldCalculator {
  operate(term1, term2, operation) {
    switch (operation) {
      case "add":
        return term1 + term2;
      case "sub":
        return term1 - term2;
      default:
        return NaN;
    }
  }
}

// New code
class NewCalculator {
  add(term1, term2) {
    return term1 + term2;
  }

  sub(term1, term2) {
    return term1 - term2;
  }
}

// Adapter Class
class AdaptedOldCalculator {
  constructor() {
    this.newCalc = new NewCalculator();
  }

  operate(term1, term2, operation) {
    switch (operation) {
      case "add":
        // using the new implementation internally
        return this.newCalc.add(term1, term2);
      case "sub":
        return this.newCalc.sub(term1, term2);
      default:
        return NaN;
    }
  }
}

// usage
const oldCalc = new OldCalculator();
console.log(oldCalc.operate(10, 5, "add")); // 15
console.log(oldCalc.operate(10, 5, "sub")); // 5

const newCalc = new NewCalculator();
console.log(newCalc.add(10, 5)); // 15
console.log(newCalc.sub(10, 5)); // 5

const adaptedCalc = new AdaptedOldCalculator();
console.log(adaptedCalc.operate(10, 5, "add")); // 15;
console.log(adaptedCalc.operate(10, 5, "sub")); // 5
