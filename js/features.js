// ÉTAPE 2 — Transformer les 21 points en 63 nombres comparables
//
// 🎯 Ta mission : le code est là, mais 3 lignes sont fausses. Corrige-les, puis supprime
//    la ligne « return null » au début de la fonction.
//
// Rappel des numéros : 0 = poignet, 9 = base du majeur (voir la slide « Les 21 points »).

const POIGNET = 0;
const BASE_MAJEUR = 9;

export function normaliser(points, cote = "Right", ratio = 1) {
  return null; // ← TODO 2.4 : supprime cette ligne quand les TODO 2.1 à 2.3 sont faits

  const origine = points[POIGNET];

  // TODO 2.1 : la taille de la main se mesure entre le poignet et la base du majeur.
  //            Remplace POIGNET par la bonne constante dans la ligne ci-dessous.
  const ref = points[POIGNET];
  const taille = Math.hypot((ref.x - origine.x) * ratio, ref.y - origine.y, (ref.z - origine.z) * ratio) || 1;

  // TODO 2.2 : pour une main gauche (cote === "Left"), miroir doit valoir -1, sinon 1.
  //            Indice : const miroir = condition ? valeurSiVrai : valeurSiFaux;
  const miroir = 1;

  const vecteur = [];
  for (const p of points) {
    // TODO 2.3 : chaque coordonnée doit être relative au poignet, puis divisée par la taille.
    //            Les lignes x et z sont déjà correctes : écris la ligne y sur le même modèle.
    vecteur.push(
      (miroir * (p.x - origine.x) * ratio) / taille,
      p.y,
      ((p.z - origine.z) * ratio) / taille
    );
  }
  return vecteur; // 21 points × 3 coordonnées = 63 nombres
}

// 🎯 Défi : pourquoi utilise-t-on la base du majeur (9) et pas le bout du majeur (12) ?
