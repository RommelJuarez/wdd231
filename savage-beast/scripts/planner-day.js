document.addEventListener("DOMContentLoaded", function () {
    // Obtener el día actual como string en inglés
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = days[new Date().getDay()];

    // Seleccionar el th y el td correspondientes
    const thElement = document.querySelector(`th[id$="${today.toLowerCase()}th"]`);
    const tdElement = document.querySelector(`td[data-label="${today}"]`);

    // Agregar la clase "today" si los elementos existen
    if (thElement) thElement.classList.add("today");
    if (tdElement) tdElement.classList.add("today");
});
