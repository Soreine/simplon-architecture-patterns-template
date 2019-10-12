/**
 * This is DRY, but with (potentially) unnecessary code duplication
 */

function validateProduct(product) {
  if (!Object.prototype.hasOwnProperty.call(product, "color")) {
    throw new Error("Import fail: the product attribute color is missing");
  }

  if (!Object.prototype.hasOwnProperty.call(product, "size")) {
    throw new Error("Import fail: the product attribute size is missing");
  }

  if (!Object.prototype.hasOwnProperty.call(product, "type")) {
    throw new Error("Import fail: the product attribute color is missing");
  }
}

// -------------------------------------------------------

/**
 * Without code duplication. Sometimes in can be more complex to understand than before
 */

function validateProduct(product) {
  const assessProductProp = prop => {
    if (!Object.prototype.hasOwnProperty.call(product, prop)) {
      throw new Error(`Import fail: the product attribute ${prop} is missing`);
    }
  };

  ["color", "size", "type"].forEach(assessProductProp);
}
