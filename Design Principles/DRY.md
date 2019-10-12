## DRY

https://thevaluable.dev/dry-principle-explained/

- Les variables, noms et propriétés ont souvent besoin d'être répétées dans le code. C'est OK, ce n'est pas de la fonctionalité

1.  **Knowledge duplication** is always a DRY principle violation.
2.  **Code duplication** doesn’t necessarily mean violation of the DRY principle.

**Duplication is far cheaper than the wrong abstraction**

## Code duplication

A partir de 3 répétition, il peut être pratique de factoriser. Parfois c'est une perte de temps

## Single Source of Truth

Une donnée ou un état doit avoir un unique endroit où être stocké. Toutes les représentations de cette donnée doivent dériver de cette source. Autrement il faut synchroniser les sources, il y a risque d'oubli et de divergence.

Exemple "One-way data binding". Deux listes de films, une triée par date, et l'autre alphabétique. Modifier une entrée dans l'un doit informer l'autre de la modification. Que se passe-t-il si il y a divergence au clic sur le bouton sauvegarde ? A la place, il faut un état parent qui a la liste désordonnée, et les listes triées sont dérivées de ce parent.
