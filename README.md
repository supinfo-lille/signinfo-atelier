# SignINFO — l'alphabet de la LSF avec sa webcam

Atelier SUPINFO Lille : on construit, en JavaScript et avec MediaPipe, une application
qui apprend à reconnaître l'alphabet dactylologique de la LSF, puis un jeu où l'on
épelle des mots que l'IA valide lettre par lettre.

## Lancer le projet

Les modules JavaScript et la webcam ne fonctionnent pas en ouvrant `index.html` en double-clic :
il faut un petit serveur local.

- VS Code : extension **Live Server**, clic droit sur `index.html` → *Open with Live Server*
- ou, dans un terminal : `python -m http.server 8000` puis http://localhost:8000

Navigateur conseillé : Chrome ou Edge récent. Connexion Internet nécessaire (MediaPipe est chargé depuis Internet).

## Les étapes

Chaque fichier de `js/` commence par **🎯 Ta mission**, et les endroits à modifier sont marqués **TODO**.
La difficulté monte petit à petit :

| Étape | Ce que tu fais                                | Fichier          | Type d'exercice        |
|-------|-----------------------------------------------|------------------|------------------------|
| 1     | Allumer la webcam et dessiner la main         | `js/camera.js`   | du code à décommenter  |
| 2     | Transformer les 21 points en 63 nombres       | `js/features.js` | 3 lignes à corriger    |
| 3     | Enregistrer les exemples de chaque lettre     | `js/dataset.js`  | du code à écrire, avec indices |
| 4     | Reconnaître la lettre (k plus proches voisins)| `js/knn.js`      | du code à écrire, avec indices |
| 5     | Le jeu : épeler un mot                        | `js/game.js`     | du code à écrire, avec indices |
| Bonus | Son, records, évaluation de l'IA              | `js/bonus.js`    | du plus facile au plus difficile |

`js/main.js` est fourni : il relie l'interface à tes fichiers, tu n'as pas besoin d'y toucher.

## Bloqué ? Une branche Git par étape

La branche `main` est ton point de départ. Chaque branche `etape-1` à `etape-5`, puis `bonus`,
contient **la solution** de l'étape correspondante :

```bash
git stash            # met ton travail de côté
git checkout etape-3 # repars de la solution de l'étape 3
```

La branche `bonus-mouvement` montre en plus comment reconnaître J et Z, les lettres qui se tracent dans l'air.

## À savoir

- On apprend ici l'**alphabet** (dactylologie), pas la LSF complète : la plupart des mots LSF ont leur propre signe.
- J et Z se font avec un mouvement : notre IA analyse une image à la fois, ces lettres sont « passées » dans le jeu.
- Tes exemples restent dans ton navigateur. Utilise *Exporter* pour les garder ou les partager.
