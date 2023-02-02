import {
    Blog,
    Footer,
    Gallery,
    NavBar,
    Profile,
    Work,
} from "../Components/index.js";
import { links } from "../data/index.js";
import { fetchData } from "../util/index.js";

const {
    blog_url,
    gallery_url,
    personal_url,
    profile_buttons_url,
    profile_links,
    project_url,
    work_url,
} = links;

export const navbar = fetchData(profile_links).then((link) => new NavBar(link));

export const profile = Promise.all([
    fetchData(personal_url),
    fetchData(profile_buttons_url),
]).then((data) => {
    const [personalDetails, profileButtons] = data;
    return new Profile({ personalDetails, profileButtons });
});

export const work = Promise.all([
    fetchData(project_url),
    fetchData(work_url),
]).then((data) => {
    const [projectData, workData] = data;
    return new Work({ projectData, workData });
});

export const blog = fetchData(blog_url).then((data) => new Blog(data));

export const gallery = fetchData(gallery_url).then((data) => new Gallery(data));

// Also can be written as:
// export const footer = new Promise((resolve, _) => resolve(new Footer()));
export const footer = new Footer();
