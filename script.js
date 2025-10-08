const menuBtn = document.getElementById("menu_btn");
const navLinks = document.getElementById("nav_links");
const body = document.body;

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    body.classList.toggle("menu-open");

    const icon = menuBtn.querySelector("i");
    icon.classList.toggle("bx-menu");
    icon.classList.toggle("bx-x");
});

document.querySelectorAll(".nav_links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        body.classList.remove("menu-open");

        const icon = menuBtn.querySelector("i");
        icon.classList.add("bx-menu");
        icon.classList.remove("bx-x");
    });
});
