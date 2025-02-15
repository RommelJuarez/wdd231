const form = document.querySelector("form");


form.addEventListener("submit", function () {
    document.getElementById("timestamp").value = new Date().toISOString();
});