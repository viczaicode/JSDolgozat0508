export default class Szamlalo {
    #ertek;
    #szuloElem;
    
    constructor(szuloElem, kezdoErtek = 0) {
        this.#ertek = kezdoErtek;
        this.#szuloElem = szuloElem;
        this.megjelenit();
        this.esemenyTrigger();
    }

    esemenyTrigger() {
        window.addEventListener("kerdesValasz", () => {
            this.novel();
        });
    }

    novel() {
        this.#ertek++;
        this.megjelenit();
    }

    megjelenit() {
        this.#szuloElem.innerHTML = `Pontszám: ${this.#ertek}`;
    }
}