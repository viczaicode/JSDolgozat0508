import Szamlalo from "./Szamlalo.js";

export default class Kerdes {

    #obj = {};
    #szuloElem;
    #index;
    #gomb;
    #inputElem;


    constructor(obj, szuloElem, index) {
        this.#obj = obj;
        this.#szuloElem = szuloElem;
        this.#index = index;
        this.megjelenit();
        this.#gomb = this.#szuloElem.querySelector(".kerdes:last-child button");
        this.#inputElem = this.#szuloElem.querySelector(".kerdes:last-child input");
        this.esemenykezelo();
        

        
    }

    esemenykezelo() {
        this.#gomb.addEventListener("click", ()=> {
            window.dispatchEvent(new CustomEvent("kivalaszt", {detail:this.#obj}));
            this.ellenoriz();
            // Always increment counter when OK button is clicked
            window.dispatchEvent(new CustomEvent("kerdesValasz"));
        });
    }

    megjelenit() {
        
        let html=`
            <div class="kerdes">
                <p>${this.#obj.mondat} <b>(${this.#obj.alap})</b></p>
                <input>
                <button>OK</button>
        `;
        this.#szuloElem.insertAdjacentHTML("beforeend", html);
    }

    ellenoriz() {
        const beirtValasz = this.#inputElem.value;
        
        if (this.#obj.valasztas.includes(beirtValasz)) {
            this.#inputElem.style.backgroundColor = "lightgreen";
            this.#inputElem.style.borderColor = "green";
            this.#gomb.disabled = true
        } else {
            this.#inputElem.style.backgroundColor = "lightpink";
            this.#inputElem.style.borderColor = "red";
        }
    }

}