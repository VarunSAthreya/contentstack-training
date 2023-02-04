import Component from "../lib/Component.js";
import Product from "./Product.js";

class ProductContainer extends Component {
    constructor(data) {
        super();

        this.container = document.createElement("div");
        this.data = data;
    }

    render() {
        this.container.classList.add("product-list");

        this.data.forEach((prod) => {
            const product = new Product(prod);
            product.mount(this.container);
        });

        return this.container;
    }
}

export default ProductContainer;
