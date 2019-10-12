## YAGNI

You ain't gonna need it

Ce n'est pas parce que l'on peut le faire, qu'il faut le faire.

YAGNI fait référence aux fonctionnalités que l'on implémente par anticipation d'un besoin futur, qui sont en réalité une perte d'efficacité, voire une perte de temps.

Exemple : On travaille sur un concurrent de WhatsApp, on est en train de coder les éléments principaux de l'UI, et on pense qu'à un moment il faudra ajouter un systeme de thèmes. Dans cas là, il n'est pas nécessaire d'ajouter tout de suite des paramètre de couleur dynamique aux composants, bien que ça ait l'air facile "tant qu'on y est".

Exemple : On travaille sur l'affichage des utilisateurs au sein de l'agenda de la mairie de St-Fons. Il faut afficher le nom, utiliser une couleur propre a l'utilisateur. Et puis on se dit qu'on pourrait permettre d'avoir une photo/avatar, alors on le fait tant qu'on y est. Mais ce n'est pas nécessaire si on y réfléchit, il y a de grande chance que ça ne soit jamais un réel besoin. C'est une perte de temps.

Exemple: You later find out your product manager took a screenshot of the page and put it on a slide. (https://thefullstack.xyz/dry-yagni-kiss-tdd-soc-bdfu)

Les risques sont :

- D'avoir codé quelque chose dont on a finalement pas besoin
- D'avoir codé quelque chose qui n'est plus adapté, car le besoin a varié
- D'ajouter de la complexité inutile

Tout ça car on a pas le recul que l'on aurait gagné si on l'avait fait plus tard, car on se trompe dans nos prédiction, que le besoin prédit est mal compris et estimé.

Qu'est-ce que cela coûte d'ajouter une feature anticipée :

- **1. La bonne feature et bien faite (rarement le cas) **: Cout de délai sur les autres feature, cout de complexité additionnelle "inutile" jusqu'au jour ou la feature est utile.
- **2. La bonne feature, mais mal faite (souvent le cas) **: Meme cout que 1. mais avec le cout de réparation
- **3. La mauvaise feature (souvent le cas): **Meme cout que 1. mais avec le cout de fabrication complet, et le cout de retrait de la feature.

Il est important, et souvent facile, de repérer des cas de YAGNI sur des grosses features.

Il est tout aussi important, mais bien plus difficile (il faut de l'introspection), de repérer des cas de YAGNI sur des détails au quotidien.

S'applique seulement dans les cas où il sera facile de changer le code par la suite. Si le code est actuellement difficile à modifier, faire du refactoring pour le rendre plus malléable est OK. Il faut toujours imaginer les coût de chaque alternative et les comparer.
