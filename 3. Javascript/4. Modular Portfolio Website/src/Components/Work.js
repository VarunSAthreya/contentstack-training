import { projectData, workDetails } from "../data/index.js";
import Component from "../lib/Component.js";

class Work extends Component {
    constructor() {
        super();
        this.section = document.createElement("section");

        this.title = document.createElement("h2");
        this.description = document.createElement("p");
        this.chipsWrapper = document.createElement("div");
        this.projectContainer = document.createElement("div");
    }

    render() {
        this.section.id = "work";

        this.section.classList.add("work");
        this.title.classList.add("work-title");
        this.description.classList.add("work-subtitle");
        this.chipsWrapper.classList.add("chips-wrapper");
        this.projectContainer.classList.add("projects-container");

        this.title.innerText = workDetails.title;
        this.description.innerText = workDetails.description;

        workDetails.chips.forEach((data) => {
            const chip = document.createElement("div");
            chip.classList.add("chip");
            chip.style = `border-color: ${data.color}`;
            chip.innerText = data.text;

            this.chipsWrapper.appendChild(chip);
        });

        projectData.forEach((data) => {
            const project = document.createElement("div");

            const imageContainer = document.createElement("div");
            const image = document.createElement("img");
            const overlay = document.createElement("div");

            const textContainer = document.createElement("div");
            const title = document.createElement("h3");
            const description = document.createElement("p");
            const a = document.createElement("a");
            const button = document.createElement("button");

            project.classList.add("project");
            imageContainer.classList.add("img-container");
            overlay.classList.add("img-overlay");
            textContainer.classList.add("project-text-container");
            title.classList.add("project-text-title");
            description.classList.add("project-text-subtitle");

            a.target = "_blank";
            a.rel = "noopener noreferrer";
            button.innerText = "Repository";

            image.src = data.image.src;
            image.alt = data.image.alt;
            image.loading = "lazy";

            title.innerText = data.title;
            description.innerText = data.description;
            a.href = data.href;

            imageContainer.appendChild(image);
            imageContainer.appendChild(overlay);

            a.appendChild(button);

            textContainer.appendChild(title);
            textContainer.appendChild(description);
            textContainer.appendChild(a);

            project.appendChild(imageContainer);
            project.appendChild(textContainer);

            this.projectContainer.appendChild(project);
        });

        this.section.appendChild(this.title);
        this.section.appendChild(this.description);
        this.section.appendChild(this.chipsWrapper);
        this.section.appendChild(this.projectContainer);

        return this.section;
    }
}

export default Work;
