import { galleryDetails, photoDetails } from "../data/index.js";
import Component from "../utils/Component.js";

class Gallery extends Component {
    constructor() {
        super();

        this.section = document.createElement("section");
        this.title = document.createElement("h2");
        this.description = document.createElement("p");
        this.container = document.createElement("div");
    }

    render() {
        this.section.id = "gallery";

        this.section.classList.add("work");
        this.title.classList.add("work-title");
        this.description.classList.add("work-subtitle");
        this.container.classList.add("container");
        this.container.classList.add("top");

        this.title.innerText = galleryDetails.title;
        this.description.innerText = galleryDetails.description;

        const ul = document.createElement("ul");

        photoDetails.forEach((data) => {
            const a = document.createElement("a");
            const img = document.createElement("img");
            const li = document.createElement("li");

            a.href = data.href;
            img.src = data.src;
            img.loading = "lazy";
            img.alt = "photo";

            a.appendChild(img);
            li.appendChild(a);
            ul.appendChild(li);
        });

        this.container.appendChild(ul);

        photoDetails.forEach((data) => {
            const a = document.createElement("a");
            const img = document.createElement("img");

            a.href = data.lightbox_href;
            a.className = "lightbox trans";
            a.id = data.id;

            img.src = data.src;
            img.loading = "lazy";
            img.alt = "photo";

            a.appendChild(img);
            this.container.appendChild(a);
        });

        this.section.appendChild(this.title);
        this.section.appendChild(this.description);
        this.section.appendChild(this.container);

        return this.section;
    }
}

export default Gallery;
