const centerItem = document.querySelector(".center-item");
const Menu = document.querySelector(".menu");

centerItem.addEventListener("mouseover", () => {
    Menu.classList.add("change");
});

Menu.addEventListener("mouseleave", () => {
    Menu.classList.remove("change");
}); 