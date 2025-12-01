import {Component} from "../Component.js";

class Navbar extends Component{
    static get observedAttributes() {
        return ["active-id"];
    }
    get css() {
        return new URL("./navbar.css", import.meta.url).href;
    }
    get template() {
        return new URL("./navbar.html", import.meta.url).href;
    }
    update() {
        const shadow = this.shadowRoot;
        if (!shadow) return;
        const activeId = this.getAttribute("active-id");
        if (!activeId) return;
        const navItems = shadow.querySelectorAll(".text");
        navItems.forEach(item => {
            if (item.id === activeId) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });
    }
}
customElements.define("nav-bar", Navbar);