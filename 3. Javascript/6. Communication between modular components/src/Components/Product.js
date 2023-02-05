import Component from "../lib/Component.js";
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
class Product extends Component {
    constructor(data) {
        super();

        this.id = data.id;

        this.card = document.createElement("div");
        this.a = document.createElement("a");
        this.img = document.createElement("img");
        this.name = document.createElement("h3");
        this.price = document.createElement("p");

        this.buttonContainer = document.createElement("div");

        this.add = document.createElement("button");
        this.remove = document.createElement("button");
        this.quantity = document.createElement("p");

        this.data = data;
    }

    addToCart() {
        this.quantity.innerText = Number(this.quantity.innerText) + 1;
        Sidebar.addPreview(this);
        Header.incrementCount();
    }

    removeFromCart() {
        if (Number(this.quantity.innerText) < 1) return;

        this.quantity.innerText = Number(this.quantity.innerText) - 1;
        Sidebar.removeFromPreview(this);
        Header.decrementCount();
    }

    render() {
        this.card.id = this.id;
        this.card.classList.add("product-card");
        this.a.href = this.data.href;

        this.img.src = this.data.src;
        this.img.alt = this.data.name;

        this.name.innerText = this.data.name;
        this.price.innerText = this.data.price;

        this.add.innerText = "+";
        this.add.onclick = this.addToCart.bind(this);
        this.remove.innerText = "-";
        this.remove.onclick = this.removeFromCart.bind(this);

        this.quantity.innerText = 0;

        this.buttonContainer.classList.add("quantity-control");
        this.buttonContainer.appendChild(this.add);
        this.buttonContainer.appendChild(this.quantity);
        this.buttonContainer.appendChild(this.remove);

        this.a.appendChild(this.img);

        this.card.appendChild(this.a);
        this.card.appendChild(this.name);
        this.card.appendChild(this.price);
        this.card.appendChild(this.buttonContainer);

        return this.card;
    }
}

export default Product;
