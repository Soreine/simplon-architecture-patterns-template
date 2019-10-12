/*
Instructions

1. Implémenter la vérifications des données saisies dans l'ordre:

- L'ancien password doit être correct (disons que c'était "god69")
- Le nouveau password n'est pas vide
- Le nouveau password est différent de l'ancien
- Le nouveau password et la confirmation sont identiques
- Le nouveau password a au moins 8 caractères
- Le nouveau password contient au moins un chiffre

Afficher un message d'erreur correspondant en cas de formulaire invalide.

2. Séparer chaque règle en une fonction particulière. Les grouper en une liste de règle, et implémenter une fonction qui, au submit, va appliquer chaque règle de la liste, en s'arrêtant et en affichant la première erreur rencontrée.

3. (Bonus) Écrire la même chose en faisant des classes `Rule` qui sont des Handler, et qui s'occupent elles-même d'appeler la règle suivante si il n'y a pas d'erreur.

Quelle version préférez-vous et pourquoi ?

*/

/**
 * Called when the form was submitted
 */
function submitNewPassword({ oldPassword, newPassword, confirmNewPassword }) {
  // TODO
  displayError("Not implemented");
}

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
