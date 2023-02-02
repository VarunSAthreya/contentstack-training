import { footerData } from "../data/index.js";
import Component from "../lib/Component.js";

class Footer extends Component {
    constructor() {
        super();

        this.footer = document.createElement("footer");
        this.p = document.createElement("p");
    }

    render() {
        this.p.classList.add("footer-license");
        this.p.innerHTML = footerData;

        this.footer.appendChild(this.p);

        return this.footer;
    }
}

export default Footer;
