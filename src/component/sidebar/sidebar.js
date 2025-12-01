import {Component} from "../Component";

class Sidebar extends Component{
    get css() {
        return "./sidebar.css";
    }
    get template() {
        return "./sidebar.html";
    }
    update() {

    }
}
customElements.define("sidebar", Sidebar);