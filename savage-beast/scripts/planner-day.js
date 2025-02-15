document.addEventListener("DOMContentLoaded", function () {
    
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = days[new Date().getDay()];

    
    const thElement = document.querySelector(`th[id$="${today.toLowerCase()}th"]`);
    const tdElement = document.querySelector(`td[data-label="${today}"]`);

    
    if (thElement) thElement.classList.add("today");
    if (tdElement) tdElement.classList.add("today");
});
