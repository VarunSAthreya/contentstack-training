import Component from "../lib/Component.js";

class Sidebar extends Component {
    constructor() {
        super();

        this.aside = document.createElement("aside");
        this.h2 = document.createElement("h2");
        this.ul = document.createElement("ul");
    }

    static addPreview(product) {
        console.log(product);

        let item = document.createElement("li");
        item.innerHTML = `
            <div class="cart-preview-item">
                <img src="${product.data.src}" alt="${product.data.name}">
                <h3>${product.data.name}</h3>
            </div>
        `;

        const cartPreview = document.querySelector(".cart-preview");
        const cartPreviewList = document.querySelector(".cart-preview-list");

        cartPreviewList.appendChild(item);
        cartPreview.style.display = "block";
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
