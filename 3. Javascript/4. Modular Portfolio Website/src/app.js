import {
    Blog,
    Footer,
    Gallery,
    NavBar,
    Profile,
    Work,
} from "./Components/index.js";

const root = document.getElementById("root");

const blog = new Blog();
const footer = new Footer();
const gallery = new Gallery();
const nav = new NavBar();
const profile = new Profile();
const work = new Work();

nav.mount(root);
profile.mount(root);
work.mount(root);
blog.mount(root);
gallery.mount(root);
footer.mount(root);
