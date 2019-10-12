# Architecture

## C'est quoi ?

C'est un concept assez vague. On peut le comparer à un plan d'architecte. C'est une représentation abstraite, qui organise les élements d'un système (les parties d'une maison), décrit comment ils sont agencés entre eux (où passe l'évacuation d'eau), et comment ils répondent au besoin exprimé (3 pièce avec jardin).

- C'est définir les éléments d'un système, et la structure (les relations) qu'il y a entre eux.
- L'ensemble des décisions qui importent, qui ont un impact sur le produit fini.
- Les choix fondamentaux, difficiles à changer après coup.
- C'est une manière d'organiser un système qu'il soit plus facile à décrire (documenter), à maintenir, à recycler.

Composition du système (quoi), leur organisation (comment), et les décisions qui ont mené à cela (pourquoi)

La portée varie en fonction de la taille du projet. Les grosses et petites entreprises n'ont pas les même besoins.

## À quoi ça sert

Une bonne architecture permet de:

1. S'assurer de correspondre aux attentes du client, avant la réalisation
2. D'avoir une compréhension claire du fonctionnement du système à haut niveau
3. Réduire les risque de prendre de mauvaises décisions, qui coûtent cher
4. Rendre le système plus malléable, et donc d'accélerer le développement en rendant le refactoring peu couteux.

Dans les grand groupes, elle est cruciale pour permettre la communication avec les clients, et entre les équipes. Ceci à cause du nombre d'acteurs, et du nombre énorme de contraintes et de besoins.

Dans les startups, le challenge est d'avoir un impact le plus rapide et efficace. On s'autorise de la flexibilité et on controle la dette technique pour obtenir des résultats le plus rapidement possible sans pour autant etre bloqué par la suite. On permet et favorise l'itération.

## Quand est-ce qu'on en fait ?

1. Analyse. Quand on étudie un projet, on liste les besoins et les contraintes. On remarque ceux qui ont un fort impact, ceux qui peuvent changer, ceux qui sont implicites.
2. Conception. On explicite les choix de haut niveau qui répondent à l'analyse du besoin. On met par écrit une première architecture
3. Évaluation. Du début à la fin de la réalisation du projet, on vient questionner les choix faits, pour les valider ou les revoir.
4. Évolution. Après la réalisation du projet, il faut maintenir ou faire évoluer le produit, car l'environnement change. On continue de se poser des questions d'architecture.

## Se poser les questions

Pour devenir meilleur architecte, il faut régulièrement se poser les questions de l'architecture du projet. Il faut réfléchir à la conception, de haut niveau, jusqu'au bas niveau. Ensuite c'est de l'expérience. Attention de ne pas non plus vous paralyser sur ces questions. Avancer consciemment.

## Exercice

Réfléchissons ensemble à un projet donné.

1. Quelles sont les besoins et contraintes à fort impact ?
2. Comment peut-on y répondre ? En faire une représentation (un dessin et des mots)
3. Quels sont les bénéfices et risque de chacun de nos choix ?
4. Quels choix devront être réévalués au cours de la réalisation ?
