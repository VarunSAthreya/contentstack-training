import Component from "../lib/Component.js";

class Lightbox extends Component {
    constructor(data) {
        super();

        this.container = document.createElement("div");
        this.data = data;
    }

    render() {
        this.container.id = "ligthbox";
        this.data.forEach((prod) => {
            const a = document.createElement("a");
            const img = document.createElement("img");

            a.href = prod.lightbox_href;
            a.id = prod.lightbox_id;
            a.classList.add("lightbox");
            a.classList.add("trans");

            img.loading = "lazy";
            img.src = prod.src;
            img.alt = prod.name;

            a.appendChild(img);
            this.container.appendChild(a);
        });

        return this.container;
    }
}

export default Lightbox;
