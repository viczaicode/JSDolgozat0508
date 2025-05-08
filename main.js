import Kerdesek from "./Kerdesek.js";
import { szenvedoMondatok } from "./Angol.js";

let pontszam = 0;
const pontElem = document.querySelector(".pontszam");

function frissitPontszam() {
    pontElem.textContent = `Pontszám: ${pontszam}`;
}

window.addEventListener("kivalaszt", (event) => {
    const obj = event.detail;

    if (obj.valasztas.includes(document.querySelectorAll("input"))) {
        pontszam++;
        frissitPontszam();
    }
});

let kerdesek = new Kerdesek(szenvedoMondatok, document.querySelector(".tarolo"));
