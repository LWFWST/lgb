import {Component} from "../Component.js";

class ContentCover extends Component{
    get css() {
        return new URL("./content-cover.css", import.meta.url).href;
    }
    get template() {
        return new URL("./content-cover.html", import.meta.url).href;
    }
    update() {

    }
}
customElements.define("content-cover", ContentCover);