import { places } from "../data/places.mjs";

function displayPlaces(places){
    const container=document.getElementById("cards-container");
    container.innerHTML="";

    places.forEach(place => {
        const card=document.createElement("div");
        card.className="card";
        card.innerHTML=`
            <img src="${place.image_url}" alt="${place.name}" class="card-img loading="lazy">
            <h2 class="card-title">${place.name}</h2>
            <p class="cost"><strong>Cost: </strong>${place.cost}</p>
            <p class="description">${place.description}</p>
            <p class="address">${place.address}</p>`;
        container.appendChild(card);
    });
    

}

displayPlaces(places);