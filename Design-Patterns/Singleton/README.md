# Instructions

Plusieurs parties du programme ont besoin de générer des IDs uniques. Ils utilisent tous des `IdGenerator`, mais il y a des conflits d'ID à la fin.

Modifier la class `IdGenerator` pour en faire un singleton, afin que tous les modules partagent la même source d'IDs.
