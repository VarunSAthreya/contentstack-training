import {
    Blog,
    Footer,
    Gallery,
    NavBar,
    Profile,
    Work,
} from "./Components/index.js";
import { fetchData } from "./util/index.js";

const blog_url =
    "https://raw.githubusercontent.com/VarunSAthreya/contentstack-training/main/3.%20Javascript/5.%20Async%20Website%20Rendering%3A/data/blog.json";
const gallery_url =
    "https://raw.githubusercontent.com/VarunSAthreya/contentstack-training/main/3.%20Javascript/5.%20Async%20Website%20Rendering%3A/data/gallery.json";
const personal_details =
    "https://raw.githubusercontent.com/VarunSAthreya/contentstack-training/main/3.%20Javascript/5.%20Async%20Website%20Rendering%3A/data/personal-data.json";
const profile_button =
    "https://raw.githubusercontent.com/VarunSAthreya/contentstack-training/main/3.%20Javascript/5.%20Async%20Website%20Rendering%3A/data/profile-buttons.json";
const profile_links =
    "https://raw.githubusercontent.com/VarunSAthreya/contentstack-training/main/3.%20Javascript/5.%20Async%20Website%20Rendering%3A/data/profile-links.json";
const project_link =
    "https://raw.githubusercontent.com/VarunSAthreya/contentstack-training/main/3.%20Javascript/5.%20Async%20Website%20Rendering%3A/data/projects.json";
const work_link =
    "https://raw.githubusercontent.com/VarunSAthreya/contentstack-training/main/3.%20Javascript/5.%20Async%20Website%20Rendering%3A/data/work.json";

fetchData(profile_links).then((link) => {
    const nav = new NavBar(link);
    nav.mount();
});

Promise.all([fetchData(personal_details), fetchData(profile_button)]).then(
    (data) => {
        const [personalDetails, profileButtons] = data;
        const profile = new Profile({ personalDetails, profileButtons });
        profile.mount();
    }
);

Promise.all([fetchData(project_link), fetchData(work_link)]).then((data) => {
    const [projectData, workData] = data;
    const work = new Work({ projectData, workData });
    work.mount();
});

fetchData(blog_url).then((data) => {
    const blog = new Blog(data);
    blog.mount();
});

fetchData(gallery_url).then((data) => {
    const gallery = new Gallery(data);
    gallery.mount();
    const footer = new Footer();
    footer.mount();
});

// [
//     new NavBar(),
//     new Profile(),
//     new Work(),
//     new Blog(),
//     new Gallery(),
//     new Footer(),
// ].forEach((comp) => comp.mount());
