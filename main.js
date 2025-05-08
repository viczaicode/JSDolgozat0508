import Kerdesek from "./Kerdesek.js";
import Szamlalo from "./Szamlalo.js";
import { szenvedoMondatok } from "./Angol.js";

// Initialize the counter
const pontElem = document.querySelector(".pontszam");
const szamlalo = new Szamlalo(pontElem);

// Handle correct answers event
window.addEventListener("kivalaszt", (event) => {
    const obj = event.detail;
    const inputs = document.querySelectorAll("input");
    
    // This part of the code was incorrect and is not needed since 
    // we're now incrementing the counter directly from the Kerdes class
    // and validation is done there as well
});

// Initialize the questions
let kerdesek = new Kerdesek(szenvedoMondatok, document.querySelector(".tarolo"));
