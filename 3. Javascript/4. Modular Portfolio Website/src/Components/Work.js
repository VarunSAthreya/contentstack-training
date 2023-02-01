import { projectData, workDetails } from "../data/index.js";
import Component from "../lib/Component.js";
import Banner from "./Banner.js";

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
            const project = new Banner(data);
            project.mount(this.projectContainer);
        });

        this.section.appendChild(this.title);
        this.section.appendChild(this.description);
        this.section.appendChild(this.chipsWrapper);
        this.section.appendChild(this.projectContainer);

        return this.section;
    }
}

export default Work;
