import { Manager } from "./manager.js";

class ViewElement {
    /** @type {HTMLDivElement} */
    #div;
    /** @type {Manager} */
    #manager;
    constructor(manager) {
        this.#manager = manager;
        this.#div = document.createElement("div");
    }
    /**
     * @param {HTMLElement} parentElement
     * @return {void}
     */
    appendTo(parentElement) {
        parentElement.appendChild(this.#div);
    }
    /**
     * @returns {Manager}
     */
    get manager() {
        return this.#manager;
    }
    /**
     * @returns {HTMLDivElement}
     */
    get div() {
        return this.#div;
    }
}

class ButtonElement extends ViewElement {
    constructor(manager) {
        super(manager);
        const button = document.createElement("button");
        button.textContent = "Lista lekérés";
        this.div.appendChild(button);
        button.addEventListener("click", (e) => {
            e.preventDefault();
            this.manager.getAllElement();
        });
    }
}

class EmptyButtonElement extends ViewElement {
    constructor(manager) {
        super(manager);
        const button = document.createElement("button");
        button.textContent = "Üres Lista lekérés";
        this.div.appendChild(button);
        button.addEventListener("click", (e) => {
            e.preventDefault();
            this.manager.getEmptyList();
        });
    }
}

class TableElement extends ViewElement {
    constructor(manager) {
        super(manager);
        
    }
}

export { ViewElement, ButtonElement, EmptyButtonElement, TableElement }