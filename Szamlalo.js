export default class Szamlalo {
    #ertek;
    constructor(ertek2) {
        this.#ertek = this.ertek;
        this.megjelenit(ertek2);
    }


    megjelenit(ertek2) {
        let html = `
        <p>Pontszám: ${this.#ertek+1}</p>
        
        `;
    }
}