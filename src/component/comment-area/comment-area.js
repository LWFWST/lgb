import {Component} from "../Component.js";

class CommentArea extends Component{
    get css() {
        return new URL("./comment-area.css", import.meta.url).href;
    }
    get template() {
        return new URL("./comment-area.html", import.meta.url).href;
    }
    update() {

    }
}
customElements.define("comment-area", CommentArea);