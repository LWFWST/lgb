import {loadCss, loadTemplate} from "../utils/loadManger";
export class Component extends HTMLElement {
    get css() {

    }
    get template() {

    }
    async connectedCallback() {
        const css = await loadCss(this.css);
        const template = await loadTemplate(this.template);
        const shadow = this.attachShadow({ mode: 'open' })
        const style = document.createElement("style");
        style.textContent = css;
        shadow.appendChild(style);
        shadow.appendChild(template.content.cloneNode(true));
        this.update();
    }
    async attributeChangedCallback() {
        this.update();
    }
    update(){

    }
}