document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.querySelector(".loading-screen");
    const navigation = document.querySelector("nav");
    const menuToggle = document.querySelector(".menu-toggle");
    const sections = document.querySelectorAll(".dashboard-section");
    const links = document.querySelectorAll(".dashboard-link");

    sections.forEach(section => {
        if (section.id !== "home") {
            const backButton = document.createElement("button");

            backButton.className = "section-back";
            backButton.type = "button";
            backButton.innerHTML = "← Back to Dashboard";
            backButton.addEventListener("click", () => showSection("home"));

            section.prepend(backButton);
        }
    });

    function closeMenu() {
        navigation?.classList.remove("menu-open");
        menuToggle?.setAttribute("aria-expanded", "false");
    }

    function showSection(id, updateUrl = true) {
        const section = document.getElementById(id) || document.getElementById("home");

        sections.forEach(item => {
            item.classList.toggle("active-section", item === section);
        });

        links.forEach(link => {
            link.classList.toggle(
                "active",
                link.getAttribute("href") === `#${section.id}`
            );
        });

        if (updateUrl) {
            history.pushState(null, "", `#${section.id}`);
        }

        closeMenu();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    links.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            showSection(link.getAttribute("href").substring(1));
        });
    });

    menuToggle?.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("menu-open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    window.addEventListener("popstate", () => {
        showSection(window.location.hash.substring(1) || "home", false);
    });

    showSection(window.location.hash.substring(1) || "home", false);

    window.addEventListener("load", () => {
        setTimeout(() => {
            loadingScreen?.classList.add("loaded");
            document.body.classList.add("dashboard-ready");
        }, 700);
    });

    if (window.Typed) {
        new Typed(".typing", {
            strings: [
                "Aspiring Frontend Developer",
                "Creative Problem Solver",
                "Builder of Modern Websites"
            ],
            typeSpeed: 55,
            backSpeed: 30,
            backDelay: 1600,
            loop: true
        });
    }
});