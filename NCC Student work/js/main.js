document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector("#navbarCollapse");

    toggleButton.addEventListener("click", function () {
        if (navbarCollapse.classList.contains("show")) {
            navbarCollapse.classList.remove("show");
            navbarCollapse.style.maxHeight = "0";
        } else {
            navbarCollapse.classList.add("show");
            navbarCollapse.style.maxHeight = navbarCollapse.scrollHeight + "px";
        }
    });

    // Close the navbar when clicking outside
    document.addEventListener("click", function (event) {
        if (!toggleButton.contains(event.target) && !navbarCollapse.contains(event.target)) {
            navbarCollapse.classList.remove("show");
            navbarCollapse.style.maxHeight = "0";
        }
    });
});
