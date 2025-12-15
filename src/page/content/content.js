const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("identify");
const content = document.getElementById("content");
content.setAttribute("identify", id);