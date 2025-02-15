import { exercises } from "../data/exercises.mjs";

function displayExercises(exercises) {
    const container = document.getElementById("cards-container");
    container.innerHTML = "";

    Object.keys(exercises).forEach(categoryKey => {
        const category = exercises[categoryKey];
        category.forEach(exercise => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <img src="${exercise.image}" alt="${exercise.name}" class="card-img" loading="lazy">
                <h2 class="card-title">${exercise.name}</h2>
                <p class="category"><strong>Category: </strong>${exercise.category}</p>
                <p class="description">${exercise.description}</p>`;
            container.appendChild(card);
        });
    });
}

displayExercises(exercises);
