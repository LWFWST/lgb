import {Component} from "../Component";

class Navbar extends Component{
    get css() {
        return "./navbar.css";
    }
    get template() {
        return "./navbar.html";
    }
    update() {

    }
}
customElements.define("navbar", Navbar);