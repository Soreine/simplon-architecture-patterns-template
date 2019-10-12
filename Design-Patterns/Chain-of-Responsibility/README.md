# Instructions

## 1.

Implémenter la vérifications des données saisies dans l'ordre:

- L'ancien password doit être correct (disons que c'était "god69")
- Le nouveau password n'est pas vide
- Le nouveau password est différent de l'ancien
- Le nouveau password et la confirmation sont identiques
- Le nouveau password a au moins 8 caractères
- Le nouveau password contient au moins un chiffre

Afficher un message d'erreur correspondant en cas de formulaire invalide.

## 2.

Séparer chaque règle en une fonction particulière. Les grouper en une liste de règle, et implémenter une fonction qui, au submit, va appliquer chaque règle de la liste, en s'arrêtant et en affichant la première erreur rencontrée.

## 3.

(Bonus) Écrire la même chose en faisant des classes `Rule` qui sont des Handler, et qui s'occupent elles-même d'appeler la règle suivante si il n'y a pas d'erreur.

Quelle version préférez-vous et pourquoi ?
