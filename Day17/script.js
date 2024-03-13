const menu = document.getElementById('menu');
const cross = document.getElementById('close');
const displayWrapper = document.getElementById('display-wrapper');
const linksWrapper = document.querySelector('.links-wrapper');

menu.addEventListener("click", () => {
    displayWrapper.style.right = "0";
    linksWrapper.style.right = "0";
    menu.style.right = "-100%";
    cross.style.right = "12px";
});

cross.addEventListener("click", () => {
    displayWrapper.style.right = "-100%";
    linksWrapper.style.right = "-100%";
    menu.style.right = "12px";
    cross.style.right = "-100%";
});