// ÉTAPE 1 — Webcam + détection de la main avec MediaPipe
//
// 🎯 Ta mission : le code est déjà écrit, mais il est en commentaire (les lignes commencent par //).
//    1. Supprime la ligne « throw new Error(...) » de creerDetecteur().
//    2. Dans chaque fonction, retire les // au début des lignes marquées « À DÉCOMMENTER ».
//    Astuce VS Code : sélectionne les lignes, puis Ctrl + / (ou Cmd + / sur Mac).
//    Lis bien les commentaires au passage : ils expliquent ce que fait chaque ligne.
import { HandLandmarker, FilesetResolver, DrawingUtils } from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14";

// Adresses du moteur MediaPipe et du modèle de détection de la main
const WASM = "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm";
const MODELE = "https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task";

// 1.1 Charge le modèle de détection de la main (une seule main suffit pour l'alphabet)
export async function creerDetecteur() {
  throw new Error("Étape 1 à compléter : décommente le code de js/camera.js");

  // ↓ À DÉCOMMENTER
  // const vision = await FilesetResolver.forVisionTasks(WASM);   // télécharge le moteur
  // const options = (delegate) => ({
  //   baseOptions: { modelAssetPath: MODELE, delegate },           // le modèle, sur GPU ou CPU
  //   runningMode: "VIDEO",                                        // on analyse un flux vidéo
  //   numHands: 1,                                                 // une seule main
  // });
  // try {
  //   return await HandLandmarker.createFromOptions(vision, options("GPU")); // carte graphique
  // } catch (e) {
  //   return await HandLandmarker.createFromOptions(vision, options("CPU")); // sinon processeur
  // }
}

// 1.2 Demande l'accès à la webcam et branche l'image sur la balise <video>
export async function demarrerWebcam(video) {
  // ↓ À DÉCOMMENTER
  // const flux = await navigator.mediaDevices.getUserMedia({
  //   video: { width: 640, height: 480, facingMode: "user" },      // caméra de face, 640 × 480
  //   audio: false,
  // });
  // video.srcObject = flux;                                        // la vidéo affiche la caméra
  // await new Promise((ok) => (video.onloadedmetadata = ok));      // on attend qu'elle soit prête
  // await video.play();
}

// 1.3 Analyse chaque nouvelle image de la vidéo et transmet le résultat à main.js
export function lancerBoucle(video, detecteur, surResultat) {
  // ↓ À DÉCOMMENTER
  // let dernierTemps = -1;
  // function tour() {
  //   if (video.currentTime !== dernierTemps) {                    // nouvelle image ?
  //     dernierTemps = video.currentTime;
  //     const resultat = detecteur.detectForVideo(video, performance.now()); // MediaPipe cherche la main
  //     surResultat(resultat);                                     // on envoie les 21 points à main.js
  //   }
  //   requestAnimationFrame(tour);                                 // et on recommence à l'image suivante
  // }
  // tour();
}

// 1.4 Dessine le squelette de la main (21 points + leurs liaisons) sur le canvas
export function creerDessinateur(ctx) {
  // ↓ À DÉCOMMENTER (attention : il y a deux blocs, avant et dans la fonction dessiner)
  // const outils = new DrawingUtils(ctx);
  return function dessiner(resultat) {
    // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);    // on efface l'image précédente
    // for (const points of resultat.landmarks) {
    //   outils.drawConnectors(points, HandLandmarker.HAND_CONNECTIONS, { color: "#2EE6B0", lineWidth: 4 }); // les os
    //   outils.drawLandmarks(points, { color: "#FFFFFF", fillColor: "#5B3DF5", lineWidth: 2, radius: 5 }); // les points
    // }
  };
}

// 🎯 Défi : change les couleurs (color, fillColor) ou la taille des points (radius) !
