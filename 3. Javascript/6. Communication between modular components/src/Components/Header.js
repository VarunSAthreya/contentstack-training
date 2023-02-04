import Component from "../lib/Component.js";

class Header extends Component {
    constructor() {
        super();

        this.header = document.createElement("header");
        this.h1 = document.createElement("h1");
        this.iconContainer = document.createElement("div");
        this.icon = document.createElement("img");
        this.count = document.createElement("span");
    }

    static incrementCount() {
        const count = document.querySelector(".cart-count");

        count.innerHTML = Number(count.innerHTML) + 1;
    }

    render() {
        this.h1.innerText = "Product Listing";
        this.iconContainer.classList.add("cart-icon");

        this.icon.src = "./assets/cart.png";
        this.icon.alt = "cart image";

        this.count.innerText = 0;
        this.count.classList.add("cart-count");

        this.iconContainer.appendChild(this.icon);
        this.iconContainer.appendChild(this.count);
        this.header.appendChild(this.h1);
        this.header.appendChild(this.iconContainer);

        return this.header;
    }
}

export default Header;
