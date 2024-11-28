function dropdownInit() {
    document.querySelectorAll(".dropdown").forEach(dropdown => {
        var dropinator = dropdown.querySelector(".dropinator");
        var menu = dropdown.querySelector(".menu");
        dropdown.onmouseenter = (e) => {
            dropdown.classList.add("hot");
            menu.style.left = `${dropdown.getBoundingClientRect().left}px`;
            menu.style.top = `${dropdown.getBoundingClientRect().bottom - 1}px`;
        }
        dropdown.onmouseleave = (e) => {
            dropdown.classList.remove("hot");
        }
    });
}