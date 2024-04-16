from calculator import calculer_moyenne

def test_calculer_moyenne():
    valeurs = [10, 20, 30, 40, 50]
    assert calculer_moyenne(valeurs) == 30