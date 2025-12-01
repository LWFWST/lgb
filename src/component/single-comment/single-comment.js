import {Component} from "../Component.js";

class SingleComment extends Component{
    static get observedAttributes() {
        return ["url","content","like","name","date"];
    }
    get css() {
        return new URL("./single-comment.css", import.meta.url).href;
    }
    get template() {
        return new URL("./single-comment.html", import.meta.url).href;
    }
    update() {
        const shadow = this.shadowRoot;
        if (!shadow) return;
        shadow.querySelector("#avatar").setAttribute("src", this.getAttribute("url"));
        shadow.querySelector("#content").innerHTML = this.getAttribute("content");
        shadow.querySelector("#name").textContent = this.getAttribute("name");
        shadow.querySelector("#date").textContent = this.getAttribute("date");
        shadow.querySelector("#like").textContent = this.getAttribute("like");
    }
}
customElements.define("single-comment", SingleComment);