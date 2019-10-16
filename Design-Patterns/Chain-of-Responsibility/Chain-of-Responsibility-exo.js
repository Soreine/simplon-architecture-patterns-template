/**
 * Called when the form was submitted
 */
function submitNewPassword({ oldPassword, newPassword, confirmNewPassword }) {
  // TODO
  displayError("Not implemented");
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
