// ÉTAPE 5 — La logique du jeu : valider le mot lettre par lettre
//
// 🎯 Ta mission : compléter normaliserMot() et mettreAJour() en suivant les indices.

export const DUREE_MAINTIEN = 0.8; // secondes à tenir le bon signe
export const CONFIANCE_MIN = 0.6;  // au moins 3 voisins sur 5 d'accord

// 5.1 "Élève !" → "ELEVE" : majuscules, sans accents, uniquement A à Z
export function normaliserMot(texte) {
  // TODO 5.1 : complète la chaîne de transformations (une par ligne).
  return texte
    .normalize("NFD")                    // sépare chaque lettre de son accent : é → e + ´
    .replace(/[\u0300-\u036f]/g, "")     // supprime les accents
    // Indice : ajoute .toUpperCase() pour passer en majuscules
    // Indice : ajoute .replace(/[^A-Z]/g, "") pour retirer tout ce qui n'est pas une lettre
    ;
}

export class Partie {
  constructor(mot) {
    this.mot = normaliserMot(mot);
    this.index = 0;      // position de la lettre à faire
    this.maintien = 0;   // temps passé à tenir le bon signe
    this.debut = performance.now();
    this.fin = null;
  }

  get lettreCourante() { return this.mot[this.index]; }
  get finie() { return this.index >= this.mot.length; }
  get progression() { return Math.min(1, this.maintien / DUREE_MAINTIEN); }
  get duree() { return ((this.fin ?? performance.now()) - this.debut) / 1000; }

  // 5.2 Appelée à chaque image : renvoie "validee", "gagne" ou null
  // prediction = { lettre, confiance } ou null ; dt = secondes depuis l'image précédente
  mettreAJour(prediction, dt) {
    if (this.finie) return null;

    // TODO 5.2 : bonSigne doit être vrai si la prédiction existe, que sa lettre est
    //            this.lettreCourante, et que sa confiance est >= CONFIANCE_MIN.
    // Indice : condition1 && condition2 && condition3
    const bonSigne = false;

    // TODO 5.3 : si bonSigne, ajoute dt à this.maintien ;
    //            sinon, retire 2 * dt (sans descendre sous 0 : Math.max(0, ...)).

    // TODO 5.4 : si this.maintien >= DUREE_MAINTIEN, renvoie this.lettreSuivante()

    return null;
  }

  lettreSuivante() {
    this.index++;
    this.maintien = 0;
    if (this.finie) {
      this.fin = performance.now();
      return "gagne";
    }
    return "validee";
  }
}

// 🎯 Défi : change DUREE_MAINTIEN. Quelle valeur rend le jeu ni trop facile, ni frustrant ?
