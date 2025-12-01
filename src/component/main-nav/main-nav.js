import {Component} from "../Component.js";

class MainNav extends Component{
    get css() {
        return new URL("./main-nav.css", import.meta.url).href;
    }
    get template() {
        return new URL("./main-nav.html", import.meta.url).href;
    }
    update() {

    }
}
customElements.define("main-nav", MainNav);