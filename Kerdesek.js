import Kerdes from "./Kerdes.js";

export default class Kerdesek {


    #lista = [];
    #szuloElem;
    constructor(lista, szuloElem) {
        this.#lista = lista;
        this.#szuloElem = szuloElem;
        // Preserve the first two elements (description)
        const leirasok = this.#lista.slice(0, 2);
        // Get only the kérdések
        const kerdesek = this.#lista.slice(2);
        // Randomize kérdések
        const kevertKerdesek = this.kever(kerdesek);
        // Rebuild lista with descriptions + random questions
        this.#lista = [...leirasok, ...kevertKerdesek];
        this.peldanyosit();
    }


    peldanyosit() {
        for (let index = 2; index < this.#lista.length; index++) {
            new Kerdes(this.#lista[index], this.#szuloElem, index);   
        }
    }


    kever(array) {
        // Fisher-Yates shuffle algorithm
        const ujTomb = [...array];
        for (let i = ujTomb.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [ujTomb[i], ujTomb[j]] = [ujTomb[j], ujTomb[i]];
        }
        return ujTomb;
    }


    



}