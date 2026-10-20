// ÉTAPE 3 — Mémoriser les exemples enregistrés pour chaque lettre
//
// 🎯 Ta mission : écrire le code de 5 méthodes, en t'aidant des indices.
//    Les méthodes effacerLettre, toutEffacer, exporter et importer sont fournies.
const CLE_STOCKAGE = "signinfo-donnees-v1";

export class Dataset {
  constructor() {
    this.exemples = {};  // { "A": [[63 nombres], [63 nombres], ...], "B": [...] }
    this.vignettes = {}; // { "A": "data:image/jpeg;base64,..." } photo de référence
    this.charger();
  }

  // Ajoute un exemple ; on arrondit à 4 décimales pour alléger le stockage
  ajouter(lettre, vecteur) {
    // TODO 3.1 : si la lettre n'a pas encore de liste, crée-la, puis ajoute le vecteur.
    // Indices :
    //   if (!this.exemples[lettre]) this.exemples[lettre] = [];
    //   this.exemples[lettre].push( ... );
    // Bonus : arrondis chaque nombre à 4 décimales avec vecteur.map((n) => Math.round(n * 10000) / 10000)
  }

  nombre(lettre) {
    // TODO 3.2 : renvoie la longueur de la liste de cette lettre, ou 0 si elle n'existe pas.
    // Indice : this.exemples[lettre]?.length ?? 0
    return 0;
  }

  total() {
    // TODO 3.3 : additionne le nombre d'exemples de toutes les lettres.
    // Indice : parcours Object.values(this.exemples) avec une boucle for...of
    //          et ajoute liste.length à un compteur.
    return 0;
  }

  effacerLettre(lettre) {
    delete this.exemples[lettre];
    delete this.vignettes[lettre];
    this.sauver();
  }

  toutEffacer() {
    this.exemples = {};
    this.vignettes = {};
    this.sauver();
  }

  // localStorage : les données restent dans le navigateur même après rechargement
  sauver() {
    // TODO 3.4 : enregistre les données dans le navigateur.
    // Indice : localStorage.setItem(CLE_STOCKAGE, JSON.stringify({ exemples: this.exemples, vignettes: this.vignettes }));
  }

  charger() {
    // TODO 3.5 : relis les données au démarrage.
    // Indices :
    //   const texte = localStorage.getItem(CLE_STOCKAGE);
    //   if (!texte) return;                      // rien d'enregistré pour l'instant
    //   const donnees = JSON.parse(texte);
    //   puis remplis this.exemples et this.vignettes avec donnees.exemples et donnees.vignettes
  }

  // --- Fourni : export / import pour partager un jeu de données entre postes ---
  exporter() {
    const blob = new Blob([JSON.stringify({ exemples: this.exemples, vignettes: this.vignettes })], { type: "application/json" });
    const lien = document.createElement("a");
    lien.href = URL.createObjectURL(blob);
    lien.download = "signinfo-donnees.json";
    lien.click();
    URL.revokeObjectURL(lien.href);
  }

  async importer(fichier) {
    const donnees = JSON.parse(await fichier.text());
    for (const [lettre, liste] of Object.entries(donnees.exemples ?? {})) {
      this.exemples[lettre] = [...(this.exemples[lettre] ?? []), ...liste];
    }
    Object.assign(this.vignettes, donnees.vignettes ?? {});
    this.sauver();
  }
}
