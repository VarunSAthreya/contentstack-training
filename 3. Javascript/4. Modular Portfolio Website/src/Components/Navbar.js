import { navTitle, profileLinks } from "../data/index.js";
import Component from "../utils/Component.js";

class NavBar extends Component {
    constructor() {
        super();

        this.nav = document.createElement("nav");
        this.title = document.createElement("h2");
        this.profileLinksContainer = document.createElement("div");
    }

    render() {
        this.title.innerText = navTitle;
        this.profileLinksContainer.classList.add("nav-links");

        profileLinks.forEach((profileLink, i) => {
            const img = document.createElement("img");
            img.src = profileLink.img;
            img.alt = profileLink.alt;

            const a = document.createElement("a");
            a.href = profileLink.url;
            a.target = "_blank";
            a.rel = "noopener noreferrer";

            a.appendChild(img);

            this.profileLinksContainer.appendChild(a);
        });

        this.nav.appendChild(this.title);
        this.nav.appendChild(this.profileLinksContainer);

        return this.nav;
    }
}

export default NavBar;
