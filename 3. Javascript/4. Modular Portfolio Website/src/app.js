import {
    Blog,
    Footer,
    Gallery,
    NavBar,
    Profile,
    Work,
} from "./Components/index.js";

const root = document.getElementById("root");

[
    new NavBar(),
    new Profile(),
    new Work(),
    new Blog(),
    new Gallery(),
    new Footer(),
].forEach((comp) => comp.mount(root));
