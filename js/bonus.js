// BONUS — Évaluer le modèle, mémoriser les records, jouer un son
//
// 🎯 Pour ceux qui ont fini : trois fonctions à écrire, de la plus simple à la plus difficile.
import { predire } from "./knn.js";

// B1 (facile) — Joue un petit son. Le code est fourni en commentaire : décommente-le !
let audio = null;
export function bip(frequence = 880, duree = 0.12) {
  // audio ??= new AudioContext();
  // const osc = audio.createOscillator();
  // const gain = audio.createGain();
  // osc.frequency.value = frequence;                                  // la note jouée
  // gain.gain.setValueAtTime(0.15, audio.currentTime);                // le volume
  // gain.gain.exponentialRampToValueAtTime(0.001, audio.currentTime + duree);
  // osc.connect(gain).connect(audio.destination);
  // osc.start();
  // osc.stop(audio.currentTime + duree);
}

// B2 (moyen) — Garde le meilleur temps pour chaque mot ; renvoie l'ancien record (ou null)
const CLE_RECORDS = "signinfo-records-v1";
export function enregistrerRecord(mot, secondes) {
  // Indices :
  //   1. let records = {}; puis essaie de lire JSON.parse(localStorage.getItem(CLE_RECORDS)) ?? {}
  //   2. const ancien = records[mot] ?? null;
  //   3. si ancien === null ou secondes < ancien : records[mot] = secondes, puis sauvegarde avec
  //      localStorage.setItem(CLE_RECORDS, JSON.stringify(records))
  //   4. return ancien;
  return null;
}

// B3 (difficile) — Évaluer l'IA : chaque exemple est caché, puis prédit à partir des autres.
// Doit renvoyer { taux, total, parLettre: { A: { bons, total } }, confusions: { "M → N": 3 } }
export function evaluer(exemples) {
  // Indices :
  //   - parcours chaque lettre et chacun de ses exemples (liste.forEach((ex, i) => ...))
  //   - « autres » = tous les exemples, sauf celui-ci :
  //       const autres = { ...exemples, [lettre]: liste.filter((_, j) => j !== i) };
  //   - const trouve = predire(autres, ex)?.lettre ?? "?";
  //   - compte les bonnes réponses, et note les erreurs dans confusions[`${lettre} → ${trouve}`]
  return null;
}
