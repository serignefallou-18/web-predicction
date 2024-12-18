import pickle

try:
    with open('../IA/knn_model.pkl', 'rb') as file:
        knn = pickle.load(file)
        print("Modèle chargé avec succès :", knn)
except FileNotFoundError:
    print("Fichier modèle introuvable.")
except Exception as e:
    print("Erreur lors du chargement :", e)
