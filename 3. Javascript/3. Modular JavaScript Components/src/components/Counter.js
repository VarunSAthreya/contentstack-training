import { generateUniqueId } from "../utils/index.js";

class Counter {
    constructor() {
        this.id = generateUniqueId({ prefix: "counter" });

        this.count = 0;

        this.counterContainer = document.createElement("div");
        this.increment = document.createElement("button");
        this.decrement = document.createElement("button");
        this.buttons = document.createElement("div");
        this.countValue = document.createElement("p");
        this.header = document.createElement("h1");

        this.isMounted = false;

        this.#setDefaultValues();
    }

    #setDefaultValues() {
        this.counterContainer.id = this.id;

        this.counterContainer.className = "counterContainer";
        this.header.className = "counterHeading";
        this.countValue.className = "countValue";
        this.buttons.className = "buttons";
        this.increment.className = "increment";
        this.decrement.className = "decrement";

        this.header.innerText = "Counter";
        this.countValue.innerText = " 00";
        this.increment.innerText = "+";
        this.decrement.innerText = "-";
    }

    #getNegativeVal = (count) => {
        const val = count * -1;
        if (val > 9) return "-" + val;
        return "-0" + val;
    };

    #updateValue = () => {
        const val =
            this.count < 10
                ? this.count < 0
                    ? this.#getNegativeVal(this.count)
                    : " 0" + this.count
                : this.count;

        this.countValue.innerText = val;
    };

    #incrementFunction = (_) => {
        this.count++;
        this.#updateValue();
    };

    #decrementFunction = (_) => {
        this.count--;
        this.#updateValue();
    };

    #render() {
        this.increment.onclick = this.#incrementFunction;
        this.decrement.onclick = this.#decrementFunction;

        this.buttons.appendChild(this.increment);
        this.buttons.appendChild(this.decrement);

        this.counterContainer.appendChild(this.header);
        this.counterContainer.appendChild(this.countValue);
        this.counterContainer.appendChild(this.buttons);

        return this.counterContainer;
    }

    mount(parent) {
        if (this.isMounted) {
            console.log("Counter Already Mounted!");
            return;
        }

        this.isMounted = true;

        if (parent) {
            parent.appendChild(this.#render());
            return;
        }

        document.body.appendChild(this.#render());
    }
}

export default Counter;
