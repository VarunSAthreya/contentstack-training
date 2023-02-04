import Header from "./Components/Header.js";
import Lightbox from "./Components/Lightbox.js";
import ProductContainer from "./Components/ProductContainer.js";
import Sidebar from "./Components/Sidebar.js";
import { fetchData } from "./util/index.js";

const url =
    "https://raw.githubusercontent.com/VarunSAthreya/contentstack-training/main/3.%20Javascript/6.%20Communication%20between%20modular%20components/data/products.json";

const header = new Header();
header.mount();

const sidebar = new Sidebar();
sidebar.mount();

fetchData(url).then((data) => {
    const listing = new ProductContainer(data);
    listing.mount();

    const lightbox = new Lightbox(data);
    lightbox.mount();
});
