let elements = document.getElementsByTagName("ul");
let items = document.getElementsByTagName("li");

for (let i = 0; i < elements.length; i++) {
    elements[i].style.listStyleType = "circle";
}

for (let i = 0; i < items.length; i++) {
    items[i].innerHTML = "blabla";
}