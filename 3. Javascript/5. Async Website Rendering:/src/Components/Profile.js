import { personalDetails, profileButtons } from "../data/index.js";
import Component from "../lib/Component.js";

class Profile extends Component {
    constructor() {
        super();

        this.section = document.createElement("section");

        this.imageContainer = document.createElement("div");
        this.image = document.createElement("img");

        this.detailsContainer = document.createElement("div");
        this.detailsHeading = document.createElement("h1");
        this.detailsDescription = document.createElement("p");

        this.buttonsContainer = document.createElement("div");
    }

    render() {
        this.section.classList.add("hero");
        this.imageContainer.classList.add("hero-img");

        this.image.src = personalDetails.image.src;
        this.image.alt = personalDetails.image.alt;

        this.detailsHeading.innerText = personalDetails.heading;
        this.detailsDescription.innerText = personalDetails.description;

        profileButtons.forEach((ele) => {
            const a = document.createElement("a");
            const button = document.createElement("button");

            a.href = ele.href;
            button.classList.add(ele.classname);
            button.innerText = ele.text;

            a.appendChild(button);
            this.buttonsContainer.appendChild(a);
        });

        this.imageContainer.appendChild(this.image);
        this.detailsContainer.appendChild(this.detailsHeading);
        this.detailsContainer.appendChild(this.detailsDescription);
        this.detailsContainer.appendChild(this.buttonsContainer);

        this.section.appendChild(this.imageContainer);
        this.section.appendChild(this.detailsContainer);

        return this.section;
    }
}

export default Profile;
