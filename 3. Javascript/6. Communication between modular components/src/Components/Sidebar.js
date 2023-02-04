import Component from "../lib/Component.js";

class Sidebar extends Component {
    constructor() {
        super();

        this.aside = document.createElement("aside");
        this.h2 = document.createElement("h2");
        this.ul = document.createElement("ul");
    }

    static addPreview(product) {
        const cartPreview = document.querySelector(".cart-preview");
        cartPreview.style.display = "block";

        const quantity = document.getElementById(`${product.id}-quantity`);

        if (quantity) {
            quantity.innerText = Number(quantity.innerText) + 1;
            return;
        }

        let item = document.createElement("li");
        item.innerHTML = `
            <div class="cart-preview-item" id="${product.id}-preview">
                <img src="${product.data.src}" alt="${product.data.name}">
                <h3>${product.data.name}</h3>
                <h3 id="${product.id}-quantity">${product.quantity.innerText}</h3>
                <hr/>
            </div>
        `;

        const cartPreviewList = document.querySelector(".cart-preview-list");
        cartPreviewList.appendChild(item);
    }

    static removeFromPreview(product) {
        const quantity = document.getElementById(`${product.id}-quantity`);

        if (quantity.innerText === "1") {
            document.getElementById(`${product.id}-preview`).remove();
            return;
        }
        quantity.innerText = Number(quantity.innerText) - 1;
    }

    render() {
        this.aside.classList.add("cart-preview");
        this.ul.classList.add("cart-preview-list");
        this.h2.innerText = "Preview";

        this.aside.appendChild(this.h2);
        this.aside.appendChild(this.ul);

        return this.aside;
    }
}

export default Sidebar;
