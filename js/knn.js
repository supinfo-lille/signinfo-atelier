// ÉTAPE 4 — Reconnaître une lettre avec les k plus proches voisins (KNN)
//
// 🎯 Ta mission : compléter les deux fonctions en suivant les indices.
//    Rappel : on compare le signe actuel à TOUS les exemples, on garde les 5 plus proches,
//    et chacun vote pour sa lettre (voir la slide « Les 5 plus proches voisins votent »).

export const K = 5;
export const DISTANCE_MAX = 1.5; // au-delà, le signe ne ressemble à rien de connu

// 4.1 Distance entre deux signes (deux listes de 63 nombres)
export function distance(a, b) {
  let somme = 0;
  // TODO 4.1 : pour chaque position i, calcule l'écart d = a[i] - b[i]
  //            et ajoute d * d à somme.
  // Indice : for (let i = 0; i < a.length; i++) { ... }
  return Math.sqrt(somme); // racine carrée : c'est Pythagore, en 63 dimensions !
}

// 4.2 Trouver la lettre la plus probable
export function predire(exemples, vecteur, k = K) {
  // Étape A — on calcule la distance à chaque exemple (fourni)
  const voisins = [];
  for (const [lettre, liste] of Object.entries(exemples)) {
    for (const ex of liste) voisins.push({ lettre, d: distance(vecteur, ex) });
  }
  if (voisins.length < k) return null; // pas assez d'exemples enregistrés

  // TODO 4.2 : trie les voisins du plus proche au plus loin.
  // Indice : voisins.sort((a, b) => a.d - b.d);

  const proches = voisins.slice(0, k); // les k premiers = les k plus proches
  if (proches[0].d > DISTANCE_MAX) return null;

  // TODO 4.3 : fais voter les voisins. votes doit ressembler à { "A": 4, "B": 1 }
  const votes = {};
  // Indice : for (const v of proches) votes[v.lettre] = (votes[v.lettre] ?? 0) + 1;

  // Étape C — la lettre qui a le plus de voix gagne (fourni)
  const classement = Object.entries(votes).sort((a, b) => b[1] - a[1]);
  if (!classement.length) return null;
  const [lettre, nbVotes] = classement[0];
  return { lettre, confiance: nbVotes / k };
}

// 🎯 Défi : essaie K = 1 puis K = 15. Que se passe-t-il ?
