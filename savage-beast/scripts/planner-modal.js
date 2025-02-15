import { exercises } from "../data/exercises.mjs";

const modal = document.getElementById("modal-editor");
const closeModalBtn = document.getElementById("closeModal");
const modalDiv = document.getElementById("modalDescription");

function cargarDatos() {
    let datosGuardados = JSON.parse(localStorage.getItem("planificador")) || {};
    for (let dia in datosGuardados) {
        let celda = document.getElementById(dia);
        if (celda) {
            // Si hay elementos para ese día, renderizarlos
            if (datosGuardados[dia].length > 0) {
                celda.innerHTML = datosGuardados[dia].map((item, index) => {
                    if (item.ejercicio) {
                        return `<li>
                                    <input type="checkbox" class="check-item">
                                    <strong>${item.ejercicio} - ${item.series} series x ${item.reps} ${item.tipo} </strong>
                                    <button class="borrar-item" data-dia="${dia}" data-index="${index}">X</button>
                                </li>`;
                    } else if (item.nota) {
                        return `<li>
                                    <input type="checkbox" class="check-item">
                                    <strong>${item.nota}</strong>
                                    <button class="borrar-item" data-dia="${dia}" data-index="${index}">X</button>
                                </li>`;
                    }
                }).join("");
            } else {
                // Si no hay elementos, dejar la celda vacía
                celda.innerHTML = "";
            }
        }
    }
    agregarEventosBorrar();
}

function generarOpcionesEjercicios() {
    let opcionesHTML = "";
    for (let categoria in exercises) {
        opcionesHTML += `<optgroup label="${categoria.replace('_', ' ').toUpperCase()}">`;
        exercises[categoria].forEach(ejercicio => {
            opcionesHTML += `<option value="${ejercicio.name}" data-type="${categoria}">${ejercicio.name}</option>`;
        });
        opcionesHTML += `</optgroup>`;
    }
    return opcionesHTML;
}

document.querySelector(".task").addEventListener("click", () => {
    modalDiv.innerHTML = `
        <label for="dia">Select a day:</label>
        <select id="dia">
            <option value="lunes">Monday</option>
            <option value="martes">Tuesday</option>
            <option value="miercoles">Wednesday</option>
            <option value="jueves">Thursday</option>
            <option value="viernes">Friday</option>
            <option value="sabado">Saturday</option>
            <option value="domingo">Sunday</option>
        </select>

        <label for="ejercicio">Select an exercise:</label>
        <select id="ejercicio">${generarOpcionesEjercicios()}</select>

        <label for="series">Sets:</label>
        <input type="number" id="series" min="1" max="10" value="3">

        <label for="reps">Repetitions / Minutes:</label>
        <input type="number" id="reps" min="1" max="100" value="10">

        <button id="agregarBtn" class="task">Add</button>
        <button id="limpiarDiaBtn" class="task">Clear Day</button>
    `;

    document.getElementById("agregarBtn").addEventListener("click", agregarContenido);
    document.getElementById("limpiarDiaBtn").addEventListener("click", limpiarDia);
    modal.showModal();
});

document.querySelector(".workout").addEventListener("click", () => {
    modalDiv.innerHTML = `
        <label for="diaTexto">Select a day:</label>
        <select id="diaTexto">
            <option value="lunes">Monday</option>
            <option value="martes">Tuesday</option>
            <option value="miercoles">Wednesday</option>
            <option value="jueves">Thursday</option>
            <option value="viernes">Friday</option>
            <option value="sabado">Saturday</option>
            <option value="domingo">Sunday</option>
        </select>

        <label for="nota">Task:</label>
        <input type="text" id="nota" maxlength="30">

        <button id="agregarTextoBtn" class="task">Add Task</button>
    `;
    document.getElementById("agregarTextoBtn").addEventListener("click", agregarTexto);
    modal.showModal();
});

closeModalBtn.addEventListener("click", () => modal.close());

function agregarContenido() {
    let dia = document.getElementById("dia").value;
    let ejercicio = document.getElementById("ejercicio").value;
    let series = document.getElementById("series").value;
    let reps = document.getElementById("reps").value;
    let tipo = document.getElementById("ejercicio").options[document.getElementById("ejercicio").selectedIndex].dataset.type;
    
    let datosGuardados = JSON.parse(localStorage.getItem("planificador")) || {};
    if (!datosGuardados[dia]) datosGuardados[dia] = [];

    let nuevoEjercicio = { ejercicio, series, reps, tipo: tipo === "cardio" ? "minutos" : "reps" };
    datosGuardados[dia].push(nuevoEjercicio);
    localStorage.setItem("planificador", JSON.stringify(datosGuardados));

    cargarDatos();
    modal.close();
}

function agregarTexto() {
    let dia = document.getElementById("diaTexto").value;
    let nota = document.getElementById("nota").value;
    if (nota) {
        let datosGuardados = JSON.parse(localStorage.getItem("planificador")) || {};
        if (!datosGuardados[dia]) datosGuardados[dia] = [];

        let nuevaNota = { nota };
        datosGuardados[dia].push(nuevaNota);
        localStorage.setItem("planificador", JSON.stringify(datosGuardados));

        cargarDatos();
    }
    modal.close();
}

function limpiarDia() {
    let dia = document.getElementById("dia").value;
    let datosGuardados = JSON.parse(localStorage.getItem("planificador")) || {};
    delete datosGuardados[dia];
    localStorage.setItem("planificador", JSON.stringify(datosGuardados));
    document.getElementById(dia).innerHTML = "";
    modal.close();
}

function agregarEventosBorrar() {
    document.querySelectorAll(".borrar-item").forEach(btn => {
        btn.addEventListener("click", (e) => {
            let dia = e.target.dataset.dia;
            let index = e.target.dataset.index;
            let datosGuardados = JSON.parse(localStorage.getItem("planificador")) || {};

            // Eliminar el elemento específico
            datosGuardados[dia].splice(index, 1);

            

            // Guardar los cambios en el localStorage
            localStorage.setItem("planificador", JSON.stringify(datosGuardados));

            // Recargar los datos en la interfaz
            cargarDatos();
        });
    });
}

document.addEventListener("DOMContentLoaded", cargarDatos);