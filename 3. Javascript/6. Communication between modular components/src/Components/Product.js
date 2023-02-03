import Component from "../lib/Component.js";
class Product extends Component {
    constructor(data) {
        super();

        this.id = data.id;

        this.card = document.createElement("div");
        this.a = document.createElement("a");
        this.img = document.createElement("img");
        this.h3 = document.createElement("h3");
        this.p = document.createElement("p");
        this.button = document.createElement("button");

        this.data = data;
    }

    render() {
        this.card.id = this.id;
        this.card.classList.add("product-card");
        this.a.href = this.data.href;

        this.img.src = this.data.src;
        this.img.alt = this.data.name;

        this.h3.innerText = this.data.name;
        this.p.innerText = this.data.price;
        this.button.innerText = "Add to Cart";

        this.a.appendChild(img);

        this.card.appendChild(this.a);
        this.card.appendChild(this.h3);
        this.card.appendChild(this.p);
        this.card.appendChild(this.button);

        return this.card;
    }
}

export default Product;
