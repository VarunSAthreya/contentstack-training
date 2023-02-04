import { header, lightbox, products, sidebar } from "./api/index.js";

Promise.all([
    header,
    products,
    sidebar,
    lightbox
]).then((components) => components.forEach((cmp) => cmp.mount()))
  .catch((err) => console.error(err));
