import pytest

from mon_module import calculer_moyenne

def test_calculer_moyenne():
    valeurs = [10, 20, 30, 40, 50]

    moyenne = calculer_moyenne(valeurs)

    assert moyenne == 30
