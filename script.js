document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navigationBar = document.querySelector(".navigationbar");

    menuIcon.addEventListener("click", function () {
        navigationBar.classList.toggle("show");
    });
});
