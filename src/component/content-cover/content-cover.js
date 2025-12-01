import {Component} from "../Component.js";

class ContentCover extends Component{
    static get observedAttributes(){
        return ["url","title","text","author","date","link"];
    }
    get css() {
        return new URL("./content-cover.css", import.meta.url).href;
    }
    get template() {
        return new URL("./content-cover.html", import.meta.url).href;
    }
    async connectedCallback() {
        await super.connectedCallback();
        this.bindEvents();
    }

    bindEvents() {
        const shadow = this.shadowRoot;
        if (!shadow) return;
        const container = shadow.querySelector(".cover-container");
        if (container) {
            container.addEventListener("click", () => this.detail());
        }
    }

    detail() {
        const link = this.getAttribute("link");
        if (link) {

        }
    }
    update() {
        const shadow = this.shadowRoot;
        if (!shadow) return;
        shadow.querySelector("#img").setAttribute("src", this.getAttribute("url"));
        shadow.querySelector("#title").textContent = this.getAttribute("title");
        shadow.querySelector("#text").textContent = this.getAttribute("text");
        shadow.querySelector("#name").textContent = this.getAttribute("author");
        shadow.querySelector("#date").textContent = this.getAttribute("date");
    }
}
customElements.define("content-cover", ContentCover);