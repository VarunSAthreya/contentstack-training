import Component from "../lib/Component.js";
class Banner extends Component {
    constructor(data) {
        super();
        this.data = data;

        this.banner = document.createElement("div");

        this.imageContainer = document.createElement("div");
        this.image = document.createElement("img");
        this.overlay = document.createElement("div");

        this.textContainer = document.createElement("div");
        this.title = document.createElement("h3");
        this.description = document.createElement("p");
        this.a = document.createElement("a");
        this.button = document.createElement("button");
    }

    render() {
        this.banner.classList.add("project");
        this.imageContainer.classList.add("img-container");
        this.overlay.classList.add("img-overlay");
        this.textContainer.classList.add("project-text-container");
        this.title.classList.add("project-text-title");
        this.description.classList.add("project-text-subtitle");

        this.a.target = "_blank";
        this.a.rel = "noopener noreferrer";
        this.button.innerText = "Repository";

        this.image.src = this.data.image.src;
        this.image.alt = this.data.image.alt;
        this.image.loading = "lazy";

        this.title.innerText = this.data.title;
        this.description.innerText = this.data.description;
        this.a.href = this.data.href;

        this.imageContainer.appendChild(this.image);
        this.imageContainer.appendChild(this.overlay);

        this.a.appendChild(this.button);

        this.textContainer.appendChild(this.title);
        this.textContainer.appendChild(this.description);
        this.textContainer.appendChild(this.a);

        this.banner.appendChild(this.imageContainer);
        this.banner.appendChild(this.textContainer);

        return this.banner;
    }
}
export default Banner;
