import { blogHeadingDetails } from "../data/index.js";
import Component from "../lib/Component.js";
import Banner from "./Banner.js";

class Blog extends Component {
    constructor(data) {
        super();
        this.section = document.createElement("section");

        this.title = document.createElement("h2");
        this.description = document.createElement("p");
        this.blogsContainer = document.createElement("div");

        this.blogData = data;
    }

    render() {
        this.section.id = "blog";

        this.section.classList.add("work");
        this.title.classList.add("work-title");
        this.description.classList.add("work-subtitle");
        this.blogsContainer.classList.add("projects-container");

        this.title.innerText = blogHeadingDetails.title;
        this.description.innerText = blogHeadingDetails.description;

        this.blogData.forEach((data) => {
            const blog = new Banner(data);
            blog.mount(this.blogsContainer);
        });

        this.section.appendChild(this.title);
        this.section.appendChild(this.description);
        this.section.appendChild(this.blogsContainer);

        return this.section;
    }
}

export default Blog;
