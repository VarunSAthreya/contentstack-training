import {
    Header,
    Lightbox,
    ProductContainer,
    Sidebar,
} from "../Components/index.js";
import { fetchData } from "../util/index.js";

const url =
    "https://raw.githubusercontent.com/VarunSAthreya/contentstack-training/main/3.%20Javascript/6.%20Communication%20between%20modular%20components/data/products.json";

export const header = new Header();
export const sidebar = new Sidebar();

export const lightbox = fetchData(url).then((data) => new Lightbox(data));
export const products = fetchData(url).then(
    (data) => new ProductContainer(data)
);
