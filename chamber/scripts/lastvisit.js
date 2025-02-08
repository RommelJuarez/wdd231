document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.createElement("div");
    sidebar.id = "sidebar-message";
    sidebar.style.padding = "10px";
    sidebar.style.backgroundColor = "#f8f9fa";
    sidebar.style.border = "1px solid #ddd";
    sidebar.style.margin = "10px 0";
    sidebar.style.textAlign = "center";
    sidebar.style.fontSize = "1.2rem";
    sidebar.style.fontWeight = "bold";

    const mainContent = document.querySelector("main");
    mainContent.insertBefore(sidebar, mainContent.firstChild);

    const lastVisit = localStorage.getItem("lastVisit");
    const now = Date.now();

    if (!lastVisit) {
        sidebar.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisitTime = parseInt(lastVisit);
        const timeDiff = now - lastVisitTime;
        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        if (daysDiff < 1) {
            sidebar.textContent = "Back so soon! Awesome!";
        } else {
            sidebar.textContent = `You last visited ${daysDiff} day${daysDiff === 1 ? "" : "s"} ago.`;
        }
    }

    localStorage.setItem("lastVisit", now);
});
