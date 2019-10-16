/**
 * Called when the form was submitted
 */
function submitNewPassword({ oldPassword, newPassword, confirmNewPassword }) {
  // Verifie le formulaire
  const maybeError = checkForm({
    oldPassword,
    newPassword,
    confirmNewPassword
  });
  // Si pas OK, affiche un message d'erreur
  if (typeof maybeError === "string") {
    displayError(maybeError);
  } else {
    // Si OK, on submit
    clearError();
    console.log("Submitted form");
  }
}

function checkForm({ oldPassword, newPassword, confirmNewPassword }) {
  //  - L'ancien password doit être correct (disons que c'était "god69")
  if (oldPassword !== "god69") {
    return "Old password is incorrect";
  }
  // - Le nouveau password n'est pas vide
  if (newPassword === "") {
    return "New password is empty";
  }
  // - Le nouveau password est différent de l'ancien
  if (newPassword === oldPassword) {
    return "New password should not be identical to old password";
  }
  // - Le nouveau password et la confirmation sont identiques
  if (newPassword !== confirmNewPassword) {
    return "Please confirm password";
  }
  // - Le nouveau password a au moins 8 caractères
  if (newPassword.length < 8) {
    return "New password is too short";
  }
  // - Le nouveau password contient au moins un chiffre
  const hasDigits = /\d/;
  if (!hasDigits.test(newPassword)) {
    return "New password should have digits";
  }

  return null;
}

// -------------
// Below is utility code for the exercise
// --------------

/**
 * Display an error message below the form
 * @param {string} msg
 */
function displayError(msg) {
  const errorLabel = document.getElementById("error");
  errorLabel.innerText = msg;
  errorLabel.style = "display: block";
}

/**
 * Clear the error message
 */
function clearError() {
  const errorLabel = document.getElementById("error");
  errorLabel.style = "display: none";
}

// Form submitting
document.getElementById("change-password-form").onsubmit = event => {
  // We handle it
  event.preventDefault();
  const oldPassword = document.getElementById("old-password").value;
  const newPassword = document.getElementById("new-password").value;
  const confirmNewPassword = document.getElementById("confirm-new-password")
    .value;

  submitNewPassword({
    oldPassword,
    newPassword,
    confirmNewPassword
  });
};
