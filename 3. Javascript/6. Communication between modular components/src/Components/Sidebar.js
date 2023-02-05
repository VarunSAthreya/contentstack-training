import Component from "../lib/Component.js";

class Sidebar extends Component {
    constructor() {
        super();

        this.aside = document.createElement("aside");
        this.title = document.createElement("h2");
        this.previewList = document.createElement("ul");
        this.totalPrice = document.createElement("h2");
    }

    static addPreview(product) {
        const cartPreview = document.querySelector(".cart-preview");
        cartPreview.style.display = "block";

        const quantity = document.getElementById(`${product.id}-quantity`);
        const totalPrice = document.getElementById("total-price");
        totalPrice.innerText =
            Number(totalPrice.innerText) + product.data.price;

        if (quantity) {
            quantity.innerText = Number(quantity.innerText) + 1;
            return;
        }

        let item = document.createElement("li");
        item.id = `${product.id}-preview`;
        item.innerHTML = `
            <div class="cart-preview-item">
                <img src="${product.data.src}" alt="${product.data.name}">
                <h3>${product.data.name}</h3>
                <p id="${product.id}-quantity">${product.quantity.innerText}</p>
                <hr/>
            </div>
        `;

        const cartPreviewList = document.querySelector(".cart-preview-list");
        cartPreviewList.appendChild(item);
    }

    static removeFromPreview(product) {
        const quantity = document.getElementById(`${product.id}-quantity`);
        const totalPrice = document.getElementById("total-price");
        totalPrice.innerText =
            Number(totalPrice.innerText) - product.data.price;

        if (quantity.innerText === "1") {
            document.getElementById(`${product.id}-preview`).remove();
            return;
        }
        quantity.innerText = Number(quantity.innerText) - 1;
    }

    render() {
        this.aside.classList.add("cart-preview");
        this.previewList.classList.add("cart-preview-list");
        this.title.innerText = "Preview";
        this.totalPrice.innerText = "0";
        this.totalPrice.id = "total-price";

        this.aside.appendChild(this.title);
        this.aside.appendChild(this.totalPrice);
        this.aside.appendChild(this.previewList);

        return this.aside;
    }
}

export default Sidebar;
