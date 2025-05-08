import Kerdes from "./Kerdes.js";

export default class Kerdesek {


    #lista = [];
    #szuloElem;
    constructor(lista, szuloElem) {
        this.#lista= lista;
        this.#szuloElem = szuloElem;
        this.peldanyosit();
    }


    peldanyosit() {
        for (let index = 2; index < this.#lista.length; index++) {
            new Kerdes(this.#lista[index], this.#szuloElem, index);   
        }
    }


    kever() {

    }


    



}