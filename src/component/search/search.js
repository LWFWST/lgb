import {Component} from "../Component.js";

class Search extends Component{
    get css() {
        return new URL("./search.css", import.meta.url).href;
    }
    get template() {
        return new URL("./search.html", import.meta.url).href;
    }
    update() {

    }
}
customElements.define("search-bar", Search);