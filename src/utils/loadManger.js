export async function loadTemplate(path) {
    const template = await fetch(path).then(res => res.text());
    const tmpl = document.createElement('template');
    tmpl.innerHTML = template;
    return tmpl;
}
export async function loadCss(path) {
    return await fetch(path).then(res => res.text());
}
