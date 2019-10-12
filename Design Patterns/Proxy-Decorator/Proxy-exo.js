/*
Instructions

Nous allons créer un petit service permettant de connaître la capitale d'un pays. Un input permet de rentrer le nom d'un pays en anglais, et si le pays existe, le nom de sa capitale est affiché.

Pour avoir ses informations, nous utiliserons 
http://country.io/data/

1. Créer une `CountryDB` qui implémente les fonctions suivantes:

- constructor(countryNamesUrl, countryCapitalsUrl)
  Initialise un `CountryDB` qui utilisera les deux URLs données dans les méthodes qui suivent.

- fetchCountryNames() : renvoie une Promise contenant le JSON présent à `countryNamesUrl`

- fetchCountryCapitals() : renvoie une Promise contenant le JSON présent à `countryCapitalsUrl`

En utilisant...
  countryNamesUrl = 'http://country.io/names.json'
  countryCapitalsUrl = 'http://country.io/capital.json'
... tester le module en affichant dans l'UI les deux JSON de manière brute.

2. Ajouter à ce module une fonction `findCountryCapital(countryName)` qui prend le nom d'un pays et renvoie une Promise contenant le nom de sa capitale, ou bien null si le pays n'a pas été trouvé.

-----
Remarque: L'interface publique de CountryDB (ce qui intéresse le reste du code) ne sera que ceci:

interface CountryDB {
  constructor(countryNamesUrl, countryCapitalsUrl)
  findCountryCapital(countryName)
}

On suppose par la suite que le reste du code n'a pas connaissance d'autre chose à propos de CountryDB
----

3. Créer un input dans lequel on peut taper un nom de pays, et quand ce pays existe, le nom de sa capitale est affichée en dessous.

4. Créer un Decorator autour de `CountryDB`, par composition, qui implémente la même interface, mais loggue les appels à la méthode `findCountryCapital`.
Vérifier que chaque appel est effectivement loggué.

5. Créer un Proxy autour du module `CountryDB`, par composition, qui va garder un cache des résultats de `findCountryCapital`, pour économiser les requêtes.
Vérifier que des appels à `findCountryCapital` sont effectivement économisés.

*/

class CountryDB {
  // TODO
}
