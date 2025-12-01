import {Component} from "../Component";

class Search extends Component{
    get css() {
        return "./search.css";
    }
    get template() {
        return "./search.html";
    }
    update() {

    }
}
customElements.define("search", Search);