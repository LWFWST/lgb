import {Component} from "../Component.js";

class Sidebar extends Component{
    get css() {
        return new URL("./sidebar.css", import.meta.url).href;
    }
    get template() {
        return new URL("./sidebar.html", import.meta.url).href;
    }
    update() {

    }
}
customElements.define("side-bar", Sidebar);