# Instructions

## 1.

Implémenter la vérifications des données saisies, dans l'ordre, sous la forme d'une fonction `checkForm`.

```js

function checkForm({ oldPassword, newPassword, confirmPassword }) {
    // Checks every condition, and return an appropriate error message (string)
    // if one fails
    ...
    // else return null
}
```

Voici les vérifications à implémenter:

- L'ancien password doit être correct (disons que c'était "god69")
- Le nouveau password n'est pas vide
- Le nouveau password est différent de l'ancien
- Le nouveau password et la confirmation sont identiques
- Le nouveau password a au moins 8 caractères
- Le nouveau password contient au moins un chiffre

Afficher un message d'erreur correspondant en cas de formulaire invalide. Pour cela, dans `submitNewPassword`, utiliser la fonction `checkForm`, et si `checkForm` renvoie un message, l'afficher comme message d'erreur avec `displayError()`, sinon faire un `console.log('Submitted form')` pour simuler l'envoi du formulaire.

## 2.

Séparer chaque règle en une fonction particulière. Les grouper en une liste de règle, et implémenter une fonction qui, au submit, va appliquer chaque règle de la liste, en s'arrêtant et en affichant la première erreur rencontrée.

```js
const oldPasswordIsCorrect = ({
  oldPassword,
  newPassword,
  confirmNewPassword
}) => {
  if (oldPassword !== "god69") {
    return "Old password is incorrect";
  } else {
    return null;
  }
};

const RULES = [oldPasswordIsCorrect, rule2, rule3];

function checkForm({ oldPassword, newPassword, confirmNewPassword }) {
  // Use reduce ?
  for (let i = 0; i < RULES.length; i++) {
    const rule = RULES[i];
    const error = rule({ oldPassword, newPassword, confirmNewPassword });
    if (error) {
      return error;
    }
  }

  return null;
}
```

## 3.

(Bonus) Écrire la même chose en faisant des classes `Rule` qui sont des Handler, et qui s'occupent elles-même d'appeler la règle suivante si il n'y a pas d'erreur.

Quelle version préférez-vous et pourquoi ?
