export async function loadTemplate(path) {
    const response = await fetch(path);
    const templateText = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(templateText, 'text/html');
    return doc.querySelector('template');
}

export async function loadCss(path) {
    const response = await fetch(path);
    return response.text();
}