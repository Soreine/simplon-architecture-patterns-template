
# Design Patterns

- Adapter, Facade, Proxy, Decorator
- Mediator
- Composite
- Iterator
- Strategy
- Singleton
- Chain of Responsibility

Et en bonus

- Factory, Prototype
- Observer
- Command

## What is a design pattern ?

Les design patterns (patron de conception), sont des solutions populaires a des problèmes courant en programmation. Ce sont des schémas qui servent de guide pour écrire du code propre. Un design pattern est abstrait et doit être adapté à chaque cas concret pour être utilisé, contrairement aux librairies que l'on peut importer et utiliser directement, et contrairement aux algorithmes qui sont des implémentations détaillées de certains problèmes.

Analogie avec la cuisine : un algorithme est une recette (ex. cuisiner un riz cantonais), une librairie est une préparation (ex. de la pate a cookie toute faite),  et un design pattern est une technique de cuisine (ex. ajouter un élément sucré à un plat peut équilibrer l'acidité et l'amertume de celui-ci).

## Interet des design patterns

-   Connaitre des patterns peut fournir de bonnes idées pour résoudre des cas concrets.
-   Comprendre des patterns permet de prendre conscience des problèmes qu'ils resolvent.
-   Reconnaitre un pattern dans un code existant rend plus facile la compréhension et l'usage de ce code.
-   Les designs patterns sont des concepts connus qui facilitent la communication dans une equipe. Quand quelqu'un suggere d'utiliser un Singleton on comprend tout de suite ce qu'il veut dire, ou bien lorsqu'un developpeur lit le code d'un autre et tombe sur un Singleton il comprend tout de suite l'idée derrière l'implémentation.

Mais

-   Parfois on a tendance a appliquer des patterns sans que ce soit nécessaire, ce qui complexifie inutilement le code (voir YAGNI).
-   Les design patterns sont surtout populaire en POO, et pourraient n'être que solutions à des problèmes propre à la POO. Par exemple, en programmation fonctionnelle, les principes de conceptions seront différents, tout comme le type de problèmes de conception qui seront rencontrés https://fsharpforfunandprofit.com/fppatterns/


## Chain of Responsibility

Express utilise ça (les Handlers sont les middlewares). Le traitement d'une donnée (qui peut etre issue d'un évènement, comme une requête entrante) est passé à une chaine de handlers. Chaque handler peut agir sur la donnée ou bien déléguer au prochain handler. Les handlers sont composés un peu comme des bout de tuyaux emboîtés.

https://refactoring.guru/design-patterns/chain-of-responsibility

## Adapter, Facade, Proxy et Decorator

Tous ces patterns ont pour point commun d'être des intermédiaires entre deux interfaces.

Adapter: Résout une différence d'interface, en transformant des paramètres ou des sorties d'un format à l'autre.
Decorator: Augmente

## Singleton

https://refactoring.guru/design-patterns/singleton

## Composite

Bof 
https://refactoring.guru/design-patterns/composite


## Command

https://refactoring.guru/design-patterns/command

## Iterator

https://refactoring.guru/design-patterns/iterator

## Mediator

https://refactoring.guru/design-patterns/mediator

## Observer

https://refactoring.guru/design-patterns/observer

## Strategy

https://refactoring.guru/design-patterns/strategy