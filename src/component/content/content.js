import {Component} from "../Component.js";

class Content extends Component{
    static get observedAttributes(){
        return ["identify"]
    }
    get css() {
        return new URL("./" + this.getAttribute("identify") + "/content.css", import.meta.url).href;
    }
    get template() {
        return new URL("./" + this.getAttribute("identify") + "/content.html", import.meta.url).href;
    }
    update() {
        
    }
}
customElements.define("content-area", Content);