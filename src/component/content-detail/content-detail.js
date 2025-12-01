import {Component} from "../Component.js";

class ContentDetail extends Component{
    get css() {
        return new URL("./content-detail.css", import.meta.url).href;
    }
    get template() {
        return new URL("./content-detail.html", import.meta.url).href;
    }
    update() {

    }
}
customElements.define("content-detail", ContentDetail);