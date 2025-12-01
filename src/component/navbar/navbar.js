import {Component} from "../Component";

class Navbar extends Component{
    get css() {
        return new URL("./navbar.css", import.meta.url).href;
    }
    get template() {
        return new URL("./navbar.html", import.meta.url).href;
    }
    update() {

    }
}
customElements.define("nav-bar", Navbar);