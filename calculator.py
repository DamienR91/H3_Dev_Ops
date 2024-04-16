def calculer_moyenne(valeurs):
    if not valeurs:
        return 0
    return sum(valeurs) / len(valeurs)