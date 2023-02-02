import { blog, footer, gallery, navbar, profile, work } from "./api/index.js";

Promise.all([
    navbar,
    profile,
    work,
    blog,
    gallery,
    footer,
]).then((components) => components.forEach((cmp) => cmp.mount()))
  .catch((err) => console.error(err));
