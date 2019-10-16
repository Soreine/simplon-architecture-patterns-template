/**
 * Called when the form was submitted
 */
function submitNewPassword({ oldPassword, newPassword, confirmNewPassword }) {
  // Verifie le formulaire
  const maybeError = checkForm(
    {
      oldPassword,
      newPassword,
      confirmNewPassword
    },
    RULES
  );
  // Si pas OK, affiche un message d'erreur
  if (typeof maybeError === "string") {
    displayError(maybeError);
  } else {
    // Si OK, on submit
    clearError();
    console.log("Submitted form");
  }
}

function createRule(isValid, errorMsg) {
  const rule = form => {
    if (!isValid(form)) {
      return errorMsg;
    }
    return null;
  };

  return rule;
}

const oldPasswordCorrect = createRule(
  ({ oldPassword }) => oldPassword === "god69",
  "Old password is incorrect"
);

const newPasswordIsNotOldPassword = createRule(
  ({ oldPassword, newPassword }) => oldPassword !== newPassword,
  "New password should be different than the old one"
);

const newPasswordNotEmpty = createRule(
  ({ newPassword }) => Boolean(newPassword),
  "Please enter a new password"
);

const passwordConfirmed = createRule(
  ({ newPassword, confirmNewPassword }) => confirmNewPassword === newPassword,
  "New passwords don't match"
);
const passwordIsLong = createRule(
  ({ newPassword }) => newPassword.length >= 8,
  "New password should have at least 8 characters"
);

const passwordHasDigits = createRule(
  ({ newPassword }) => /\d/.test(newPassword),
  "New password should contain some digits"
);

const RULES = [
  oldPasswordCorrect,
  newPasswordNotEmpty,
  newPasswordIsNotOldPassword,
  passwordConfirmed,
  passwordIsLong,
  passwordHasDigits
];

function checkForm({ oldPassword, newPassword, confirmNewPassword }, rules) {
  return rules.reduce(
    (maybeError, rule) =>
      maybeError || rule({ oldPassword, newPassword, confirmNewPassword }),
    null
  );
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
